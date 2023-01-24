
function Textarea({ className, ...rest }) {
  return (
    <textarea
      type="text"
      className={`w-[100%] min-h-[150px] p-3 mb-5 outline-none bg-transparent border-b border-b-gray-600 focus:border-b-primary-color text-gray-400 ${className}`}
      {...rest}
    />
  )
}

export default Textarea