import Link from "next/link";
import { ChipProps } from "./Chip.props";

const Chip = (props: ChipProps) => {
  const { children } = props;
  return (
    <span
      className="px-6 py-2 rounded-full"
      style={{
        border: "0.5px solid #9C83FF",
      }}
    >
      {children}
    </span>
  );
};
export default Chip;
