
function Service({ icon, title, text }) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 mt-12 w-1/2 lg:flex-row lg:justify-start lg:items-start lg:w-[40%]">
            <div className="text-white">{icon}</div>
            <div className="text-center lg:text-left">
                <h5 className="font-medium text-white text-lg">{title}</h5>
                <p className="text-[#696969] max-w-[300px] mt-2">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Service