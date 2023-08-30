import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../assets/apple-logo.png';
import logo2 from '../assets/At&t.png';
import logo3 from '../assets/company-logo.png'
import logo4 from '../assets/insta.png'
import logo5 from '../assets/nike.png'
import logo6 from '../assets/youtube-logo.png'


const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit.Corrupti laboriusm',
    company: 'Novac Linus Co.'
  },

  {
    id: 2,
    image: logo2,
    title: 'UI Developer',
    time: 'Now',
    location: 'India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit.Corrupti laboriusm',
    company: 'Tellofill INC.'
  },


  {
    id: 3,
    image: logo3,
    title: '.Net Developer',
    time: 'Now',
    location: 'India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit.Corrupti laboriusm',
    company: 'Novac Linus Co.'
  },

  {
    id: 4,
    image: logo4,
    title: 'Designer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit.Corrupti laboriusm',
    company: 'Novac Linus Co.'
  },

  {
    id: 5,
    image: logo5,
    title: 'Graphic Designer',
    time: 'Now',
    location: 'USA',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit.Corrupti laboriusm',
    company: 'Novac Linus Co.'
  },

  {
    id: 6,
    image: logo6,
    title: 'Full stack',
    time: 'Now',
    location: 'Dubai',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit.Corrupti laboriusm',
    company: 'Novac Linus Co.'
  },



];

export const Jobsboard = () => {
  return (
  
    <div className="jobContainer flex flex-wrap justify-center items-center py-10 gap-4">
    <div className='grid grid-cols-3 justify-between gap-16 px-[3rem]'>
    {Data.map(({ id, image, title, time, location, desc, company }) => (
      
      
      <div
        key={id}
        className="singleJob  w-[280px]  p-[20px]  bg-white rounded-[10px] hover:bg-blue shadow-lg shadow-grey-400/700 hover:shadow-lg"
      >
             <span className="flex h-[60px] justify-between items-center gap-10 ">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white ">
              {title}
            </h1>
            <span className="flex items-center text-[#ccc] gap-10">
              <BiTimeFive />
              {time}
            </span>
          </span>

         
          <h6 className="text-[#ccc]">{location}</h6>
          <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            {desc}
          </p>
          <div className="company flex items-center gap-4">
            <img src={image} alt="company logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] black group-hover:text-white">
              {company}
            </span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:text-textColor group-hover:text-black">
            Apply Now
          </button>
        </div>
       
      ))}
    </div>
    </div>
    
  );
};

export default Jobsboard;
