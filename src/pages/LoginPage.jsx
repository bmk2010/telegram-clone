import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../assets/url";

function LoginPage() {
  const [loginInp, setLoginInp] = useState("");
  const [password, setPassword] = useState("");
  const [eyes, setEyes] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginInp,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.error) {
          toast.error("Login yoki parol xato kiritildi");
        } else {
          localStorage.setItem("accesToken", data.access_token);
          localStorage.setItem("refreshToken", data.refresh_token);
          dispatch({ type: "login", payload: data.access_token });
          navigate("/");
        }
      })
      .catch((error) => toast.error("Server bilan bog'lanishda xatolik!"));
  };

  return (
    <div className="bg-[] flex justify-center">
      <ToastContainer />
      <div className="bg-[] py-5 px-5 rounded-xl mt-5">
        <h1 className="font-medium text-[40px] mb-5 text-center">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 mt-10 items-center"
        >
          <input
            className="outline-none py-2 bg-[#c7c7c7] text-black rounded-xl px-2 max-w-[400px] w-full text-[24px]"
            placeholder="Username ingizni  kiriting"
            value={loginInp}
            onChange={(e) => setLoginInp(e.target.value)}
          />
          <div className="relative max-w-[400px] w-full">
            <input
              className="outline-none py-2 bg-[#c7c7c7] text-black rounded-xl px-2 text-[24px] w-full"
              placeholder="Parolingizni kiriting"
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
            className="py-4 px-7 bg-[#5D5FEF] text-white rounded-md w-[400px]"
          >
            Kiritish
          </button>
        </form>
        <p className="mt-10 max-w-[500px] w-full text-center text-gray-500">
          Bu qismdan keyin login va parolingiz to'g'ri bo'lsa messenjerga
          kirasiz Unutmang {""}
          <span className="text-red-500">
            login va parolni eslab qolishingiz shart
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
