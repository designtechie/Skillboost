import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blue rounded-[10px] gap-8 grid
    grid-cols-5 m-auto items-center justify-center">


    <div>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-white pb-[1.5rem]">
          <strong>Skill</strong> Boost
        </h1>
      </div>
      <p className="text-white pb-[13px] opacity-70 leading-7 ">
        We always make our job seekers and companies find the best jobs and employers find the best candidates.
      </p>
    </div>
    
    <div className="grid">
      <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
        Company
      </span>
      <div className="grid gap-3">
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">About US</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Features</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">News</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">FAQ</li>

      </div>
    </div>


    <div className="grid">
      <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
     Resources
      </span>
      <div className="grid gap-3">
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Events</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Promo</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Req Demo</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Careers</li>

      </div>
    </div>

    <div className="grid">
      <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
     Support
      </span>
      <div className="grid gap-3">
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Account</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Support Center</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Feedback</li>
      <li className="tex-white opacity-[0.7] hover:opacity-[1]">Contact Us</li>

      </div>
    </div>

    <div className="grid">
      <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
     Contact Info
      </span>
      <div>
      <small className="text-[14px] text-white">
        support.skillboost@outlook.com
      </small>

      <div className="icons flex gap-4 py-[1rem]">
        <AiFillInstagram className="bg-white p-[18px] h-[35px] w-[35px] rounded-full icon
         text-blue"/>
        <BsFacebook className="bg-white p-[18px] h-[35px] w-[35px] rounded-full icon
         text-blue"/>
        <AiOutlineTwitter className="bg-white p-[18px] h-[35px] w-[35px] rounded-full icon
         text-blue"/>
      </div>
      </div>
    </div>


    </div>
   

      

  )
}

export default Footer