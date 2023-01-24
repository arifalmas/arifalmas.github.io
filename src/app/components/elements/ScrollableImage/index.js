
function ScrollableImage({ src, onClick }) {
    return (
        <div
            style={{
                backgroundImage: `url("${src}")`,
            }}
            className="project-box h-full cursor-pointer rounded-md"
            onClick={onClick}
        ></div>
    )
}

export default ScrollableImage