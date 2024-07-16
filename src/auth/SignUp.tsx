

import logo from "../../public/images/logo.png";
import signup from "../../public/images/signup.png";


import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';

import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;




function SignUp() {
  const [UserName, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '', UserName: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = {
      UserName: usernameRegex.test(UserName) ? "" : "Invalid user Format",
      email: emailRegex.test(email) ? "" : "Invalid email Format",
      password: passwordRegex.test(password) ? "" : "Password Incorrect",
      confirmPassword: password === confirmPassword ? "" : "password Doesnot Match",
    }
    setErrors(validationErrors);
    const isValid = Object.values(validationErrors).every(error => error === '');

    if (isValid) {
      // Handle form submission
      console.log({ email, password, confirmPassword, UserName });
    }

  }

  return (
    <div className="signup-container w-full h-[100vh] flex justify-center items-center bg-[#f1f3f6]">
      <div className=" w-[70%] h-full flex justify-center items-center relative overflow-hidden">
        <img
          alt=""
          src={signup}
          className="w-full object-contain h-[70%]"
        />
      </div>

      <div className="signup-right shadow-left xl:shadow-right-24 flex flex-col bg-white justify-center px-10 py-4 w-[30%] h-[100%] gap-10">
        <div className="signup-logo flex flex-col justify-center items-center">
          <img alt="" src={logo} width="50px" />
          <h1 className="text-3xl font-bold">YoungStorage</h1>
          <h4 className="text-[#555]">Create New Account</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="flex flex-col gap-4">

            <label htmlFor="" className="text-xl">UserName</label>
              <IconField iconPosition="left" className="w-full">
                <InputIcon className="pi pi-phone"> </InputIcon>
                <InputText v-model="value1" id="UserName" value={UserName} onChange={(e) => setUserName(e.target.value)} placeholder="Phone Number" className="w-full " />
              </IconField>
              {errors.UserName && <span className="text-red-500">{errors.UserName}</span>}


              <label htmlFor="" className="text-xl ">Email</label>
              <IconField iconPosition="left" className="w-full ">
                <InputIcon className="pi pi-envelope "> </InputIcon>
                <InputText v-model="value1" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full" />
              </IconField>
              {errors.email && <span className="text-red-500">{errors.email}</span>}


              <label htmlFor="" className="text-xl">Password</label>
              <IconField iconPosition="left" className="w-full">
                <InputIcon className="pi pi-lock"> </InputIcon>
                <InputText v-model="value1" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full " />
              </IconField>
              {errors.password && <span className="text-red-500">{errors.password}</span>}



              <label htmlFor="" className="text-xl">Confirm Password</label>
              <IconField iconPosition="left" className="w-full ">
                <InputIcon className="pi pi-lock"> </InputIcon>
                <InputText v-model="value1" id="ConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password " className="w-full " />
              </IconField>
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}



            

            </div>
            <div className="">
              {/* <Link to="/auth/sigin" className="w-full flex justify-center items-center mt-12">
                <Button label="Signup" className="w-full  " />
              </Link> */}
            </div>

            <div className=" relative mt-[30px]">
              <hr />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 py-0 px-6 bg-gray-100 h-auto text-gray-800">
                or
              </span>
            </div>

            <div className=" w-full flex justify-center items-center mt-4">
              {/* <Button label="Signin" className="w-full "/> */}
              <Button label="Warning" severity="secondary" className="w-full " />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
