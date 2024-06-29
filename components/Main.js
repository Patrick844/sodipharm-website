import Image from "next/image";

const Main = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/main.jpg"
        alt="Descriptive Alt Text"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white">Your Text Here</h1>
      </div>
    </div>
  );
};

export default Main;
