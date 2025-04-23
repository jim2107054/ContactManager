import React, { useState } from 'react'
import axios from 'axios';

const DeleteUser = () => {
  const [nid, setNid] = useState('');
  const [deleted, setDeleted] = useState(false);
  const DeleteUserAccount = async () => {
    try{
        const response = await axios.delete("http://localhost:8000/delete",{
            nid:nid
        });
        console.log(response.data);
        if(response.data.status === "success"){
            alert("User deleted successfully!");
        }
        else{
            alert("User not found!");
        }
    }
    catch(error){
      alert(error.message);
    }
    finally{
      setDeleted(true);
    }
  }
  return (
    <div className='max-w-screen-sm h-[100vh] md:max-w-screen-md lg:max-w-full bg-background justify-center items-center flex flex-col'>
        <div className="bg-[#565e5637] rounded-md w-4/5 md:w-2/5 h-2/5 flex flex-col justify-center items-center">
        <form className='w-full flex flex-col gap-2 px-10 my-1'>
            <label className='text-white text-md md:text-xl font-semibold'>NID number:</label>
            <input
            value={nid}
            onChange={(e)=> setNid(e.target.value)}
             type="text" className='py-2 px-3 text-white text-xl md:h-14 rounded-md font-semibold bg-[#655e5e56] border-[1px]' placeholder='nid number'/>
            <button onClick={()=>{DeleteUserAccount()}} className='bg-red-600 py-2 rounded-lg w-1/2 md:h-12 md:text-xl self-center mt-2 font-semibold text-[#f2dada] hover:bg-white hover:border-[1px] hover:border-white hover:text-rose-600'>Delete</button>
        </form>
        {
            deleted && (
                <div className='text-green-500 text-md font-semibold mt-2'>
                    User deleted successfully!
                </div>
            )
        }
        </div>
    </div>
  )
}

export default DeleteUser