
import mail from "../../public/images/mail.json"

const Verify = ({ email, username, router }) => {
  return (
    <div className="verify-container">
      <div className="verify">
        <div className="lottie">
          <lottie-player
            background="transparent"
            speed="1"
            autoplay
            loop
            src="mail.json"
            width="30px"
          ></lottie-player>
          <span>{mail}</span>
        </div>
        <div className="test">
          <h1>Please verify your Email address</h1>
          <h4>
            Hii <b>{username}</b>, Great! We've sent you an email. Please check
            your inbox and follow the instructions inside. It's a quick and
            important step to get you started. Welcome to our website!
          </h4>
          <span>
            Email: <b>{email}</b>
          </span>
        </div>
      </div>
    </div>
  );
};



export default Verify;