

import { useRef, useState } from "react";
import logo from "../../public/images/logo.png";
import mobile from "../../public/images/Mobile.png"
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import axios from "axios";
import { api } from '../api/routes'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function Forget() {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: '', });
    const [loading, setLoading] = useState(false);
    const toast = useRef<Toast>(null);


//  ReactPrime toast show
  const show = (severity:string, summary:string, detail:string) => {
    toast.current?.show({ severity, summary, detail });
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)   
        const validationErrors = {
            email: emailRegex.test(email) ? "" : "Invalid email Format",
        }
        setErrors(validationErrors);
        const isValid = Object.values(validationErrors).every(error => error === '');

           // API Connection using axios
    if (isValid) {
        try {
          const { data, status, statusText } = await axios.post(api.signup, {
           email
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
            <div className="signup-right shadow-left xl:shadow-right-24 flex flex-col bg-white justify-center px-10 py-4 w-[30%] h-[100%] gap-10">
                <div className="signup-logo flex flex-col justify-center items-center">
                    <img alt="" src={logo} width="50px" />
                    <h1 className="text-3xl font-bold">Forget Password?</h1>
                    <h4 className="text-[#555]">Expect password reset instructions by email 📬. Follow the steps to proceed. Thanks!</h4>
                </div>
                <Toast ref={toast} />
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-lg ">Email Address</label>
                            <IconField iconPosition="left" className="w-full ">
                                <InputIcon className="pi pi-envelope "> </InputIcon>
                                <InputText v-model="value1" placeholder="Email" className="w-full " id="email" value={email} onChange={(e:any) => setEmail(e.target.value)} />
                            </IconField>

                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                        </div>
                        <div className=" w-full  flex justify-center items-center mt-8">
                            <Button label="Verify" className="w-full  " />
                        </div>

                        <div className="relative mt-[30px]">
                            <hr />
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 py-0 px-6 bg-gray-100 h-auto text-gray-800">
                                or
                            </span>
                        </div>

                        <div className=" w-full flex justify-center items-center mt-10">
                            {/* <Button label="Signin" className="w-full "/> */}
                            <Button label="Back to Login" severity="secondary" className="w-full " />
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

export default Forget;
