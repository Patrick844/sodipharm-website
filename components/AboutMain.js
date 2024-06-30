import Image from "next/image";

export default function AboutMain() {
  return (
    <div className="flex flex-col items-center justify-center py-2 bg-gray-100 overflow-hidden mt-16 sm:mt-16 ">
      <main className="flex flex-col items-center w-screen flex-1 px-20 text-center">
        <h1 className="sm:text-6xl text-3xl font-bold mt-4">About Us</h1>
        <p className="sm:mt-3 mt-7 sm:text-2xl text-lg">
          We are dedicated to providing the best service possible.
        </p>
        <div className="mt-6 flex flex-wrap justify-around">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <Image
              src="/team.jpg"
              alt="Our Team"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <h2 className="sm:text-2xl font-bold mt-4">Our Team</h2>
            <p className="mt-2 sm:text-lg px-16 sm:px-0">
              Our team consists of experienced professionals dedicated to
              ensuring your satisfaction.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <Image
              src="/mission.jpg"
              alt="Our Mission"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <h2 className="sm:text-2xl font-bold mt-4">Our Mission</h2>
            <p className=" px-16 sm:px-0 mt-2 sm:text-lg text-sm text-center">
              Our mission is to innovate and lead in our industry, providing
              top-quality service and products to our customers.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <Image
              src="/values.jpg"
              alt="Our Values"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <h2 className="sm:text-2xl font-bold mt-4">Our Values</h2>
            <p className="mt-2 sm:text-lg text-center px-16 sm:px-0">
              We value integrity, excellence, and teamwork. Our goal is to
              exceed your expectations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
