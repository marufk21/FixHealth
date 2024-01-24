import ConsultationForm from "./ConsultationForm";
const Hero = () => {
  return (
    <>
      <section className="p-6 bg-gray-800 text-gray-100">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <img
            src="https://source.unsplash.com/people-stretching-inside-pool-room-sGIp9xdj7kA/480x360"
            alt=""
            className="object-cover w-full rounded-xl xl:col-span-3 bg-gray-500"
          />
          <ConsultationForm />
        </div>
      </section>
    </>
  );
};

export default Hero;
