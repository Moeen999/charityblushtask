import { MdMail } from "react-icons/md";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaEyeSlash, FaLock, FaEye } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [auth,setAuth] = useState("signin");

  const headingRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap
      .timeline()
      .from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .from([emailRef.current, passwordRef.current], {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out",
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-32 ">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg border border-gray-900 flex flex-col">
        <div className="bg-[#8214351d] py-6 px-4 sm:px-8 text-center">
          <h1
            ref={headingRef}
            className="text-gray-900 text-2xl sm:text-3xl font-bold font-serif"
          >
            Join The Movement
          </h1>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <div className="flex flex-col gap-2">
            <label ref={emailRef} className="text-gray-900 font-semibold">
              Email Address
            </label>

            <div className="relative flex items-center">
              <MdMail className="absolute left-3 text-gray-900" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-lg focus:ring-1 focus:ring-[#494c52] transition-all duration-200 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label ref={passwordRef} className="text-gray-900 font-semibold">
              Password
            </label>

            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-gray-900" />

              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-lg focus:ring-1 focus:ring-[#494c52] transition-all duration-200 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 text-gray-900"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="text-right mb-6 mr-6">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="w-full bg-gradient-to-r from-[#8A1538] to-[#6A0F2A] text-white font-bold py-2 px-4 rounded transform hover:scale-101 transition-all duration-300 shadow-lg hover:shadow-xl">
            Login
          </button>
          <div className="mt-6 text-center text-gray-900">
            <span>Don't have an account?</span>
            <a
              href="/signup"
              className="text-gray-900 hover:text-[#8A1538] hover:underline font-medium"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
