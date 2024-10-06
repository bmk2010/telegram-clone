import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const [loginInp, setLoginInp] = useState("");
  const [password, setPassword] = useState("");
  const [eyes, setEyes] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginInp,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.message
          ? (toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz"),
            navigate("/login"))
          : toast.error(data.error);
      })
      .catch((error) => toast.error("Server bilan bog'lanishda xatolik!"));
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-[#5D5FEF] flex justify-center">
        <div className="bg-white py-5 px-5 rounded-xl mt-5">
          <h1 className="font-medium text-[40px] mb-5 text-center">
            Registratsiya
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 mt-10 items-center"
          >
            <input
              className="outline-none py-2 bg-[#c7c7c7] text-black rounded-xl px-2 max-w-[400px] w-full text-[24px]"
              placeholder="Login o'ylab toping"
              value={loginInp}
              onChange={(e) => setLoginInp(e.target.value)}
            />
            <div className="relative max-w-[400px] w-full">
              <input
                className="outline-none py-2 bg-[#c7c7c7] text-black rounded-xl px-2 text-[24px] w-full"
                placeholder="Parol o'ylab toping"
                type={eyes === 2 ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setEyes(eyes === 1 ? 2 : 1)}
                className="absolute right-5 top-[30%]"
              >
                {eyes === 1 ? (
                  <IoEyeSharp className="w-[25px] h-full" />
                ) : (
                  <FaEyeSlash className="w-[25px] h-full" />
                )}
              </button>
            </div>
            <button
              type="submit"
              className="py-5 px-7 bg-[#5D5FEF] text-white rounded-md w-[100px]"
            >
              Kiritish
            </button>
          </form>
          <p className="mt-10 max-w-[500px] w-full text-center text-gray-500">
            Registratsiyada kiritgan ma'lumotlaringiz hech kimga berilmaydi.
            Lekin {""}
            <span className="text-red-500">
              login va parolni eslab qolishingiz shart
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
