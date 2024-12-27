import LoginImage from '../../assets/Auth/Login/plnnr-login-image.svg';
import InputFieldCOMP from '../../components/InputFieldCOMP';

export default function Login() {
    return (
        <main className="flex items-center justify-center h-screen animate-fade-in max-w-[1500px] mx-auto px-10">
            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center h-full">
                <img src={LoginImage} alt="Login" className="w-44 lg:w-96" />
                
                {/* Vertical Bar */}
                <div className="h-1/3 w-[2px] bg-gray-400 hidden lg:block"></div>
                
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Your ID</h1>
                        <InputFieldCOMP placeholder="Enter your ID" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Password</h1>
                        <InputFieldCOMP placeholder="Enter your password" type="password" />
                    </div>
                </div>
            </div>
        </main>
    );
}
