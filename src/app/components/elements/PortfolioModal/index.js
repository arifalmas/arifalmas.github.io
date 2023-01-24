import { useState } from "react";
import {
  AiOutlineCloseCircle,
  AiTwotoneAppstore,
  AiOutlineShareAlt,
  AiOutlineTags
} from "react-icons/ai";
import { ProjectDetails, VideoPlayer, ScrollableImage, PopUpWrapper } from "../";

const PortfolioModal = ({ onClose, popupData }) => {
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(null);

  const { title, description, type, tags, link, source, video, images } = popupData || {}

  const onClosePopup = () => setOpen(false);
  const imageModalClick = (dataImg) => {
    setOpenImage(dataImg);
    setOpen(true);
  };

  return (
    <>
      <div className="relative h-full w-full flex justify-center items-center bg-black flex-col rounded-md p-3">
        {/* ==== Close Modal ==== */}
        <button className="absolute right-5 top-5 text-red-500 text-3xl z-10 outline-none" onClick={onClose}>
          <AiOutlineCloseCircle />
        </button>
        {/* ==== Project Details ==== */}
        <div className="w-full max-h-[698px] h-[90vh] p-7 overflow-y-scroll no-scrollbar">
          <div className="">
            <h1 className="text-lg md:text-3xl text-white font-Montserrat font-semibold">
              {title}
            </h1>
            <p className="text-[#696969] text-[15px] font-[Poppins] mt-5">
              {description}
            </p>
          </div>
          {/* ==== Project Details Cards ==== */}
          <div className="md:columns-2 mt-10 space-y-5">
            <ProjectDetails
              icon={<AiTwotoneAppstore />}
              text={type}
            />
            <ProjectDetails
              icon={<AiOutlineTags />}
              text={tags?.join(", ")}
            />
            <ProjectDetails
              icon={<AiTwotoneAppstore />}
              text={"Live Preview"}
              link={link}
            />
            <ProjectDetails
              icon={<AiOutlineShareAlt />}
              text="Source Code"
              link={source}
            />
          </div>
          {/* ==== Project Video/Image ==== */}
          <div
            className={`relative w-full max-h-96 rounded-md mt-10 `}
          >
            {!!video ? (
              <VideoPlayer src={video} />
            ) : (
              <div className="h-96">
                <ScrollableImage
                  src={images?.default}
                  onClick={() => imageModalClick(images?.default)}
                />
              </div>
            )}
          </div>
          {/* ==== Project Images ==== */}
          <div className="flex flex-wrap gap-5 justify-between mt-10">
            {popupData?.images?.variants?.map((image, index) => (
              <div
                className="w-full sm:w-[48%] h-[170px] overflow-y-scroll no-scrollbar"
                key={index}
              >
                <ScrollableImage
                  src={image}
                  onClick={() => imageModalClick(image)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ==== Image Modal === */}
      <PopUpWrapper open={open} onClose={onClosePopup}>
        <img src={openImage} alt="project" className="w-full object-cover " />
      </PopUpWrapper>
    </>
  );
};
export default PortfolioModal;
