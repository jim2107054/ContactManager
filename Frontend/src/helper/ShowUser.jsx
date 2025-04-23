import React from 'react'

const ShowUser = (props) => {
    const { nid, name, email, Phone, Division } = props;
  return (
    <div className="w-4/5 flex md:w-64 md:px-0 md:gap-0 gap-5">
        <div className='h-fit w-full bg-[#716f6f2f] md:w-full flex flex-col rounded-lg py-2 px-5 gap-0.5'>
        <h1 className='text-md font-sans'>NID: {nid}</h1>
        <h1 className='text-md font-sans'>Name: {name}</h1>
        <h1 className='text-sm font-sans'>Email: {email}</h1>
        <h1 className='text-sm font-sans'>Phone: {Phone}</h1>
        <h1 className='text-sm font-sans'>Address: {Division}</h1>
    </div>
    </div>
  )
}

export default ShowUser