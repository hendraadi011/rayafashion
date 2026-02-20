import {
  Dialog,
  DialogContent,
  Fade,
  IconButton,
  Typography,
  CircularProgress,
} from '@mui/material'
import { forwardRef, useState } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const ConfirmBoxDua = ({
  open,
  closeDialog,

  // TEXT
  judul = 'Konfirmasi Tindakan',
  title = 'Apakah Anda yakin ingin melanjutkan tindakan ini? Tindakan ini tidak dapat dibatalkan.',
  confirmLabel = 'Ya, Lanjutkan',
  cancelLabel = 'Batal',

  // ACTION
  onConfirm,

  // COLOR CUSTOM
  confirmColor = '#2563eb', // blue-600
  confirmHoverColor = '#1d4ed8', // blue-700
  cancelBorderColor = '#d1d5db', // gray-300
  cancelTextColor = '#374151', // gray-700
  cancelHoverBg = '#e5e7eb', // gray-200
  iconColor = '#facc15', // yellow-400
  backgroundColor = '#ffffff',
  textColor = '#333333',
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = async () => {
    setIsLoading(true)
    try {
      await onConfirm()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog
      open={open}
      scroll='body'
      onClose={closeDialog}
      TransitionComponent={Transition}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor,
          color: textColor,
          borderRadius: '12px',
          padding: '5px',
          boxShadow: '0px 8px 24px rgba(0,0,0,0.12)',
        },
      }}
    >
      <DialogContent className=' gap-4 items-start rounded-md bg-white'>
        <div className='flex justify-center items-center mb-5'>
          <span className='bg-red-100 p-2 rounded-full'>
            <IconAlertTriangle size={30} stroke={1.5} color={iconColor} />
          </span>
        </div>

        <div>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}
          >
            {judul}
          </Typography>

          <Typography variant='body2' sx={{ mt: 1, opacity: 0.85 }}>
            {title}
          </Typography>

          <div className='mt-6 flex justify-center gap-3 text-sm w-full'>
            {/* CANCEL */}
            <button
              onClick={closeDialog}
              disabled={isLoading}
              style={{
                borderColor: cancelBorderColor,
                color: cancelTextColor,
              }}
              className='px-4 py-2 w-full rounded-md bg-n-2 font-bold transition-all
              hover:bg-gray-200 active:scale-95 disabled:opacity-50 text-center'
            >
              {cancelLabel}
            </button>

            {/* CONFIRM */}
            <button
              onClick={handleConfirm}
              disabled={isLoading}
              style={{
                backgroundColor: confirmColor,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = confirmHoverColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = confirmColor)
              }
              className='px-4 py-2 w-full rounded-md text-white
              transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 text-center'
            >
              {isLoading ? (
                <>
                  <CircularProgress size={16} color='inherit' />
                  Memproses...
                </>
              ) : (
                confirmLabel
              )}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmBoxDua
