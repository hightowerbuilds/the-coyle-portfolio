import { useState, useEffect } from 'react'
import { ImageService } from '../services/imageService'

export interface UseSupabaseImageOptions {
  bucket?: string
  folder?: string
}

export interface UseSupabaseImageReturn {
  images: any[]
  loading: boolean
  error: Error | null
  uploadImage: (file: File, fileName?: string) => Promise<void>
  deleteImage: (path: string) => Promise<void>
  refresh: () => Promise<void>
  getPublicUrl: (path: string) => string
}

/**
 * Custom hook for managing images with Supabase
 */
export function useSupabaseImage(
  options: UseSupabaseImageOptions = {}
): UseSupabaseImageReturn {
  const [images, setImages] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const { bucket, folder = '' } = options

  // Load images on mount
  useEffect(() => {
    loadImages()
  }, [folder, bucket])

  const loadImages = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await ImageService.listImages(folder, bucket)
      setImages(data)
    } catch (err) {
      setError(err as Error)
      console.error('Error loading images:', err)
    } finally {
      setLoading(false)
    }
  }

  const uploadImage = async (file: File, fileName?: string) => {
    setError(null)
    try {
      await ImageService.uploadImage(file, {
        bucket,
        folder,
        fileName
      })
      // Refresh the images list after upload
      await loadImages()
    } catch (err) {
      setError(err as Error)
      console.error('Error uploading image:', err)
      throw err
    }
  }

  const deleteImage = async (path: string) => {
    setError(null)
    try {
      await ImageService.deleteImage(path, bucket)
      // Refresh the images list after deletion
      await loadImages()
    } catch (err) {
      setError(err as Error)
      console.error('Error deleting image:', err)
      throw err
    }
  }

  const getPublicUrl = (path: string): string => {
    return ImageService.getPublicUrl(path, bucket)
  }

  return {
    images,
    loading,
    error,
    uploadImage,
    deleteImage,
    refresh: loadImages,
    getPublicUrl
  }
}
