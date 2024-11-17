import logo from "../assets/logo.svg";
import bgImage from "../assets/Footer.png";

const Footbar = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>{" "}
      {/* Main content */}
      <div className="relative flex flex-col px-20 md:px-40 py-20 mt-16 gap-16 md:gap-28 items-center md:items-stretch">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <img src={logo} alt="not found" />
          <div className="flex gap-5 text-white">
            <div>Product</div>
            <div>Software Services</div>
            <div>Follow Us</div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <hr className="border-white/20 md:w-3/6" />
          <div className="flex gap-10 text-white">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footbar;
