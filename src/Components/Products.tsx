import Carousel from "./Carousel";
import Tags from "./Tags";

export const Products = () => {
  return (
    <>
      <div className="bg-teal-50 flex flex-col gap-10 justify-start py-5 md:p-24 md:py-20">
        <div className="flex flex-col justify-start mx-10 md:mx-52 gap-5">
          <div className="bg-gradient-to-r from-slate-200 to-teal-50 font-semibold pl-10 w-fit h-10 flex items-center">
            Products
          </div>

          <div>
            <p className="mt-5 text-3xl font-thin">
              <span className="font-semibold">Cutting-edge hardware,</span>{" "}
              offerings{" "}
            </p>

            <p className="text-3xl font-thin">
              helping cities optimize resources and <br /> achieve smart
              development goals
            </p>
          </div>

          <div className="flex gap-5">
            <Tags title={"Centralized Control & Monitoring System"} />
            <Tags title={"NEMA-Mounted VOLC 1160"} />
            <Tags title={"Retrofit Street Light Controller VOLC 2160"} />
            <Tags title={"Retrofit Street Light Controller VOLC 2180"} />
          </div>
          <Tags title={"Retrofit Street Light Controller VOLC 4180"} />
        </div>

        <div className="mx-52">
          <Carousel />
        </div>
      </div>
    </>
  );
};
