import logo from '../../public/images/logo.png'
import { Button } from 'primereact/button';
function DashBoard() {


    return (
        <div className="app-container w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/frontend/public/images/background-2.jpeg)]" >
            <div className="header w-full flex items-center justify-evenly text-white p-4">
                <h1 className='flex justify-center items-center gap-2 text-3xl font-semibold'>
                    <img alt="" src={logo} width={50} />
                    YoungStorage Labs
                </h1>
                <div className="end flex justify-center gap-4 items-center">
                    <div>
                        <Button label="SIGN IN" size="small" />
                    </div>
                    <div>
                        <Button label="SIGN UP" size="small" />
                    </div>
                </div>
            </div>
            <div className="center w-full h-[80vh] flex flex-col justify-center items-center gap-3">
                <span className='text-3xl font-semibold text-white'>Welcome to YoungStorage Labs</span>
                <span className='text-3xl font-semibold text-white'>State of the art laboratories at the hand and home of every</span>
                <h4 className='text-3xl font-semibold text-white'>Learn!</h4>
                <div>
                    {/* <Button value="Get Started" /> */}
                    <Button label="GET STARTED" size="small" />
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
