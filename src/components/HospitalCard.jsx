import React from "react";
import reactlogo from "../assets/react.svg";
import hospitalicons from "../assets/hospital.png";

function HospitalCard({ hospitaldata, setEdit }) {
  const { name, address } = hospitaldata;

  const handleDetails = () => {
    setEdit({ open: true, data: hospitaldata });
  };
  return (
    <div className="w-full h-[50%] bg-[#FEFEFE] rounded-lg md:w-[23%] flex flex-col justify-center items-center gap-2">
      <img className="text-center rounded-lg h-[50%]" src={hospitalicons} />
      <h1 className="text-center">{name}</h1>
      <h6 className="text-center text-sm font-normal text-slate-600">
        {address}
      </h6>

      <button
        className="bg-[#0198A5] rounded-md w-[50%]  place-content-center active:scale-95"
        onClick={handleDetails}
      >
        Details
      </button>
    </div>
  );
}

export default HospitalCard;
