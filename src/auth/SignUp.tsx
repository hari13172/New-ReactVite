"use client";

// import { API } from "@/api/api";
// import LoadingBar from "@/components/loadingEffect";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import "@/styles/auth/signin.scss";
// import { Toast } from "../components/Alert";
import logo from "../../public/images/logo.png";
import { FaLock, FaRegMessage } from "react-icons/fa6";
import signup from "../../public/images/signup.png";
import shared from "../../public/images/shared.png";
import hide from "../../public/images/hide.png";
function SignUp() {
  const [showPassword, SetShowPassword] = useState(false);
  const [match, SetMatch] = useState(false);

  //   const router = useRouter();

  const togglePasswordVisibility = () => {
    SetShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const Visible = () => {
    SetMatch((prevmatch) => !prevmatch);
  };

  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    // if (data.password == data.confirmpassword) {
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
      <div className="flex-1 w-full h-full flex justify-center items-center relative overflow-hidden">
        <img
          alt=""
          src={signup}
          className="fixed top-1/2 transform -translate-y-1/2 h-80vh"
        />
      </div>

      <div className="signup-right shadow-left xl:shadow-right-24 flex flex-col bg-[#f1f3f6] justify-center px-10 py-4 w-[500px] h-[100%] gap-10">
        <div className="signup-logo flex flex-col justify-center items-center">
          <img alt="" src={logo} width="50px" />
          <h1 className="text-3xl font-bold">YoungStorage</h1>
          <h4 className="text-[#555]">Create New Account</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="sign mt-8">
            <div className="right-comp flex flex-col gap-2">
              <label htmlFor="email" className="capitalize">
                email:
              </label>
              <div className="icons flex justify-center items-center">
                <input
                  className="border-none  outline-none px-2 py-4 bg-transparent w-full h-10 text-input cursor-pointer transition duration-300 border-b border-light hover:border-gray-400 focus:border-gray-600"
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                  {...register("email", {
                    required: "email required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      message: "invalid email format",
                    },
                  })}
                />
                <span className="flex items-center justify-center p-2 rounded-md">
                  <FaRegMessage />
                </span>
              </div>
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>

            <div className="right-comp flex flex-col gap-2">
              <label>password:</label>
              <div className="icons flex justify-center items-center">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      className="border-none  outline-none px-2 py-4 bg-transparent w-full h-10 text-input cursor-pointer transition duration-300 border-b border-light hover:border-gray-400 focus:border-gray-600"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                  )}
                  rules={{
                    required: "password required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
                    },
                  }}
                />
                <span onClick={togglePasswordVisibility}>
                  <img
                    src={showPassword ? shared : hide}
                    width={15}
                    height={15}
                  />
                </span>

                <span className="flex items-center justify-center p-2 rounded-md">
                  <FaRegMessage />
                </span>
              </div>
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
            </div>

            <div className="right-comp flex flex-col gap-2">
              <label>confirm Password:</label>
              <div className="icons flex justify-center items-center">
                <Controller
                  name="confirmpassword"
                  control={control}
                  render={({ field }) => (
                    <input
                      className="border-none outline-none px-2 py-4 bg-transparent w-full h-10 text-input cursor-pointer transition duration-300 border-b border-light hover:border-gray-400 focus:border-gray-600"
                      {...field}
                      type={match ? "text" : "password"}
                      placeholder="confirm password"
                    />
                  )}
                  rules={{
                    required: "Please confirm your password",
                  }}
                />
                <span onClick={Visible}>
                  <img src={match ? shared : hide} width={15} height={15} />
                </span>
                <span className="flex items-center justify-center p-2 rounded-md">
                  <FaRegMessage />
                </span>
              </div>
              {errors.confirmpassword && (
                <p style={{ color: "red" }}>{errors.confirmpassword.message}</p>
              )}
            </div>

            <div className="right-comp flex flex-col gap-2">
              <label>Phone Number:</label>
              <div className="icons flex justify-center items-center">
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      className="border-none outline-none px-2 py-4 bg-transparent w-full h-10 text-input cursor-pointer transition duration-300 border-b border-light hover:border-gray-400 focus:border-gray-600"
                      {...field}
                      type="number"
                      placeholder="Phone Number"
                    />
                  )}
                  rules={{
                    required: "phoneNumber required",
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 digits",
                    },
                    maxLength: {
                      value: 12,
                      message: "Phone number must be at most 12 digits",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Phone number must contain only digits",
                    },
                  }}
                />
                <span className="flex items-center justify-center p-2 rounded-md">
                  <FaRegMessage />
                </span>
              </div>
              {errors.phoneNumber && (
                <p style={{ color: "red" }}>{errors.phoneNumber}</p>
              )}
            </div>
            <button className="btn btn mt-[50px] w-full py-2 px-0 rounded-lg bg-blue-600 text-white shadow-md transition duration-300 ease-in-out flex justify-center items-center">
              {loading ? <LoadingBar /> : "Sign up"}
            </button>

            <div className="line relative mt-[30px]">
              <hr />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-0 px-6 bg-gray-100 h-auto text-gray-800">
                or
              </span>
            </div>

            <div className="btn1 mt-[30px] w-full py-2 px-0 rounded-lg bg-[#fd7401] text-white shadow-md transition duration-300 ease-in-out flex justify-center items-center">
              {/* <Link href="/auth/signin">Sign In</Link> */}
              <button>submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
