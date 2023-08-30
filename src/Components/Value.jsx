import simple from '../assets/youtube-logo.png'
import img from '../assets/At&t.png'
const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="='text-textColor text-[25px] py-[2rem] pb-[3rem] p-[3rem] font-bold 
      block">The value that hold us true and to account</h1>

<div className="flex gap-60 p-8 justify-center ">
  <div className="singleGrid flex flex-col items-start rounded-md hover:bg-[#eeedf7] p-[1.5rem] w-[300px] ">
    <div className="imgDiv p-[4px] rounded-[.8rem]  h-[40px] w-[40px] flex items-center justify-center">
      <img src={simple} alt="" className="w-[70%]" />
    </div>
    <span className="font-semibold text-[18px] text-gray-800 mt-3">Simplicity</span>
    <p className="text-sm text-gray-600 mt-2 font-semibold">
      Making things beautifully simple is at the core of everything we do. Just a little bit!
    </p>
  </div>

  <div className="singleGrid flex flex-col items-start rounded-md hover:bg-[#eeedf7] p-[1.5rem]  w-[300px]">
    <div className="imgDiv p-[4px] rounded-[.8rem]  h-[40px] w-[40px] flex items-center justify-center">
      <img src={img} alt="" className="w-[70%]" />
    </div>
    <span className="font-semibold text-[18px] text-gray-800 mt-3">Innovation</span>
    <p className="text-sm text-gray-600 mt-2 font-semibold">
      We strive to bring innovative ideas to life, pushing boundaries and exploring new horizons.
    </p>
  </div>

  <div className="singleGrid flex flex-col items-start rounded-md hover:bg-[#eeedf7] p-[1.5rem]  w-[300px]">
    <div className="imgDiv p-[4px] rounded-[.8rem]  h-[40px] w-[40px] flex items-center justify-center">
      <img src={img} alt="" className="w-[70%]" />
    </div>
    <span className="font-semibold text-[18px] text-gray-800 mt-3">Collaboration</span>
    <p className="text-sm text-gray-600 mt-2 font-semibold">
      Collaboration fuels creativity. We work together to achieve remarkable results as a team.
    </p>
  </div>
</div>

      <div className="card mt-[2rem] flex justify-between bg-blue p-[5rem] rounded-[10px]">
      <div>
        <h1 className='text-blue text-[30px] font-bold'> Ready to switch
        a career</h1>
        <h2 className='text-textColor text-[25px] font-bold'> Lets get started!</h2>
      </div>
      <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px]
      font-semibold text-blue hover:bg-white border-blue '>
        Get Started
      </button>

      </div>
        </div>
   
  )
}

export default Value