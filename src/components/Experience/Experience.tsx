import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Article from "../Article/Article";
import { ExperienceProps } from "./Experience.props";
import Card from "../Card/Card";
import Chip from "../Chip/Chip";

const Experience = (props: ExperienceProps) => {
  const {
    jobLocation,
    jobType,
    enterpriseName,
    role,
    from,
    to,
    children,
    technologies,
  } = props;
  return (
    <Card>
      <div className="container max-w-2xl">
        <div className="flex justify-between">
          <div>
            <span className="font-bold">{enterpriseName} / </span>
            <span>{role}</span>
          </div>
          <div>
            <span className=" text-xs text-gray-400">
              {from.toUpperCase()} - {to.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-3 text-gray-400">
          <FontAwesomeIcon icon={faEarthAmericas} />
          <span className="text-xs ms-2">
            {jobType.toUpperCase()} - {jobLocation.toUpperCase()}
          </span>
        </div>
        <Article classNames="flex text-center text-gray-100 font-poppins text-start mt-4 text-sm text-gray-300">
          {children}
        </Article>
      </div>
      {technologies && (
        <div className="flex flex-wrap flex-row mt-4 gap-4">
          {technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      )}
    </Card>
  );
};
export default Experience;
