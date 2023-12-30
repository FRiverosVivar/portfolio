import Article from "../Article/Article";
import ProjectCard from "../ProjectCard/ProjectCard";
import SubTitle from "../SubTitle/SubTitle";
import { ProjectProps } from "./Project.props";

const Project = (props: ProjectProps) => {
  const { imageSrc, name, children, backgroundSize } = props;
  return (
    <div className="flex">
      <ProjectCard imageSrc={imageSrc} backgroundSize={backgroundSize} />
      <div className="flex flex-col max-w-sm justify-center ms-4">
        <SubTitle text={name} />
        <Article classNames="flex text-center font-poppins text-start text-sm text-gray-400">
          {children}
        </Article>
      </div>
    </div>
  );
};
export default Project;
