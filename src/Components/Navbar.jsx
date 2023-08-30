
const Navbar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logo">
        <h1 className="logo text-[25px] text-blue">
          <strong>Skill</strong>Boost
        </h1>
      </div>

    <div className="menu flex gap-8">
    <li className="menuList tex-[#6f6f6f] hover:text-blue">Jobs</li>
    <li className="menuList tex-[#6f6f6f] hover:text-blue">About</li>
    <li className="menuList tex-[#6f6f6f] hover:text-blue">Contact</li>
    <li className="menuList tex-[#6f6f6f] hover:text-blue">Login</li>
    <li className="menuList tex-[#6f6f6f] hover:text-blue">Register</li>
    </div>


    </div>
  )
}

export default Navbar