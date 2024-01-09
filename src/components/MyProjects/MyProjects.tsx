import Chip from "../Chip/Chip";
import Project from "../Project/Project";
import Title from "../Title/Title";

const MyProjects = () => {
  return (
    <section className="flex flex-col items-center">
      <Title text={"Projects"} />
      <div className="flex flex-col justify-center flex-wrap gap-8 ">
        <Project
          imageSrc="/sc.png"
          name="Subcargo"
          backgroundStyles="bg-no-repeat bg-cover bg-center"
        >
          <Chip>React</Chip>
          <Chip>Angular</Chip>
          <Chip>Express</Chip>
          <Chip>MongoDB</Chip>
        </Project>
        <Project imageSrc="/fff.webp" name="FFF Enterprises - BioSupply & MFV">
          <Chip>Angular</Chip>
          <Chip>Java</Chip>
          <Chip>SAP Commerce Cloud</Chip>
          <Chip>SAP Composable Commerce / Hybris</Chip>
        </Project>
        <Project
          imageSrc="/images.png"
          name="Carhartt"
          backgroundStyles="bg-contain bg-no-repeat bg-cover bg-white"
        >
          <Chip>Angular</Chip>
          <Chip>Java</Chip>
          <Chip>SAP Commerce Cloud</Chip>
          <Chip>SAP Composable Commerce / Hybris</Chip>
        </Project>
        <Project
          imageSrc="/powell-logo.jpg"
          name="Powell Electronics"
          backgroundStyles="bg-no-repeat bg-cover"
        >
          <Chip>Java</Chip>
          <Chip>SAP Commerce Cloud</Chip>
          <Chip>SAP Composable Commerce / Hybris</Chip>
        </Project>
        <Project
          imageSrc="/pk.png"
          name="ParkeateApp"
          backgroundStyles="bg-no-repeat bg-cover bg-center"
        >
          <Chip>Angular</Chip>
          <Chip>Postgres</Chip>
          <Chip>PostGIS</Chip>
          <Chip>NestJS</Chip>
          <Chip>CapacitorJS</Chip>
          <Chip>GraphQL</Chip>
          <Chip>Apollo Client</Chip>
          <Chip>AWS Pipelines</Chip>
          <Chip>AWS Route53</Chip>
          <Chip>AWS RDS</Chip>
          <Chip>AWS Certificates Manager</Chip>
          <Chip>AWS S3</Chip>
          <Chip>AWS SNS</Chip>
          <Chip>AWS SES</Chip>
          <Chip>AWS Location Services</Chip>
          <Chip>Google Places</Chip>
        </Project>
      </div>
    </section>
  );
};
export default MyProjects;
