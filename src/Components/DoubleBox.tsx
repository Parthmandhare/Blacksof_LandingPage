
const DoubleBox = ({img1, img2, title, desc} : any) => {
  return (
    <>
        <div className="flex flex-col items-center gap-3 w-fit">
  <div className="flex gap-2">
    <img
      src={img1}
      alt="not found"
      className="border-gray-400 border-2 border-dashed px-5 py-3 rounded-3xl w-20"
    />
    <img
      src={img2}
      alt="not found"
      className="border-gray-400 border-2 border-dashed px-5 py-3 rounded-3xl w-20"
    />
  </div>
  <div className="text-center mt-5">
    <p className="text-sm font-bold">{title}</p>
    <p className="text-xs w-40 mx-auto break-words">{desc}</p>
  </div>
</div>

    </>
  )
}

export default DoubleBox