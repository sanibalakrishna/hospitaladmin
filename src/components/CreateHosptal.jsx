import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function CreateHospital({ setShowModal, setEdit }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleNewHopital = async () => {
    const response = await fetch(`https://hospitalapi.vercel.app/hospitals/`, {
      method: "POST",
      body: JSON.stringify({
        name,
        address,
        location: { type: "Point", coordinates: [0, 0] },
      }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    if (response.ok) {
      toast.success("Hospital Added Successfully");

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
      <ToastContainer />
      <div className="w-1/2 h-3/4 bg-white rounded-md flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold font-serif text-3xl">Hospital Details</h1>
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
              name != "" && "border-[#0198A5]"
            }`}
          >
            <legend className="ml-2.5 text-[#0198A5]">Address</legend>
            <div className="flex w-full gap-2 px-2">
              <input
                type="email"
                className="outline-none pl-2 bg-transparent w-full"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
            onClick={handleNewHopital}
          >
            Add Hospital
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateHospital;
