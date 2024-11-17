import featuresImg from "../assets/Features.png";

const Features = () => {
  return (
    <div className="flex justify-center mx-0 md:mx-10">
      <img
        src={featuresImg}
        alt="not found"
        className="mt-16 w-[1000px] h-[900px] md:h-[1471px]"
      />
    </div>
  );
};

export default Features;
