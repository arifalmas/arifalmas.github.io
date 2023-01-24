
function SkillProgress({ name, parentage }) {
  return (
    <div className="flex flex-col w-full sm:w-[48%] md:w-[30%] mb-6">
      <div className="flex gap-10 justify-between items-center">
        <h5 className="text-gray-200 font-medium">{name}</h5>
        <p className="text-gray-400">{parentage}%</p>
      </div>
      {/* ProgressBar */}
      <div className="w-full bg-[#D9D9D9] rounded-full h-[3px] mb-4 dark:bg-gray-700 mt-1 relative">
        <div
          className="bg-primary-color h-[3px] rounded-full absolute top-0 shim-red"
          style={{
            width: `${parentage}%`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default SkillProgress