
function Input({ className, ...rest }) {
    return (
        <input
            type="text"
            className={`w-[100%] h-12 p-3 mb-5 outline-none bg-transparent border-b border-b-gray-600 focus:border-b-primary-color text-gray-300 ${className}`}
            {...rest}
        />
    )
}

export default Input