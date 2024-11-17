import light from "../assets/street_light_controler.png";
import Box from "./Box";
import gateway from "../assets/gateway_png.png";
import cloud from "../assets/cloud_based management.png";
import users from "../assets/users_png.png";
import Evaluation from "../assets/evaluation_png.png";
import DoubleBox from "./DoubleBox";

export const Hero1 = () => {
  return (
    <div className="bg-blue-50 flex flex-col gap-10 justify-start py-5 md:pt-24">
      <div className="flex flex-col justify-start mx-10 md:mx-52">
        <div className="bg-gradient-to-r from-blue-500 to-blue-50 font-semibold pl-10 w-fit h-10 flex items-center">
          Ecosystem
        </div>

        <p className="mt-5 text-3xl font-thin">How does a smart street</p>

        <p className="text-3xl font-thin">light ecosystem work?</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-28 justify-center mt-10 items-center">
        <div>
          <DoubleBox
            img1={light}
            img2={light}
            title={"Street Light Controller"}
            desc={
              "Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp."
            }
          />
        </div>

        <div className="flex flex-col gap-10 items-center">
          <Box
            img={gateway}
            title={"Gateway"}
            desc={
              "Employed for interfacing between a Controller and the Lighting Management Software."
            }
          />

          <div className="flex sm:gap-1 md:gap-5">
            <Box
              img={users}
              title={"Users"}
              desc={
                "Data from the cloud is used to monitor and control street lights by the System Managers."
              }
            />

            <Box
              img={Evaluation}
              title={"Evaluation"}
              desc={
                "Gathered insights are used to evaluate the performance of the lighting systems."
              }
            />
          </div>
        </div>

        <div>
          <Box
            img={cloud}
            title={"Cloud-based Management System"}
            desc={"Collects information from multiple gateways."}
          />
        </div>
      </div>
    </div>
  );
};
