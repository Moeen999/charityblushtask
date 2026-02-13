import { MdMail } from "react-icons/md";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaEyeSlash, FaLock, FaEye, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [auth, setAuth] = useState("signin");

  const headingRef = useRef(null);
  const fullNameRef = useRef(null);
  const emailLabelRef = useRef(null);
  const passwordLabelRef = useRef(null);
  const confirmPasswordLabelRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (auth === "signup" && fullNameRef.current) {
      tl.from(fullNameRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    tl.from(headingRef.current, {
      y: 80,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
      .from(
        emailLabelRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .from(
        passwordLabelRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      );

    if (auth === "signup" && confirmPasswordLabelRef.current) {
      tl.from(
        confirmPasswordLabelRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      );
    }

    return () => tl.kill();
  }, [auth]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg border border-gray-900 flex flex-col">
        <div className="bg-[#8214351d] py-6 px-4 sm:px-8 text-center">
          <h1
            ref={headingRef}
            className="text-gray-900 text-2xl sm:text-3xl font-bold font-serif"
          >
            {auth === "signin" ? "Join The Movement" : "Create Hope Today"}
          </h1>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          {auth === "signup" && (
            <div className="flex flex-col gap-2">
              <label ref={fullNameRef} className="text-gray-900 font-semibold">
                Full Name
              </label>
              <div className="relative flex items-center">
                <FaUser className="absolute left-3 text-gray-900" />
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-lg focus:ring-1 focus:ring-[#494c52] outline-none"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label ref={emailLabelRef} className="text-gray-900 font-semibold">
              Email Address
            </label>
            <div className="relative flex items-center">
              <MdMail className="absolute left-3 text-gray-900" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-lg focus:ring-1 focus:ring-[#494c52] outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              ref={passwordLabelRef}
              className="text-gray-900 font-semibold"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-gray-900" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-lg focus:ring-1 focus:ring-[#494c52] outline-none"
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

          {auth === "signup" && (
            <div className="flex flex-col gap-2">
              <label
                ref={confirmPasswordLabelRef}
                className="text-gray-900 font-semibold"
              >
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <FaLock className="absolute left-3 text-gray-900" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-900 rounded-lg focus:ring-1 focus:ring-[#494c52] outline-none"
                />
              </div>
            </div>
          )}

          <button className="w-full bg-linear-to-r from-[#8A1538] to-[#6A0F2A] text-white font-bold py-2 rounded transition-all">
            Login
          </button>

          <div className="text-center text-gray-900">
            {auth === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              onClick={() => setAuth(auth === "signin" ? "signup" : "signin")}
              className="hover:underline font-medium"
            >
              {auth === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
