

import { useState } from "react";
import logo from "../../public/images/logo.png";
import mobile from "../../public/images/Mobile.png"
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { InputText } from "primereact/inputtext";


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '',});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = {
      email: emailRegex.test(email) ? "" : "Invalid email Format",
      password: passwordRegex.test(password) ? "" : "Password Incorrect",
    }
    setErrors(validationErrors);
    const isValid = Object.values(validationErrors).every(error => error === '');

    if (isValid) {
      // Handle form submission
      console.log({ email, password });
    }

  }
  return (
    <div className="signup-container w-full h-[100vh] flex justify-center items-center bg-[#f1f3f6]">
      

      <div className="signup-right shadow-left xl:shadow-right-24 flex flex-col bg-white justify-center px-10 py-4 w-[30%] h-[100%] gap-10">
        <div className="signup-logo flex flex-col justify-center items-center">
          <img alt="" src={logo} width="50px" />
          <h1 className="text-3xl font-bold">YoungStorage</h1>
          <h4 className="text-[#555]">Create New Account</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg ">Email</label>
              <IconField iconPosition="left" className="w-full ">
                <InputIcon className="pi pi-envelope "> </InputIcon>
                <InputText v-model="value1" placeholder="Email" className="w-full " id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </IconField>

              {errors.email && <span className="text-red-500">{errors.email}</span>}


              <label htmlFor="" className="text-lg">Password</label>
              <IconField iconPosition="left" className="w-full">
                <InputIcon className="pi pi-lock"> </InputIcon>
                <InputText v-model="value1" placeholder="Password" className="w-full" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </IconField>
              {errors.password && <span className="text-red-500">{errors.password}</span>}


            </div>
            <div className=" w-full  flex justify-center items-center mt-8">
              <Button label="Signup" className="w-full  " />
            </div>

            <div className=" relative mt-[30px]">
              <hr />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 py-0 px-6 bg-gray-100 h-auto text-gray-800">
                or
              </span>
            </div>

            <div className=" w-full flex justify-center items-center mt-10">
              {/* <Button label="Signin" className="w-full "/> */}
              <Button label="Warning" severity="secondary" className="w-full " />
            </div>
          </div>
        </form>
      </div>
      <div className=" w-[70%] h-full flex justify-center items-center relative overflow-hidden">
        <img
          alt=""
          src={mobile}
          className="w-full object-contain h-[70%]"
        />
      </div>
    </div>
  );
}

export default SignUp;
