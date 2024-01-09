import { ReactNode } from "react";

export type ProjectProps = {
  imageSrc: string;
  name: string;
  backgroundStyles?: string;
  children: ReactNode;
};
