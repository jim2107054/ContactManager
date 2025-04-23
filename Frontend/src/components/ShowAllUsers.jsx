import React, { useState } from 'react';
import ShowUser from './../helper/ShowUser';
import axios from 'axios';

const ShowAllUsers = () => {
    const [show, setShow] = useState(false);
    const [usersData, setUsersData] = useState([]); // Added state to store users data

    const ShowingUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/contacts');
            // console.log(response.data);
            if (response.data.length === 0) {
                alert('No users found');
                return;
            } else {
                setUsersData(response.data); // Store the fetched data in state
                console.log("Users found");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="max-w-screen-sm h-[100vh] md:max-w-screen-md lg:max-w-full bg-background items-center flex flex-col">
            <button
                onClick={() => {
                    setShow(!show);
                    ShowingUsers();
                }}
                className="h-10 mt-5 mb-1 border-[2px] px-2 rounded-lg bg-yellow-600 cursor-pointer hover:bg-green-600"
            >
                Show Users
            </button>
            {show && (
                <div className="h-full w-full flex m-5 p-3 md:m-0 md:px-10 md:gap-x-14 md:gap-y-0 md:flex-row md:flex-wrap flex-col gap-5 overflow-y-scroll">
                    {usersData.map((user, index) => ( // Corrected: Added curly braces and return statement
                        <div key={index} className="flex flex-col items-center md:gap-0 gap-2">
                            {/* {user.Phone} */}
                            <ShowUser
                                nid={user.nid}
                                name={user.name}
                                email={user.email}
                                Phone={user.Phone} // Fixed casing to match API response
                                Division={user.Division} // Fixed casing to match API response
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShowAllUsers;