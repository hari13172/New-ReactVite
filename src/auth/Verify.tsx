
import mail from "../../public/images/mail.json"
import Lottie from "lottie-react"

interface VerifyProps {
  background?: string;
}

const Verify: React.FC<VerifyProps> = () => {
  return (
    <div className="verify-container w-full h-[100vh] flex items-center justify-center">
      <div className="verify w-full flex items-center justify-center flex-col gap-2.5 ">
        <div className="lottie flex items-center justify-center  mt-[-200px] w-[50%]">
          <Lottie
            animationData={mail}
            // background="transparent"
            // speed="1"
            autoplay
            loop
            width="30px" />
        </div>
        <div className=" flex items-center justify-center flex-col z-100 max-w-lg text-center mt-[-200px]">
          <h1 className="text-3xl font-medium">Please verify your Email address</h1>
          <h4 className="text-lg font-semibold text-[#555] ">
            Hii <b></b>, Great! We've sent you an email. Please check
            your inbox and follow the instructions inside. It's a quick and
            important step to get you started. Welcome to our website!
          </h4>
          <span className="text-[#555]">
            Email: <b className="text-[#334afd]"></b>
          </span>
        </div>
      </div>
    </div>
  );
};



export default Verify;