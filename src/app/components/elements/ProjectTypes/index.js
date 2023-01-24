
function ProjectTypes({ types, selected, onChange }) {
    return (
        <div className="flex flex-wrap justify-center space-x-3 sm:space-x-5 my-10">
            {types.map((type, index) => (
                <button
                    key={index}
                    className={`
                text-white text-base font-normal border-b-2 border-[#040404] mb-3 sm:mb-0
                hover:text-primary-color hover:border-primary-color transition duration-300
                ${type === selected && "Portfolio__active_type"}
              `}
                    onClick={() => onChange(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    )
}

export default ProjectTypes