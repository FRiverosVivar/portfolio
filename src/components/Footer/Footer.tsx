import Article from "../Article/Article";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 justify-center items-center mb-40">
      <Socials></Socials>
      <Article classNames="flex text-center max-w-2xl text-gray-300 font-poppins">
        Loosely designed in Figma and coded in Visual Studio Code by yours
        truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
      </Article>
    </footer>
  );
};
export default Footer;
