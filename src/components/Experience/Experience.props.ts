import { ReactNode } from "react";

export type ExperienceProps = {
  jobType: string | "REMOTE" | "HYBRID" | "ON-SITE";
  jobLocation: string;
  enterpriseName: string;
  role: string;
  from: string;
  to: string;
  children: ReactNode;
  technologies?: string[];
};
