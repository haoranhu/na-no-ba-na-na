import { useState, useRef, useCallback } from 'react'
import { fileToDataURL } from '@/lib/imageUtils'

export function useImageUpload() {
  const [image, setImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback(async (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setImageFile(file)
      try {
        const dataURL = await fileToDataURL(file)
        setImage(dataURL)
      } catch (error) {
        console.error('Error reading file:', error)
      }
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileSelect(e.dataTransfer.files[0])
      }
    },
    [handleFileSelect]
  )

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        handleFileSelect(e.target.files[0])
      }
    },
    [handleFileSelect]
  )

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const reset = useCallback(() => {
    setImage(null)
    setImageFile(null)
  }, [])

  return {
    image,
    imageFile,
    fileInputRef,
    handleFileSelect,
    handleDrop,
    handleFileInput,
    openFileDialog,
    reset,
    setImage,
  }
}

