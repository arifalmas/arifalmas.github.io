import { ABOUT } from "../../../data";
import { SectionTitle, Service } from "../../elements";

function About() {
  const { title, description, name, image, exports, services } = ABOUT;
  return (
    <section name="About" className="element">
      <div className="container">
      
        <div className="flex gap-10">
          {/* ==== About Content ==== */}
          <div className="flex-1">
            {/* ==== Section Title ==== */}
            <SectionTitle
              title={title}
              subtitle={`Expert in`}
              typeWriter={exports}
              className="md:text-left text-center"
            />
          <div className="hidden sm-flex justify-end items-center w-[40%] ml-22">
           <img className="rounded-lg " src={image} alt={name}/>
           </div>
            <p className="text-[#696969] max-w-full text-center text-lg md:text-left">
              {description}
            </p>
            {/* ==== Services ==== */}
            <div className="flex flex-wrap justify-between">
              {services.map((service, index) => (
                <Service key={index} {...service} />
              ))}
            </div>
          </div>
          {/* ==== About Image ==== */}
          <div className="hidden md:flex justify-end items-center w-[30%] ">
            <img className="rounded-lg" src={image} alt={name}/>
          </div>
        </div>
          
      </div>
    </section>
  );
}

export default About;
