import { useState } from 'react'
import { IconX } from '@tabler/icons-react'

const ImagePreview = ({ url }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!url) {
    return (
      <div className='flex items-center justify-center aspect-square text-gray-400'>
        Tidak ada image
      </div>
    )
  }

  return (
    <>
      <button
        type='button'
        onClick={() => setSelectedImage(url)}
        className='w-full aspect-square overflow-hidden'
      >
        <img
          src={url}
          alt='Gallery'
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
      </button>

      {/* Modal */}
      {selectedImage && (
        <div className='fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 animate-fadeIn'>
          <div className='relative max-w-5xl w-full animate-zoomIn'>
            <button
              className='absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-lg hover:scale-105 transition'
              onClick={() => setSelectedImage(null)}
            >
              <IconX size={20} />
            </button>

            <img
              src={selectedImage}
              alt='Preview'
              className='w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl'
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ImagePreview
