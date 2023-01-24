import { useEffect, useState } from "react";

function VideoPlayer({ src }) {
    const [videoSrc, setVideoSrc] = useState(src);
    const [embedVideo, setEmbedVideo] = useState(false);

    useEffect(() => {
        // If video src is youtube or vimeo, embed it
        if (src?.includes("youtube")) {
            const id = src.slice(
                src.lastIndexOf("=") + 1
            );
            const url = `https://www.youtube.com/embed/${id}`;
            setVideoSrc(url);
            setEmbedVideo(true);
        } else if (src?.includes("vimeo")) {
            const id = src.slice(
                src.lastIndexOf("/") + 1
            );
            const url = `https://player.vimeo.com/video/${id}`;
            setVideoSrc(url);
            setEmbedVideo(true);
        }
    }, [src]);

    return (
        <>
            {embedVideo ? (
                <iframe
                    width="100%"
                    height="357px"
                    src={`${videoSrc}?autoplay=1`}
                    title="Video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <video
                    controls
                    title="Video player"
                    className="max-h-96 w-full object-cover rounded-md"
                >
                    <source src={videoSrc} />
                </video>
            )}
        </>
    )
}

export default VideoPlayer