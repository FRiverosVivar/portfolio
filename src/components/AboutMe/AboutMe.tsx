import Article from "../Article/Article";
import Title from "../Title/Title";

const AboutMe = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <Title text="About Me" />
        <Article>
          As a passionate software engineer, I thrive on the intricate dance As
          a passionate development enthusiast, I live immersed in the
          fascinating world of computer science, information technology (IT) and
          the Internet of Things (IoT). <br></br> <br></br>My day-to-day life
          unfolds in a complex dance between logic, the creation process and the
          final results. I started my journey in programming by creating games
          mods in pure C after school classes. I spent entire afternoons coding
          even the smallest details, until I managed to develop complete
          modifications (mods) independently, without relying on pre-existing
          bases or copying code.<br></br> <br></br> This experience was
          tremendously enriching, allowing me to easily and quickly pass
          computer science courses in the university. Although I have been in
          this field for a relatively short time, I feel that I am just getting
          started. I am always open to new opportunities that quench my thirst
          for challenges and enriching experiences. My desire to learn is
          constant and insatiable; I am always ready to absorb more knowledge
          and skills.
        </Article>
      </div>
    </section>
  );
};
export default AboutMe;
