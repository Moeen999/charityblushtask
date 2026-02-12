import { MdMail } from "react-icons/md";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { FaLock } from "react-icons/fa";


const Login = () => {
  const headingRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
  const tl = gsap.timeline();

  tl.from(headingRef.current, {
    y: 80,
    opacity: 0,
    ease: "power2.out",
  })
  .from(emailRef.current, {
    y: 80,
    x: 5,
    ease: "power2.out",
  }, "-=1.3")
  .from(passwordRef.current, {
    y: 80,
    x: 5,
    ease: "power2.out",
  }, "-=1.3");

}, []);


  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-32 bg-[#8A1538]">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden border border-gray-900">
        <div className="bg-[#8214351d] py-6 px-4 sm:px-8 text-center font-serif">
          <h1
            ref={headingRef}
            className="text-gray-900 font-serif text-2xl sm:text-3xl font-bold aos-init aos-animate"
          >
            Join The Movement
          </h1>
        </div>
        <div className="p-6 sm:p8">
          <div>
            <label ref={emailRef} htmlFor="email">Email Address</label>
            <div>
              <MdMail />
              <input type="text" placeholder="Enter your email"/>
            </div>
          </div>
          <div>
            <label ref={passwordRef} htmlFor="password">Password</label>
            <div>
              <FaLock />
              <input type="text" placeholder="Enter your password"/>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
