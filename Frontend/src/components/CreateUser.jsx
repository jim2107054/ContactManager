import React from 'react'

const CreateUser = () => {
return (
    <div className='max-w-screen-sm h-[100vh] md:max-w-screen-md lg:max-w-full bg-background justify-center items-center flex flex-col'>
            <h1 className='text-white font-semibold text-[20px] mb-2'>Create User</h1>
            <div className="bg-gray-800 h-fit w-5/6 lg:w-1/2 rounded-md flex justify-center items-center">
            <form action="#" className='w-full h-full mt-6 mx-3 flex flex-col'>
            <label className='text-white'>Enter your NID number: </label>
            <input type='text' className='bg-white text-white rounded-md h-11 w-full mb-2 px-4' placeholder='NID number' required/>
            <label className='text-white'>Enter your Name: </label>
            <input type='text' className='bg-white text-white rounded-md h-11 w-full mb-2 px-4' placeholder='jahid hasan jim' required/>
            <label className='text-white'>Enter your Phone number: </label>
            <input type='text' className='bg-white text-white rounded-md h-11 w-full mb-2 px-4' placeholder='01' required/>
            <label className='text-white'>Enter your Email: </label>
            <input type='email' className='bg-white text-white rounded-md h-11 w-full mb-2 px-4' placeholder='jim@gmail.com' required/>
            <label className='text-white'>Enter your Division: </label>
            <input type='text' className='bg-white text-white rounded-md h-11 w-full mb-2 px-4' placeholder='Rangpur' required/>
            <button className='bg-green-500 h-12 w-2/3 rounded-lg mt-3 self-center text-white text-xl hover:bg-purple-600 duration-300'>Create</button>
            </form>
            </div>
    </div>
)
}

export default CreateUser