import { supabase, STORAGE_BUCKET } from '../lib/supabase'

export interface UploadImageOptions {
  bucket?: string
  folder?: string
  fileName?: string
  cacheControl?: string
  upsert?: boolean
}

export interface ImageData {
  url: string
  publicUrl: string
  path: string
}

/**
 * Service for handling image operations with Supabase Storage
 */
export class ImageService {
  /**
   * Upload an image to Supabase Storage
   */
  static async uploadImage(
    file: File,
    options: UploadImageOptions = {}
  ): Promise<ImageData> {
    const {
      bucket = STORAGE_BUCKET,
      folder = '',
      fileName = `${Date.now()}-${file.name}`,
      cacheControl = '3600',
      upsert = false
    } = options

    const filePath = folder ? `${folder}/${fileName}` : fileName

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl,
        upsert
      })

    if (error) {
      throw new Error(`Failed to upload image: ${error.message}`)
    }

    const publicUrl = this.getPublicUrl(filePath, bucket)

    return {
      url: data.path,
      publicUrl,
      path: filePath
    }
  }

  /**
   * Get the public URL for an image
   */
  static getPublicUrl(path: string, bucket: string = STORAGE_BUCKET): string {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path)
    return data.publicUrl
  }

  /**
   * List images in a folder
   */
  static async listImages(
    folder: string = '',
    bucket: string = STORAGE_BUCKET
  ) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(folder, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' }
      })

    if (error) {
      throw new Error(`Failed to list images: ${error.message}`)
    }

    return data?.map(file => ({
      ...file,
      publicUrl: this.getPublicUrl(
        folder ? `${folder}/${file.name}` : file.name,
        bucket
      )
    })) || []
  }

  /**
   * Delete an image from storage
   */
  static async deleteImage(
    path: string,
    bucket: string = STORAGE_BUCKET
  ): Promise<void> {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path])

    if (error) {
      throw new Error(`Failed to delete image: ${error.message}`)
    }
  }

  /**
   * Download an image
   */
  static async downloadImage(
    path: string,
    bucket: string = STORAGE_BUCKET
  ): Promise<Blob> {
    const { data, error } = await supabase.storage
      .from(bucket)
      .download(path)

    if (error) {
      throw new Error(`Failed to download image: ${error.message}`)
    }

    return data
  }

  /**
   * Move or rename an image
   */
  static async moveImage(
    fromPath: string,
    toPath: string,
    bucket: string = STORAGE_BUCKET
  ): Promise<void> {
    const { error } = await supabase.storage
      .from(bucket)
      .move(fromPath, toPath)

    if (error) {
      throw new Error(`Failed to move image: ${error.message}`)
    }
  }

  /**
   * Create a signed URL for temporary access
   */
  static async createSignedUrl(
    path: string,
    expiresIn: number = 3600,
    bucket: string = STORAGE_BUCKET
  ): Promise<string> {
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(path, expiresIn)

    if (error) {
      throw new Error(`Failed to create signed URL: ${error.message}`)
    }

    return data.signedUrl
  }
}
