import { AnimatePresence, motion } from "framer-motion";
import Experience from "../Experience/Experience";
import Title from "../Title/Title";
import Chip from "../Chip/Chip";

const MyExperiences = () => {
  return (
    <section className="flex flex-col gap-16">
      <motion.div
        key="smith"
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.4 },
        }}
        initial={{ opacity: 0 }}
      >
        <AnimatePresence mode="wait">
          <div className="flex flex-col justify-center items-center">
            <Title text="Experience" />
            <Experience
              jobType={"REMOTE"}
              jobLocation={"CHILE"}
              enterpriseName={"Smith Commerce"}
              role={"Software Engineer"}
              from={"FEBRUARY 2022"}
              to={"PRESENT"}
              technologies={[
                "Angular",
                "Java",
                "TypeScript",
                "React",
                "SAP Commerce Cloud",
              ]}
            >
              My experience at Smith has been and is chaotic, in a good way, I
              work side by side with Technical Architects, Functional Leads, QA,
              Business Analysts and developers with a variety of seniorities,
              thanks to that variety of professionals at my side has allowed me
              to forge a good communication and empathy with colleagues who aim
              for the same result but who are from another area or have less or
              more experience in general. <br></br> <br></br>The journey at
              Smith has allowed me to participate in core projects such as
              Carhartt, Powell, Axcello - Smith own ecommerce accelerator with
              React, Coveo and CommerceTools -, now at Applied, and FFF (FFF
              Enterprises) which I highlight.
              <br></br>
              <br></br> In FFF my role was crucial in a project where it was
              about to get lost due to impossible deadlines and where the
              progress was very crappy. At that time we entered a team of 4
              engineers to generate space and results to request an extension of
              the deadlines, thanks to our effort, adaptability to a very tense
              environment and ability to develop complex things in a short time
              we managed to rescue a project that raised $1MM USD the first day
              in production (and recover a client lost for that time).
            </Experience>
          </div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        key="sked24"
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.4 },
        }}
        initial={{ opacity: 0 }}
      >
        <AnimatePresence mode="wait">
          <div className="flex flex-col justify-center items-center ">
            <Experience
              jobType={"REMOTE"}
              jobLocation={"CHILE"}
              enterpriseName={"Sked24"}
              role={"Software Engineer"}
              from={"MAY 2021"}
              to={"FEBRUARY 2022"}
              technologies={["Angular", "TypeScript", "Karma/Jasmine"]}
            >
              In Sked24 I worked focused on the FrontEnd project, a SaaS
              software oriented to the management of the entire medical
              environment, clinics, and health services. My role was key as I
              was in charge of generating new functionalities, such as the
              booking calendar. <br></br> <br></br>In my participation I also
              performed unit tests programmed in Karma with Jasmine for the
              project components. Thanks to the fact that the team was
              completely international (most of them lcoated in Romania) I was
              able to develop soft skills and practice my speaking.<br></br>
              <br></br> My day to day started at 8AM UTC -4, since we had a
              difference of 5hrs, despite that, it was never an impediment to
              perform my tasks as I just had to have a good communication.
            </Experience>
          </div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        key="globalhap"
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.4 },
        }}
        initial={{ opacity: 0 }}
      >
        <AnimatePresence mode="wait">
          <div className="flex flex-col justify-center items-center">
            <Experience
              jobType={"REMOTE"}
              jobLocation={"CHILE"}
              enterpriseName={"GlobalHap"}
              role={"FullStack Developer"}
              from={"OCTOBER 2020"}
              to={"MAY 2021"}
              technologies={[
                "Angular",
                "TypeScript",
                "React",
                "ExpressJS",
                "Node",
              ]}
            >
              I worked as a full stack developer in several application projects
              where I can highlight subcargo where I developed and leaded the
              mobile apps of their business environment (SubCargo
              Transportistas, SubCargo Clientes and CINS aka Subcargo Reportes).
              <br />
              <br />I worked together with a professional in capturing
              requirements for clients and directly with UX designers to manage
              the user experience, as well as working in an agile environment.
            </Experience>
          </div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
export default MyExperiences;
