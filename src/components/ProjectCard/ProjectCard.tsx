const ProjectCard = ({
  imageSrc,
  backgroundSize = "cover",
}: {
  imageSrc: string;
  backgroundSize?: string;
}) => {
  return (
    <div
      className=" h-32 w-64 rounded-lg overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{
        background: `url('${imageSrc}')`,
        backgroundPosition: "center",
        backgroundSize: backgroundSize,
      }}
    ></div>
  );
};
export default ProjectCard;
