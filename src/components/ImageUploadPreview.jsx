import { useState, useMemo } from 'react'
import { IconCloudUpload, IconSquareX, IconX } from '@tabler/icons-react'

export default function ImageUploadPreview({
  coverImage,
  setCoverImage,
  errors,
}) {
  const [selectedImage, setSelectedImage] = useState(null)

  const previewUrl = useMemo(() => {
    if (!coverImage) return null

    // Jika coverImage adalah File, buat URL objek
    if (typeof coverImage === 'object') {
      return URL.createObjectURL(coverImage)
    }

    // Jika coverImage adalah string (URL dari server)
    return coverImage
  }, [coverImage])

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      setCoverImage(file)
    } else {
      console.error('No file selected')
    }
  }

  const deleteCover = () => {
    setCoverImage(null)
  }

  return (
    <>
      <div className='p-4'>
        <div className='w-full'>
          <div className='flex flex-col items-center w-full'>
            <div
              className={`relative w-full h-[12rem] md:h-[12.5rem] border ${
                errors.image ? 'border-red-400' : 'border-gray-300'
              } border-dashed rounded-xl flex justify-center items-center bg-white shadow-sm dark:bg-secondary-dark-bg`}
            >
              {coverImage ? (
                <>
                  <div className='absolute top-2 right-2 z-10'>
                    <button
                      type='button'
                      onClick={deleteCover}
                      className='bg-red-500 hover:bg-red-600 text-white p-1 rounded-full shadow-md'
                    >
                      <IconSquareX size={20} />
                    </button>
                  </div>
                  <button
                    type='button'
                    onClick={() => setSelectedImage(previewUrl)}
                    className='w-full h-full'
                  >
                    <img
                      src={previewUrl}
                      alt='Preview'
                      className='w-full h-full object-cover rounded-xl'
                    />
                  </button>
                </>
              ) : (
                <label
                  htmlFor='file'
                  className='flex flex-col items-center justify-center gap-2 text-gray-500 dark:text-slate-300 cursor-pointer'
                >
                  <IconCloudUpload size={36} />
                  <span className='text-sm font-medium'>
                    Klik untuk upload gambar
                  </span>
                  <input
                    type='file'
                    id='file'
                    name='image'
                    onChange={handleImageChange}
                    className='hidden'
                  />
                </label>
              )}
            </div>

            {errors.image && (
              <p className='text-red-500 text-sm mt-2'>{errors.image}</p>
            )}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[1000]'>
          <div className='relative'>
            <button
              className='absolute top-2 right-2 bg-white rounded-full p-2 text-black'
              onClick={() => setSelectedImage(null)}
            >
              <IconX />
            </button>
            <img
              src={selectedImage}
              alt='Selected'
              className='max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg'
            />
          </div>
        </div>
      )}
    </>
  )
}
