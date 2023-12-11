import React from "react";
import axios from "axios";
// import { useState, useEffect } from "react";
const URL = "http://localhost:8080";

const validateData = ({ name, age, dob }) => {
  const msgArr = [];
  if (age < 19 && age > 99) {
    msgArr.push("age less than 18 or greater than 99");
  }
  const date = new Date(dob);
  const currentYear = new Date().getFullYear();
  const year = date.getFullYear();

  if (currentYear - year != age) {
    msgArr.push("Your age Does not match your dateOfBirth");
    console.log(typeof (currentYear - year));
  }

  let containsNumber = /\d/.test(name);
  if (containsNumber) {
    msgArr.push("Name could not have numbers");
  }

  return msgArr;
};

export { validateData };
