"use client";

// import { API } from "@/api/api";
// import LoadingBar from "@/components/loadingEffect";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import "@/styles/auth/signin.scss";
// import { Toast } from "../components/Alert";
import logo from "../../public/images/logo.png";
import mobile from "../../public/images/Mobile.png"

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';



import { InputText } from "primereact/inputtext";

import { FloatLabel } from 'primereact/floatlabel';

interface SignUpForm {
  email: string;
  password: string;
  confirmpassword: string;
  phone: string;
}

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [match, setMatch] = useState(false);
  const [value, setValue] = useState<string>('');

  //   const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const visible = () => {
    setMatch((prevMatch) => !prevMatch);
  };

  const { register, control, handleSubmit, formState } = useForm<SignUpForm>();
  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    setLoading(true);
    // if (data.password === data.confirmpassword) {
    //   const signupData = await API.signup(data).catch((err) => {
    //     Toast.error(
    //       err?.data?.message
    //         ? err?.data?.message
    //         : err?.data?.detail?.length
    //         ? err?.data?.detail[0]?.msg
    //         : err?.data?.detail
    //     );
    //     setLoading(false);
    //   });
    //   setLoading(false);
    //   if (signupData?.data) {
    //     let signdata = signupData?.data;
    //     if (signdata?.status) {
    //       Toast.success(signdata?.message);
    //       setTimeout(() => {
    //         router.push(`/auth/verify?email=${data?.email}`);
    //       }, 2000);
    //     } else {
    //       Toast.error(signdata?.message);
    //     }
    //   }
    // } else {
    //   Toast.error(
    //     "please check the password and confirm password doesn't match"
    //   );
    //   setLoading(false);
    // }
  };

  return (
    <div className="signup-container w-full h-[100vh] flex justify-center items-center bg-[#f1f3f6]">
      

      <div className="signup-right shadow-left xl:shadow-right-24 flex flex-col bg-white justify-center px-10 py-4 w-[30%] h-[100%] gap-10">
        <div className="signup-logo flex flex-col justify-center items-center">
          <img alt="" src={logo} width="50px" />
          <h1 className="text-3xl font-bold">YoungStorage</h1>
          <h4 className="text-[#555]">Create New Account</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="">
          <div className="">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-xl ">Email</label>
              <IconField iconPosition="left" className="w-full ">
                <InputIcon className="pi pi-envelope "> </InputIcon>
                <InputText v-model="value1" placeholder="Email" className="w-full " />
              </IconField>


              <label htmlFor="" className="text-xl">Password</label>
              <IconField iconPosition="left" className="w-full">
                <InputIcon className="pi pi-lock"> </InputIcon>
                <InputText v-model="value1" placeholder="Password" className="w-full " />
              </IconField>

            </div>
            <div className=" w-full  flex justify-center items-center mt-12">
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
