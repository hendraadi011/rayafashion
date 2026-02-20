import '../laoder.css'

const Loading = () => {
  return (
    <>
      <div
        className='fixed inset-0 flex justify-center items-center  bg-opacity-50'
        style={{ zIndex: 100000 }}
      >
        <div className='loader'></div>
      </div>
    </>
  )
}

export default Loading
