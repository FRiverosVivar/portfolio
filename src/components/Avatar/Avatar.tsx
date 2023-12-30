import Image from "next/image";
const Avatar = ({ frontSrc }: { frontSrc: string }) => {
  return (
    <div className="w-full flex justify-center mb-9 mt-12">
      <div className="w-64 h-64 rounded-full">
        <Image
          src={frontSrc}
          alt=""
          width={100}
          height={100}
          className="rounded-full h-full w-full"
        ></Image>
      </div>
    </div>
  );
};

export default Avatar;
