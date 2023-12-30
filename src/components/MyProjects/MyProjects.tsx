import Project from "../Project/Project";
import Title from "../Title/Title";

const MyProjects = () => {
  return (
    <section className="flex flex-col items-center">
      <Title text={"Projects"} />
      <div className="flex flex-col justify-center flex-wrap gap-8">
        <Project imageSrc="/sc.png" name="Subcargo">
          System that connects freight generators with truckers where more than
          40,000 trips have been made and more than $35MM USD in transactions.
        </Project>
        <Project imageSrc="/fff.webp" name="FFF Enterprises - BioSupply & MFV">
          Storefront in SAP Composable Commerce (Spartacus) linked by SAP
          Commerce Cloud backend server. I worked mostly on the Storefront and
          making changes to the backend and backoffice.
        </Project>
        <Project
          imageSrc="/images.png"
          name="Carhartt"
          backgroundSize="contain"
        >
          Carhartt Storefront with SAP Commerce Cloud backend, I made changes to
          the front end and also to the back end.
        </Project>
        <Project imageSrc="/powell-logo.jpg" name="Powell Electronics">
          Powell&apos;s project was to update the Storefront design, in my role
          I made changes on a full stack basis.
        </Project>
        <Project imageSrc="/pk.png" name="ParkeateApp">
          Freelance project. I made Mobile App, Backend and Frontend. I also
          acted as a JR Consultant for AWS and GCP creating services for the
          startup. - AWS Pipelines, Google Places and more ~
        </Project>
      </div>
    </section>
  );
};
export default MyProjects;
