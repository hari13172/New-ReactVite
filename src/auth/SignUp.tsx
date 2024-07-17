

import logo from "../../public/images/logo.png";
import signup from "../../public/images/signup.png";


import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';

import { InputText } from "primereact/inputtext";
import React, { useRef, useState } from "react";
import { Toast } from 'primereact/toast';
import axios from "axios";
import { api } from '../api/routes'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;


function SignUp() {

  const [UserName, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '', UserName: '' });
  const toast = useRef<Toast>(null);

  const show = (severity:string, summary:string, detail:string) => {
    toast.current?.show({ severity, summary, detail });
  };

  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setLoading(true)

    const validationErrors = {
      UserName: usernameRegex.test(UserName) ? "" : "Invalid user Format",
      email: emailRegex.test(email) ? "" : "Invalid email Format",
      password: passwordRegex.test(password) ? "" : "Password Incorrect",
      confirmPassword: password === confirmPassword ? "" : "password Doesnot Match",
    }
    setErrors(validationErrors);
    const isValid = Object.values(validationErrors).every(error => error === '');

    if (isValid) {
      try {
        const { data, status, statusText } = await axios.post(api.signup, {
          "username": UserName,
          "email": email,
          "password": password,
        });
        console.log("Data:", data.message);
        show("success", "Success", data.message)
        console.log("Status:", status);
        console.log("Status Text:", statusText);
      } catch (error: any) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Error Data:", error.response.data.message);
          show("error", "Error", error.response.data.message)
          console.log("Error Status:", error.response.status);
          console.log("Error Status Text:", error.response.statusText);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("Error Request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error Message:", error.message);
        }
        console.log("Error Config:", error.config);
      }


    }
    setLoading(false)

  }

  return (
    <div className="signup-container w-full h-[100vh] flex justify-center items-center bg-[#f1f3f6]">
      <div className=" w-[70%] h-full lg:flex hidden justify-center items-center relative overflow-hidden ">
        <img
          alt=""
          src={signup}
          className="w-full object-contain h-[70%]"
        />
      </div>

      <div className="signup-right shadow-left xl:shadow-right-24 flex flex-col bg-white justify-center px-10 py-4 lg:w-[30%] w-full h-[100%] gap-10">
        <div className="signup-logo flex flex-col justify-center items-center">
          <img alt="" src={logo} width="50px" />
          <h1 className="text-3xl font-bold">YoungStorage</h1>
          <h4 className="text-[#555]">Create New Account</h4>
        </div>
        <form onSubmit={handleSubmit}>

          <div className="">
            <div className="flex flex-col gap-2">

              <Toast ref={toast} />


              <label htmlFor="" className="text-lg">UserName</label>
              <IconField iconPosition="left" className="w-full">
                <InputIcon className="pi pi-phone"> </InputIcon>
                <InputText v-model="value1" id="UserName" value={UserName} onChange={(e: any) => setUserName(e.target.value)} placeholder="UserName" className="w-full " />
              </IconField>
              {errors.UserName && <span className="text-red-500">{errors.UserName}</span>}


              <label htmlFor="" className="text-lg ">Email</label>
              <IconField iconPosition="left" className="w-full ">
                <InputIcon className="pi pi-envelope "> </InputIcon>
                <InputText v-model="value1" id="email" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="Email" className="w-full" />
              </IconField>
              {errors.email && <span className="text-red-500">{errors.email}</span>}


              <label htmlFor="" className="text-lg">Password</label>
              <IconField iconPosition="left">
                <InputIcon className="pi pi-lock "> </InputIcon>
                <InputText v-model="value1" id="password" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Password" className="w-full " />
              </IconField>
              {errors.password && <span className="text-red-500 ">{errors.password}</span>}



              <label htmlFor="" className="text-lg">Confirm Password</label>
              <IconField iconPosition="left" className="w-full ">
                <InputIcon className="pi pi-lock"> </InputIcon>
                <InputText v-model="value1" id="ConfirmPassword" value={confirmPassword} onChange={(e: any) => setConfirmPassword(e.target.value)} placeholder="Confirm Password " className="w-full " />
              </IconField>
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
            </div>
            <div className="w-full flex justify-center items-center mt-8">
              <Button label="Submit" icon="pi pi-check" loading={loading} className=" w-full flex justify-center items-center" pt={{
                icon() {
                  return " "
                },
                label() {
                  return " flex-grow-0 "
                }
              }} />
            </div>

            <div className=" relative mt-[30px]">
              <hr />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 py-0 px-6 bg-white h-auto text-gray-800">
                or
              </span>
            </div>

            <div className=" w-full flex justify-center items-center mt-6">
              <Button label="Warning" severity="secondary" className="w-full " />
            </div>
          </div>
        </form>
      </div>
    </div>             

  );
}

export default SignUp;
