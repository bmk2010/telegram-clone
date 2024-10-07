import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Account from "../assets/accaount.svg";
import News from "../assets/news.svg";
import Telphone from "../assets/telephone.svg";
import camera from "../assets/camera.svg";
import file from "../assets/file.svg";
import send from "../assets/send.svg";
import I from "../assets/i.svg";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

function Home() {
  const [users, setUsers] = useState([])
  const token = localStorage.getItem("accesToken");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://telegram-api-26oe.onrender.com/api/check/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    })
      .then((res) => res.json())
      .then((valid) => {
        if (valid.valid !== true) {
          navigate("/register");
        }
      });
  }, []);

  useEffect(() => {
    fetch("https://telegram-api-26oe.onrender.com/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="flex flex-col gap-[48px]">
      <div className=" bg-[#5D5FEF] h-[86px] mt-[10px] rounded-xl relative">
        <div className=" absolute right-[40px] top-[30px] flex gap-[44px] items-center">
          <button>
            <img src={News} alt="" />
          </button>
          <button>
            <img src={Account} alt="" />
          </button>
        </div>
      </div>
      <div className="flex justify-between mb-[50px]">
        <div className="flex flex-col gap-[21px]">
          <div className="relative ">
            <input
              type="text"
              className=" py-[16px] min-w-[521px] pl-[60px] pr-[20px] rounded-xl border-solid border-2 border-[#f4f4ff] outline-none"
              placeholder="Pesquisar chat"
            />
            <button className="absolute top-[18px] left-[20px]">
              <IoIosSearch color="#adadad" size={24} />
            </button>
          </div>
          <div className="w-[521px] p-[20px] border-solid border-2 border-[#f3f3ff] rounded-xl flex flex-col gap-[70px]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">Mensagens</h2>
              <button className="flex gap-[10px] items-center">
                <strong className="text-[#5d5fef]">CHAT</strong>
                <FaPlus color="#5d5fef" />
              </button>
            </div>
            <div className="flex flex-col gap-[10px] h-[450px] overflow-y-auto snap-normal  ">
              <div className="p-[15px] rounded-xl flex justify-between hover:bg-[#e4e5ff] cursor-pointer ">
                <div className="flex gap-[25px] items-center">
                  <div className="">
                    <button>
                      <CgProfile size={50} />
                    </button>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <h2 className="text-lg">Suporte ADMIN</h2>
                    <p className="text-[#a1a1a1]">Pesquisar chat</p>
                  </div>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-t-xl p-[32px]  border-solid border-2 border-[#f3f3ff] w-[850px]  flex justify-between">
            <div className="flex gap-[25px] items-center">
              <div className="">
                <button>
                  <CgProfile size={50} />
                </button>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h2 className="text-lg">Suporte ADMIN</h2>
                <p className="text-[#a1a1a1]">Pesquisar chat</p>
              </div>
            </div>
            <div className="flex gap-[53px] items-center">
              <button className="">
                <img src={Telphone} alt="" />
              </button>
              <button className="">
                <img src={camera} alt="" />
              </button>
              <button className="">
                <img src={I} alt="" />
              </button>
            </div>
          </div>
          <div className="rounded-b-xl p-[32px]  border-solid border-2 border-[#f3f3ff] w-[850px] h-[555px] bg-[#fdfdff] relative">
            <div className="flex gap-[10px] items-center absolute bottom-[260px]">
              <CgProfile size={35} />
              <div className=" flex flex-col gap-[5px]">
                <div className="p-[10px]  border-solid border-2 border-[#a5a6f6] w-[340px] rounded-xl">
                  <p className="text-[#5d5fef]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                </div>
                <p className="text-xs"> 15 : 00 </p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center absolute bottom-[150px] right-[35px]">
              <CgProfile size={35} />
              <div className=" flex flex-col gap-[5px]">
                <div className="p-[10px]   bg-[#5d5fef] w-[340px] rounded-xl">
                  <p className="text-[#fff]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                </div>
                <p className="text-xs"> 15 : 00 </p>
              </div>
            </div>
            <div className=" absolute  w-[92.5%]  bottom-[40px]">
              <div className=" relative">
                <input
                  className="p-[15px] rounded-xl w-full border-solid border-2 border-[#a5a6f6] outline-none"
                  type="text"
                  placeholder="Digite a mensagem"
                />
                <div className="flex items-center gap-[20px] absolute top-[13px] right-[20px]">
                  <button className="">
                    <img src={file} alt="" />
                  </button>

                  <button className="">
                    <img src={send} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
