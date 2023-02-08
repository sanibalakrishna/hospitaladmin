import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import DoctorDetails from "./DoctorDetails";
import CreateDoctor from "./CreateDoctor";

import { useAuthContext } from "../hooks/useAuthContext";
import { HiOutlineSearch, HiOutlineFilter } from "react-icons/hi";
function Doctors({ setMenu }) {
  const [doctors, setDoctors] = useState([]);
  const { admin } = useAuthContext();
  const [edit, setEdit] = useState({ open: false, data: null });
  const [showModal, setShowModal] = useState(false);
  const [doctorid, setDoctorid] = useState("");
  const fetchAllDoctors = async () => {
    const response = await fetch("https://hospitalapi.vercel.app/doctors");
    const json = await response.json();
    if (response.ok) {
      setDoctors(json);
    }
  };
  const searchDoctor = async () => {
    const response = await fetch(
      `https://hospitalapi.vercel.app/doctors/${doctorid}`
    );
    const json = await response.json();
    if (response.ok) {
      setDoctors([json]);
    }
  };
  useEffect(() => {
    if (admin) {
      fetchAllDoctors();
    }
  }, [edit]);

  return (
    <div className="flex flex-col w-full">
      {showModal && (
        <CreateDoctor setShowModal={setShowModal} setEdit={setEdit} />
      )}
      <div className="flex w-full justify-between items-center p-3">
        <h1>Doctors</h1>
        <button
          className="w-20 bg-[#0198A5] rounded-md active:scale-95"
          onClick={() => setShowModal(true)}
        >
          Add
        </button>
        <div className="flex gap-5 bg-white w-[35%] py-2 items-center rounded-lg justify-center">
          <div className="flex w-full gap-2 px-2 items-center">
            <HiOutlineSearch className="relative left-8 text-[#0198A5]" />
            <input
              type="text"
              value={doctorid}
              className=" focus:outline-[#0198A5] bg-[#F7F7F7] w-[80%] pl-8"
              onChange={(e) => setDoctorid(e.target.value)}
            />
            <div
              className="bg-[#F7F7F7] h-6 flex items-center justify-center rounded-md w-6 active:scale-95"
              onClick={searchDoctor}
            >
              <HiOutlineFilter className="text-[#0198A5]" />
            </div>
          </div>
          <button
            className="md:hidden bg-[#0198A5] w-6 h-5 rounded-md"
            onClick={() => setMenu((prevstate) => !prevstate)}
          >
            =
          </button>
        </div>
      </div>
      {!edit.open ? (
        <div className="flex flex-wrap gap-5 h-full w-full p-5 overflow-y-auto no-scrollbar ">
          {doctors.map((doctor) => {
            return (
              <DoctorCard
                hospitaldata={doctor}
                key={doctor._id}
                setEdit={setEdit}
              />
            );
          })}
        </div>
      ) : (
        <DoctorDetails edit={edit} setEdit={setEdit} />
      )}
    </div>
  );
}

export default Doctors;
