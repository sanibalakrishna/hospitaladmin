import React from "react";
import doctoricon from "../assets/doctor.png";

function DoctorCard({ hospitaldata, setEdit }) {
  const { name, specilization } = hospitaldata;

  const handleDetails = () => {
    setEdit({ open: true, data: hospitaldata });
  };
  return (
    <div className="w-full h-[50%] bg-[#FEFEFE] rounded-lg md:w-[23%] flex flex-col justify-center items-center gap-2">
      <img className="text-center rounded-full h-[50%]" src={doctoricon} />
      <h1 className="text-center">{name}</h1>
      <h6 className="text-center text-sm font-normal text-slate-600">
        {specilization}
      </h6>

      <button
        className="bg-[#0198A5] rounded-md w-[50%] place-content-center active:scale-95"
        onClick={handleDetails}
      >
        Details
      </button>
    </div>
  );
}

export default DoctorCard;
