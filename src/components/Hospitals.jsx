import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import HospitalCard from "./HospitalCard";
import HospitalDetails from "./HospitalDetails";

import { HiOutlineSearch, HiOutlineFilter } from "react-icons/hi";
import CreateHospital from "./CreateHosptal";

function Hospitals({ setMenu }) {
  const [hospitals, setHospitals] = useState([]);
  const { admin } = useAuthContext();
  const [edit, setEdit] = useState({ open: false, data: null });
  const [showModal, setShowModal] = useState(false);
  const [hospitalid, setHospitalid] = useState("");
  const fetchAllhospitals = async () => {
    const response = await fetch("https://hospitalapi.vercel.app/hospitals");
    const json = await response.json();
    if (response.ok) {
      setHospitals(json);
    }
  };
  const searchHospital = async () => {
    const response = await fetch(
      `https://hospitalapi.vercel.app/hospitals/${hospitalid}`
    );
    const json = await response.json();
    if (response.ok) {
      setHospitals([json]);
    }
  };
  useEffect(() => {
    if (admin) {
      fetchAllhospitals();
    }
  }, [edit]);
  return (
    <div className="flex flex-col w-full">
      {showModal && (
        <CreateHospital setShowModal={setShowModal} setEdit={setEdit} />
      )}
      <div className="flex w-full justify-between items-center p-3">
        <h1>Hospitals</h1>
        <button
          className="w-20 bg-[#0198A5] rounded-md active:scale-95"
          onClick={() => setShowModal(true)}
        >
          Add
        </button>
        <div className="flex gap-5 bg-white w-[40%]md:w-[35%] py-1 md:py-2 items-center rounded-lg justify-center">
          <div className="flex w-full gap-2 md:px-2 items-center">
            <HiOutlineSearch className="relative left-8 text-[#0198A5]" />
            <input
              type="text"
              value={hospitalid}
              className=" focus:outline-[#0198A5] bg-[#F7F7F7] w-full md:w-[80%] pl-8"
              onChange={(e) => setHospitalid(e.target.value)}
            />
            <div
              className="bg-[#F7F7F7] h-6 flex items-center justify-center rounded-md w-6 active:scale-95"
              onClick={searchHospital}
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
        <div className="flex flex-wrap gap-5 h-full overflow-scroll no-scrollbar p-5">
          {hospitals.map((hospital) => {
            return (
              <HospitalCard
                hospitaldata={hospital}
                key={hospital._id}
                setEdit={setEdit}
              />
            );
          })}
        </div>
      ) : (
        <HospitalDetails edit={edit} setEdit={setEdit} />
      )}
    </div>
  );
}

export default Hospitals;
