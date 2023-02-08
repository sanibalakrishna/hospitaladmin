import React, { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";
import medicare from "../assets/logo.png";
import reactlogo from "../assets/react.svg";
import { IoLogOutOutline } from "react-icons/io5";
import Hospitals from "../components/Hospitals";
import Users from "../components/Users";
import Doctors from "../components/Doctors";

import { FaUserMd, FaUser, FaHospitalAlt } from "react-icons/fa";

function Home() {
  const { admin } = useAuthContext();
  const [modal, setModal] = useState(true);
  const [selected, setSelected] = useState("hospitals");
  const [menu, setMenu] = useState(true);
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    toast.success("succefully logged out");
  };
  return (
    <div className="flex w-full h-full  bg-[#F7F7F7] md:h-[98%] md:w-[99%] md:rounded-xl">
      <div
        className={`group flex flex-col justify-between items-center h-full md:w-[7%] bg-[#0198A5] rounded-xl md:hover:w-[15%] pb-4 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out ${
          menu && "-translate-x-full"
        }`}
      >
        <img src={medicare} className="h-24" />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col jutify-center items-center gap-5 text-white ">
            <img src={reactlogo}></img>
            <h1 className="hidden group-hover:inline">Admin</h1>
          </div>
          <div
            className={`flex hover:bg-[#ffffff32] items-center gap-3 px-5  py-2 rounded-2xl active:scale-95  ${
              selected == "hospitals" && "bg-[#ffffff32]"
            }`}
            onClick={() => setSelected("hospitals")}
          >
            <FaHospitalAlt size={35} className="text-white" />
            <h1 className="hidden text-white group-hover:inline">Hospitals</h1>
          </div>
          <div
            className={`flex hover:bg-[#ffffff32] items-center gap-3 px-5  py-2 rounded-2xl active:scale-95  ${
              selected == "doctors" && "bg-[#ffffff32]"
            }`}
            onClick={() => setSelected("doctors")}
          >
            <FaUserMd size={35} className="text-white" />
            <h1 className="hidden text-white group-hover:inline">Doctors</h1>
          </div>
          <div
            className={`flex hover:bg-[#ffffff32] items-center gap-3 px-5  py-2 rounded-2xl active:scale-95  ${
              selected == "users" && "bg-[#ffffff32]"
            }`}
            onClick={() => setSelected("users")}
          >
            <FaUser size={35} className="text-white" />
            <h1 className="hidden text-white group-hover:inline">Users</h1>
          </div>
        </div>
        <div
          className="flex hover:bg-[#ffffff32] items-center gap-3 px-5 py-2 rounded-2xl active:scale-90"
          onClick={handleLogout}
        >
          <IoLogOutOutline size={35} className="text-white" />
          <h1 className="hidden text-white group-hover:inline">Sign Out</h1>
        </div>
      </div>
      <div className=" h-full w-full flex justify-center">
        {selected == "hospitals" && <Hospitals setMenu={setMenu} />}
        {selected == "doctors" && <Doctors setMenu={setMenu} />}
        {selected == "users" && <Users setMenu={setMenu} />}
      </div>
    </div>
  );
}

export default Home;
