import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
const URL = "http://localhost:8000";
const DisplayContent = () => {
  const { data: allUsers, isLoading } = useQuery({
    queryKey: "employees",
    queryFn: async () => {
      const res = await axios.get(URL + "/api/employees");
      console.log(res.data);
      return res.data;
    },
  });
  // console.log(allUsers);
  console.log("DISPLAY CONTENT");
  return (
    <section className="flex flex-col w-[90%] gap-2">
      <h1 className="text-slate-400 text-[20px]">EMPLOYEE DETAILS</h1>
      <div className="flex w-full justify-around text-slate-400 bg-slate-900 p-5 rounded-md shadow-md shadow-indigo-500">
        <p>name</p>
        <p>age</p>
        <p>DOB</p>
        <p>salary</p>
        <p>designation</p>
        <p>address</p>
      </div>
      {!isLoading ? (
        allUsers.map((user) => {
          // console.log(user);
          return (
            <div
              className="flex w-full justify-around text-slate-400 bg-slate-800 p-5 rounded-md shadow-md shadow-indigo-500"
              key={user.id}
            >
              <p>{user.name}</p>
              {/* <p>{user.lastName}</p> */}
              <p>{user.age}</p>
              <p>{user.dob.substring(0, 10)}</p>
              <p>{user.salary}</p>
              <p>{user.designation}</p>
              <p>{user.address}</p>
            </div>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </section>
  );
};

export default DisplayContent;
