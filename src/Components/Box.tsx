const Box = ({ img, title, desc }: any) => {
  return (
    <>
      <div className="w-40 flex flex-col justify-center text-center items-center">
        <div className="border-gray-400 border-2 border-dashed w-fit rounded-3xl">
            <img src={img} alt="not found" className="px-4 py-3 w-24 b" />
        </div>
        <p className="text-sm font-bold mt-4">{title}</p>
        <p className="" style={{fontSize: "12px"}}>{desc}</p>
      </div>
    </>
  );
};

export default Box;
