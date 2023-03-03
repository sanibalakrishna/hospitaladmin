import React, { useState } from "react";
import { toast } from "react-toastify";

function CreateDoctor({ setShowModal, setEdit }) {
  const [name, setName] = useState("");
  const [specilization, setSpecilization] = useState("");
  const [arriveTime, setArriveTime] = useState("");
  const [departTime, setDepartTime] = useState("");

  const handleNewDoctor = async () => {
    const response = await fetch(`https://hospitalapi.vercel.app/doctors/`, {
      method: "POST",
      body: JSON.stringify({ name, specilization, arriveTime, departTime }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    if (response.ok) {
      toast.success("Doctor Created Successfully");

      setTimeout(() => {
        setShowModal(false);
        setEdit({ open: false, data: "" });
      }, "1000");
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="flex flex-col justify-center  bg-[#08080896] items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none gap-5">
      <div className="w-1/2 h-3/4 bg-white rounded-md flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold font-serif text-3xl">Doctor Details</h1>
        <div className="w-1/2">
          <fieldset
            className={`border-2 hover:border-[#0198A5] rounded-lg  ${
              name != "" && "border-[#0198A5]"
            }`}
          >
            <legend className="ml-2.5 text-[#0198A5]">Name</legend>
            <div className="flex w-full gap-2 px-2">
              <input
                type="email"
                className="outline-none bg-transparent pl-2 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
        <div className="w-1/2">
          <fieldset
            className={`border-2 hover:border-[#0198A5] rounded-lg  ${
              specilization != "" && "border-[#0198A5]"
            }`}
          >
            <legend className="ml-2.5 text-[#0198A5]">Specilization</legend>
            <div className="flex w-full gap-2 px-2">
              <input
                type="email"
                className="outline-none pl-2 bg-transparent w-full"
                value={specilization}
                onChange={(e) => setSpecilization(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
        <div className="w-1/2">
          <fieldset
            className={`border-2 hover:border-[#0198A5] rounded-lg  ${
              arriveTime != "" && "border-[#0198A5]"
            }`}
          >
            <legend className="ml-2.5 text-[#0198A5]">Arrive Time</legend>
            <div className="flex w-full gap-2 px-2">
              <input
                type="text"
                className="outline-none pl-2 bg-transparent w-full"
                value={arriveTime}
                onChange={(e) => setArriveTime(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
        <div className="w-1/2">
          <fieldset
            className={`border-2 hover:border-[#0198A5] rounded-lg  ${
              departTime != "" && "border-[#0198A5]"
            }`}
          >
            <legend className="ml-2.5 text-[#0198A5]">Depart Time</legend>
            <div className="flex w-full gap-2 px-2">
              <input
                type="text"
                className="outline-none pl-2 bg-transparent w-full"
                value={departTime}
                onChange={(e) => setDepartTime(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
        <div className="w-full flex justify-center  gap-10">
          <button
            className=" w-1/5 h-10 bg-slate-400 rounded-md active:scale-95"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="w-1/5 h-10 bg-green-400 rounded-md active:scale-95"
            onClick={handleNewDoctor}
          >
            Add Doctor
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateDoctor;
