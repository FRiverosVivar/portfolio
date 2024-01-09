const ProjectCard = ({
  imageSrc,
  backgroundStyles,
}: {
  imageSrc: string;
  backgroundStyles?: string;
}) => {
  return (
    <div
      className={backgroundStyles + " h-32 w-64 rounded-lg overflow-hidden"}
      style={{
        backgroundImage: `url('${imageSrc}')`,
      }}
    ></div>
  );
};
export default ProjectCard;
