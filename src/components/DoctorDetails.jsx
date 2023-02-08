import React, { useState } from "react";
import reacticon from "../assets/doctor.png";
import { ToastContainer, toast } from "react-toastify";

function DoctorDetails({ edit, setEdit }) {
  const [name, setName] = useState(edit.data.name);
  const [specilization, setSpecilization] = useState(edit.data.specilization);
  const [updateedit, setUpdateedit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const updateDoctorDetails = async () => {
    const response = await fetch(
      `https://hospitalapi.vercel.app/doctors/${edit.data._id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ name, specilization }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const json = await response.json();
    if (response.ok) {
      toast.success("Details Updated Successfully");
    }
  };
  const handleConfirmDelete = () => {
    setShowModal(false);
    handleDelete();
  };

  const handleDelete = async () => {
    const response = await fetch(
      `https://hospitalapi.vercel.app/doctors/${edit.data._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      toast.success("Deleted User from DB Successfully");

      setTimeout(() => {
        setEdit({ open: false, data: edit.data });
      }, "1000");
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="bg-white rounded-lg  w-[98%] mx-2 h-[88%] flex flex-col md:flex-row items-center">
      {showModal && (
        <div className="flex flex-col justify-center  bg-[#52515196] items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none">
          <h1>Are you sure you want to delete</h1>
          <div className="w-full flex justify-center  gap-10">
            <button
              className=" w-20 bg-slate-400 rounded-md active:scale-95"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="w-20 bg-red-400 rounded-md active:scale-95"
              onClick={handleConfirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
      <div className="flex justify-center items-center w-[50%] h-[50%]">
        <img src={reacticon} className="rounded-full h-full" />
      </div>
      <div className="flex flex-col justify-center items-center md:w-[50%] h-[50%] gap-5">
        <div className="w-full">
          <fieldset
            className={`border-2 hover:border-[#0198A5] rounded-lg  ${
              name != "" && "border-[#0198A5]"
            }`}
          >
            <legend className="ml-2.5 text-[#0198A5]">Name</legend>
            <div className="flex w-full gap-2 px-2">
              <input
                type="email"
                className={`outline-none pl-2 w-full ${
                  !updateedit && "pointer-events-none"
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
        <div className="w-full">
          <fieldset
            className={`border-2 hover:border-[#0198A5] rounded-lg  ${
              name != "" && "border-[#0198A5]"
            }`}
          >
            <legend className="ml-2.5 text-[#0198A5]">Specilization</legend>
            <div className="flex w-full gap-2 px-2">
              <input
                type="text"
                className={`outline-none pl-2 w-full ${
                  !updateedit && "pointer-events-none"
                }`}
                value={specilization}
                onChange={(e) => setSpecilization(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
        <div className="flex gap-2 w-full h-[15%]">
          <button
            className="bg-[#0198A5] w-1/2 active:scale-95 rounded-md"
            onClick={() => setEdit({ open: false, date: null })}
          >
            back
          </button>
          <button
            className="bg-[#0198A5] w-1/2  active:scale-95 rounded-md"
            onClick={
              updateedit
                ? updateDoctorDetails
                : () => setUpdateedit((prevstate) => !prevstate)
            }
          >
            {updateedit ? "Update" : "Edit"}
          </button>
        </div>
        <button
          className="bg-red-400 w-full h-[15%]  active:scale-95 rounded-md"
          onClick={() => setShowModal(true)}
        >
          Delete Doctor
        </button>
      </div>
    </div>
  );
}

export default DoctorDetails;
