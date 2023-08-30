
import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../assets/apple-logo.png'





export const Jobsboard = () => {
  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

    <div className="group group/items singleJob w-[250px] p-[20px] bg-white rounded [10px] 
    hover:bg-blue shadow-lg shadow-grey-400/700 hover:shadow-lg">

    <span className="flex justify-between items-center gap-4">
      <h1 className="text-[16px] font-semibold text-textColor
      group-hover:text-white">Web Developer</h1>
      <span className="flex items-center text=[#ccc] gap-1">
        <BiTimeFive/>Now
      </span>
    </span>
    <h6 className='text-[#ccc]'>Canada</h6>

    <p className='text [13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
    Lorem ipsum, dolor sit amet consectetur adipiscing elit. Corrupti laboriusm</p>

      <div className='company flex items-center gap-2'>
      </div> 
      <img src={logo1} alt='company logo'className='w-[10%]'/>
      <span className='text[14px] py-[1rem] black group-hover:text-white'>Novac 
      Linus Co.</span>
      

      <button className='border-[2px] rounded-[10px] block p-[10px]  w-full 
       text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
        Apply Now
      </button>

      </div>

      </div>
      
  )
}
