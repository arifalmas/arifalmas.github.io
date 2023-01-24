import { SOCIAL_ICONS, COUNTERS } from "../../../data"

function HeroBottom() {
  return (
    <div className='absolute md:bottom-2 bottom-5 left-0 w-full'>
      <div className="container">
        <div className='flex justify-between md:flex-row flex-col gap-4 items-center'>
          {/* ==== left side - Counters ==== */}
          <div className="flex gap-[80px]">
            {COUNTERS.map((item, index) => (
              <div className="flex items-center gap-[20px]" key={index}>
                <div>
                  <h3 className="text-gray-50 font-medium text-[55px]">{item.count}</h3>
                </div>
                <div>
                  <p
                    className='text-[#7C7C7C] font-normal text-[16px] leading-6'
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* ==== Right side - social icons ==== */}
          <div className='flex gap-5 items-center text-white'>
            {SOCIAL_ICONS.map((icon, index) => (
              <a href={icon.href} key={index} target="_blank" rel="noreferrer">
                {icon.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBottom