import React, { useState } from "react";
import axios from "axios";

const UpdateUser = () => {
  const [nid, setNid] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [division, setDivision] = useState("");

  const updateProfile = async ()=>{
    console.log(`NID: ${nid}, Name: ${name}, Number: ${number}, Email: ${email}, Division: ${division}`);
    console.log("Updating profile...");
    const response =  await axios.post("http://localhost:8000/create",{
      nid: nid,
      name: name,
      Phone: number,
      email: email,
      Division: division
    })
    console.log(response.data);
    if(response.data.status === "success"){
      alert("Profile updated successfully!");
    }
  }; // Added missing closing brace for updateProfile function
  return (
    <div className="max-w-screen-sm h-[100vh] md:max-w-screen-md lg:max-w-full bg-background justify-center items-center flex flex-col">
      <h1 className="text-white text-xl mb-4 font-semibold">
        Update your information
      </h1>
      <div className="bg-gray-800 h-fit w-5/6 lg:w-1/2 rounded-md flex justify-center items-center">
        <form action="#" className="w-full h-full mt-6 mx-3 flex flex-col">
          <label className="text-white">
            Enter your NID to update information
          </label>
          <input
            type="text"
            value={nid}
            onChange={(e) => setNid(e.target.value)}
            className="bg-white text-black rounded-md h-11 w-full mb-2 px-4"
            placeholder="NID number"
            required
          />

          <label className="text-white">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="bg-white text-black rounded-md h-11 w-full mb-2 px-4"
            placeholder="If need to update then fill otherwise not."
          />

          <label className="text-white">Phone number: </label>
          <input
            type="text"
            value={number}
            onChange={(e)=> setNumber(e.target.value)}
            className="bg-white text-black rounded-md h-11 w-full mb-2 px-4"
            placeholder="If need to update then fill otherwise not."
          />

          <label className="text-white">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="bg-white text-black rounded-md h-11 w-full mb-2 px-4"
            placeholder="If need to update then fill otherwise not."
          />

          <label className="text-white">Division: </label>
          <input
            type="text"
            value={division}
            onChange={(e)=> setDivision(e.target.value)}
            className="bg-white text-black rounded-md h-11 w-full mb-2 px-4"
            placeholder="If need to update then fill otherwise not."
          />

          <button
          onClick={()=> updateProfile()}
          type="submit"
          className="bg-green-500 h-12 w-2/3 rounded-lg mt-3 self-center text-white text-xl hover:bg-purple-600 duration-300">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
