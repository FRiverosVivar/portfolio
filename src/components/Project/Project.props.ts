import { ReactNode } from "react";

export type ProjectProps = {
  imageSrc: string;
  name: string;
  backgroundSize?: string;
  children: ReactNode;
};
