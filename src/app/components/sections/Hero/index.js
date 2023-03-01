import { AiOutlineDownload } from "react-icons/ai";
import { HERO } from "../../../data";
import { Button, HeroBottom, TypeWriter } from "../../elements";

function Hero() {
    const { name, title, subtitle, typeWriter, button, bgImage } = HERO
    return (
        <section className="relative h-screen flex" name="Hero">
            {/* ==== Hero Background Image ==== */}
            <img
                src={bgImage}
                alt="Hero Background"
                className="absolute w-full h-full object-cover z-1"
                loading="lazy"
            />
            {/* ==== Hero Content ==== */}
            <div className="container flex items-center relative z-2">
                <div className="flex items-center justify-center flex-col w-[100%] sm:items-start sm:justify-start">
                    <h4 className="text-gray-100 text-lg">
                        {subtitle}
                        <span className="underline ml-2 decoration-primary-color tracking-wide text-xl">
                            {name}
                        </span>
                    </h4>
                    {/* ==== Type Writer ==== */}
                    <h1 className="title mt-0 text-center font-bold w-full sm:w-[500px] sm:text-left mb-8">
                       Hi,<br/> {title} 
                        <TypeWriter
                            title={typeWriter}
                            className="ml-2"
                        />
                    </h1>
                    {/* ==== Resume Download ==== */}
                    <Button href={button.url}>
                        {button.text}
                        <AiOutlineDownload className="ml-1 text-lg" />
                    </Button>
                </div>
            </div>
            {/* ==== Hero Bottom Counter and Social Links ==== */}
            <HeroBottom />
        </section>
    )
}

export default Hero