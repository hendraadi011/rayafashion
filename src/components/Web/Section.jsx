import SectionSvg from './svg/SectionSvg'

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
  style,
}) => {
  return (
    <div
      id={id}
      className={`
      relative
      ${
        customPaddings ||
        `bg-white pb-10  lg:pb-0 xl:pb-20 ${crosses ? 'lg:pb-32' : ''}`
      }
      ${className || ''}`}
      style={style}
    >
      {children}

      {/* <div className='hidden absolute top-0 left-5 w-0.25  h-full bg-slate-300 pointer-events-none md:block lg:left-7.5 xl:left-20' />
      <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-slate-300 pointer-events-none md:block lg:right-7.5 xl:right-20' /> */}

      {/* {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-1 right-1 h-0.25 bg-slate-300 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-20 right-20`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )} */}
    </div>
  )
}

export default Section
