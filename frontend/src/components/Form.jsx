import React from "react";
import { useState } from "react";
// import GetData from "../Utils";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
// import { validateData } from "../validateData";
import { validateData } from "../../validateData";
const URL = "http://localhost:8000";

const Form = () => {
  console.log("FORM");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setdob] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [validationErr, setValidationErr] = useState([]);

  const options = ["MANAGER", "DEVELOPER", "ENGINEER"];

  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(URL + "/api/employees", {
        name,
        age: parseInt(age),
        dob,
        salary: parseInt(salary),
        designation,
        address,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("employees");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name,
      age,
      dob,
    });

    const err = validateData({ name, age, dob });
    if (err.length > 0) {
      setValidationErr(err);
      return;
    }
    postMutation.mutate();
    setAge("");
    setdob("");
    setName("");
    // setLastName("");
    setAddress("");
    setDesignation("");
    setSalary("");
  }

  return (
    <form
      className="bg-slate-800 flex flex-col w-[55%] gap-3 p-10 shadow-lg shadow-indigo-500 rounded-md text-slate-200"
      onSubmit={handleSubmit}
    >
      <h1>EMPLOYEE DETAILS FORM</h1>
      {validationErr.length > 0 &&
        validationErr.map((err, i) => {
          return (
            <>
              <p key={i}>{err}</p>
            </>
          );
        })}
      <label className="w-full">
        <input
          type="text"
          placeholder="firstName"
          className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label className="w-full">
        <input
          type="date"
          placeholder="DateofBirth"
          className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400"
          onChange={(e) => setdob(e.target.value)}
          value={dob}
        />
      </label>
      <label className="w-full">
        <input
          type="number"
          placeholder="age"
          className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </label>
      <select
        className="w-full text-slate-300 bg-slate-800 shadow-sm shadow-indigo-400 text-[15px]"
        onChange={(e) => setDesignation(e.target.value)}
      >
        <option
          className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400 text-gray-100"
          disabled={true}
        >
          Designation
        </option>
        {options.map((option, i) => {
          return (
            <option
              key={i}
              className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400 text-gray-100"
            >
              {option}
            </option>
          );
        })}
        {/* type="date"
          placeholder="dob"
          className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400 text-gray-100"
          onChange={(e) => setdob(e.target.value)}
          value={dob} */}
      </select>
      <label className="w-full">
        <input
          type="number"
          placeholder="salary"
          className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400"
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
        />
      </label>
      <label className="w-full">
        <input
          type="text"
          placeholder="address"
          className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </label>
      {/* <label className="w-full">
        <input
          type="number"
          placeholder="salary"
          className="w-full p-[10px] rounded-sm bg-slate-800 shadow-sm shadow-indigo-400"
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
        />
      </label> */}
      <button type="submit" className="bg-indigo-500 p-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default Form;
