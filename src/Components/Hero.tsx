import bgImg from "../assets/Hero_section.png"

const Hero = () => {
  return (
    <div className="relative h-[700px]"> 
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`
      }}
    >
    
      <div className="absolute inset-0 bg-black/50"></div>
    </div>

    {/* Content */}
    <div className="relative h-full flex flex-col items-center justify-center">
      <p className="font-semibold text-white">Smart Lighting solutions</p>
      <h1 className="md:text-4xl font-thin text-white text-center">
        Bringing a new perspective to street lights
      </h1>
      <h1 className="md:text-4xl font-thin text-white text-center">
        and the cities of tomorrow.
      </h1>
    </div>
  </div>
  )
}

export default Hero