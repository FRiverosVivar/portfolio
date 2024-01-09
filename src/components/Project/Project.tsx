import Article from "../Article/Article";
import ProjectCard from "../ProjectCard/ProjectCard";
import SubTitle from "../SubTitle/SubTitle";
import { ProjectProps } from "./Project.props";

const Project = (props: ProjectProps) => {
  const { imageSrc, name, children, backgroundStyles } = props;
  return (
    <div className="flex items-center">
      <ProjectCard imageSrc={imageSrc} backgroundStyles={backgroundStyles} />
      <div className="flex flex-col max-w-sm justify-center ms-4">
        <SubTitle text={name} />
        <Article classNames="flex flex-wrap text-center font-poppins text-start text-sm gap-2">
          {children}
        </Article>
      </div>
    </div>
  );
};
export default Project;
