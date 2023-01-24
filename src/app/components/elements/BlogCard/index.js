function BlogCard({
  title,
  image,
  published_at,
  author,
  category,
  onClick,
}) {
  return (
    <div className="w-full mb-8 cursor-pointer" onClick={onClick}>
      <div className="relative w-full">
        {/* ==== Blog category ==== */}
        <span className="absolute right-0 bg-gray-800 rounded-tr-md rounded-bl-md text-center text-xs font-medium py-1 px-2 text-gray-100">
          {category}
        </span>
        {/* ==== Blog Thumbnail ==== */}
        <img
          className="w-full h-44 md:h-40 rounded-md object-cover"
          src={image}
          alt={image}
          loading="lazy"
        />
      </div>
      <div>
        <div className="mt-2">
          {/* ==== Blog Title ==== */}
          <h2 className="text-xl font-medium py-1 text-gray-50">{title}</h2>
        </div>
        {/* ==== Blog Metadata ==== */}
        <div className="flex items-center mt-1 text-gray-200">
          <p className="font-light text-sm">{published_at}</p>
          <span className="h-1 w-1 bg-gray-500 mx-2 rounded-full" />
          <p className="font-light text-sm">@{author}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
