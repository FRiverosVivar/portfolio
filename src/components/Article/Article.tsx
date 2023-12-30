import { ReactNode } from "react";

const Article = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <article
      className={
        classNames
          ? classNames
          : "flex text-center mx-20 max-w-2xl text-gray-300 font-poppins"
      }
    >
      {children}
    </article>
  );
};
export default Article;
