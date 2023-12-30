import Article from "../Article/Article";
import Socials from "../Socials/Socials";
import Title from "../Title/Title";
import { PresentationProps } from "./Presentation.props";

const Presentation = (props: PresentationProps) => {
  const { title, children } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <Title text={title} />
      <Article>{children}</Article>
      <Socials />
    </div>
  );
};
export default Presentation;
