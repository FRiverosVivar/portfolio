import { TitleProps } from "./Title.props";

const Title = (props: TitleProps) => {
  const { text } = props;
  return (
    <h1 className="font-bold text-6xl tracking-tighter mb-10 font-poppins">
      {text}
    </h1>
  );
};
export default Title;
