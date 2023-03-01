import { MdCastForEducation } from "react-icons/md";
import { RESUME } from "../../../data";
import { ResumeCard, SectionTitle, SkillProgress, } from "../../elements";

function Resume() {
  const { title, subtitle, typeWriter, education, experience, skills } = RESUME;

  return (
    <section name="Resume" className="element">
      <div className="container">
        {/* ==== Section Title ==== */}
        <SectionTitle
          center
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
        />
        <div className="mt-10">
          <div className="flex flex-wrap justify-between gap-5">
            {/* ==== Education ==== */}
            <div className="md:w-[45%] Resume__Items">
              {education.map((item, index) => (
                <ResumeCard
                  key={index}
                  title={item.institution}
                  year={item.year}
                  subtitle={item.subject}
                  description={item.description}
                  Icon={MdCastForEducation}
                  education
                />
              ))}
            </div>
            {/* ==== Experience ==== */}
            <div className="md:w-[45%] mt-10 md:mt-0 Resume__Items">
              {experience.map((item, index) => (
                <ResumeCard
                  key={index}
                  title={item.company}
                  year={item.year}
                  subtitle={item.role}
                  description={item.description}
                  Icon={MdCastForEducation}
                  experience
                />
              ))}
            </div>
          </div>
        </div>
        {/* ==== Skills ==== */}
        <div className="mt-14">
          <div className="flex flex-wrap justify-between">
            {skills.map((skill, index) => (
              <SkillProgress key={index} {...skill} />
            ))}
          </div>
          <div>
            <div className="mask flex flex-wrap justify-between ">
            <div className="py-5"><img src="./Asset/lws-logo-clear.svg" alt="" className=" w-[220px] h-[105px]"/>
            </div>
            <div className="py-8">
              <h1 className="text-white text-[30px] font-bold">Learn With Sumit</h1>
              <h3 className="text-white font-semibold">Executive, Support</h3>
              <h5 className="text-white">January-2023 Present </h5>
            </div>
            <div className="py-8"><p className="text-white w-[320px]">
Learn with Sumit - LWS" is all about teaching web development skills and techniques in an efficient and practical manner.If you want to know more, you can visit the website <a href="https://learnwithsumit.com/" className="font-semibold">Learnwithsumit.</a></p></div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
