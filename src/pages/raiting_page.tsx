import UserImg from "../assets/img/image_logo.png";
import React from "react";

export default function RaitingPage(){
    return (
       <div className="flex justify-center items-center h-m-screen px-4">
            <div className="w-full h-[86vh] rounded dark:bg-zinc-900 bg-gray-300 overflow-y-auto scroll-smooth">
                <div className="w-[100px] fixed flex justify-around items-center rounded bg-gray-200 dark:bg-zinc-800 h-7 mt-1 ml-4">
                    <select name="" id="" className="w-auto  rounded text-center bg-gray-100 dark:bg-zinc-500 border-none">
                        <option value="maktab">Maktab</option>
                        <option value="viloyat">Viloyat</option>
                        <option value="tuman">Tuman</option>
                        <option value="all">Hammasi</option>
                    </select>
                </div>
                <div className="w-[450px] fixed flex justify-around items-center rounded bg-gray-100 dark:bg-zinc-700 h-7 mt-1 ml-[8%]">
                    <label className="text-[14px]">Oquvchining ismi va familyasi</label>
                </div>
                
                <div className="w-[185px] fixed flex justify-around items-center rounded bg-gray-100 dark:bg-zinc-700 h-7 mt-1 ml-[37.65%]">
                    <label className="text-[14px]">Reyting</label>
                </div>
                <div className="w-[200px] fixed flex justify-around items-center rounded bg-gray-100 dark:bg-zinc-700 h-7 mt-1 ml-[50%]">
                    <label className="text-[14px]">Viloyat</label>
                </div>
                <div className="w-[360px] fixed flex justify-around items-center rounded bg-gray-100 dark:bg-zinc-700 h-7 mt-1 ml-[63.4%]">
                    <label className="text-[14px]">Maktab</label>
                </div>
                <div className="w-[150px] fixed flex justify-around items-center rounded bg-gray-100 dark:bg-zinc-700 h-7 mt-1 ml-[87.2%]">
                    <label className="text-[14px]">Sinfi</label>
                </div>
                <div className="mt-10 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                 <div className="mt-3 w-[98%] rounded bg-gray-200 dark:bg-zinc-800 ml-4 p-2 h-[70px] text-center flex justify-around items-center">
                    <label className="w-[10px] text-start text-[14px]">1</label>
                    <img src={UserImg} className="h-[64px] w-[64px]"/>
                    <label className="w-auto text-[14px]">Aliyev Valijon Ahmadjon og'li</label>
                
                    <div className="flex flex-row-reverse justify-center rating">
                        {[5, 4, 3, 2, 1].map((val) => (
                        <React.Fragment key={val}>
                            <input
                            type="radio"
                            name="rating"
                            id={`star${val}`}
                            value={val}
                            className="hidden peer"
                            />
                            <label
                            htmlFor={`star${val}`}
                            className="text-yellow-400 text-2xl cursor-pointer transition-colors duration-300 "
                            >
                            ★
                            </label>
                        </React.Fragment>
                        ))}
                    </div>
                    <label className="w-auto text-[14px]">Samarqand</label>
                    <label className="w-auto text-[14px]">Kattaqorg'on tuman ixtisoslashtirilgan maktabi</label>
                    <label className="w-auto text-[14px]">9-sinf</label>
                </div>
                
            </div>
        </div>
    )
}