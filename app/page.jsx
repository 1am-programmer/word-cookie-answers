
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
// import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function Home() {

 

  return (

    <div className="bg-emerald-500 h-screen text-center text-white ">
      <h1 className="font-bold text-3xl pt-4">Word Cookies Answers</h1>
      <p>Enter your Letters</p>

      <div className="flex justify-center text-black">
        <CiSearch className="translate-x-12 translate-y-3 text-gray-500 text-[30px]" />
        <input type="text" placeholder="YOUR LETTERS" className="px-60 py-4  rounded-full outline-none" />
      </div>

      <div className="flex mt-10  rounded-md justify-center">
        <div className="bg-white text-black rounded-md p-7 w-fit" >

          <div className="">



            <div className="flex justify-center" >

              <div className="justify-between flex w-full">
                <input className="border border-black rounded-full text-2xl py-2 px-4  " placeholder="Starts" type="text" />

                <button className="-translate-x-10 text-2xl " >  <HoverCard>
                  <HoverCardTrigger><CiCircleQuestion /> </HoverCardTrigger>
                  <HoverCardContent className="text-[13px]">
                  Find words that <span className="text-[#f7c342] font-semibold">starts</span> with these letters <span className="font-semibold text-[#f7c342]">(AB {"->"} Ab
                    </span>le) 
                  </HoverCardContent>
                </HoverCard> </button>
              </div>
             

              <div className="justify-between flex w-full">
                <input className="border border-black rounded-full text-2xl py-2 px-4  " placeholder="Ends" type="text" />

                <button className="-translate-x-10 text-2xl " >  <HoverCard>
                  <HoverCardTrigger><CiCircleQuestion /> </HoverCardTrigger>
                  <HoverCardContent className="text-[13px]">
                  Find words that <span className="text-[#f7c342] font-semibold">ends</span> with these letters
                    <span className="font-semibold text-[#f7c342]">(AB {"->"} Cab
                    </span>)
                  </HoverCardContent>
                </HoverCard> </button>
              </div>
            </div>

            <div className="flex justify-center py-2">

              <div className="justify-between flex w-full">
                <input className="border border-black rounded-full text-2xl py-2 px-4  " placeholder="Contains" type="text" />

                <button className="-translate-x-10 text-2xl " >  <HoverCard>
                  <HoverCardTrigger><CiCircleQuestion /> </HoverCardTrigger>
                  <HoverCardContent className="text-[13px]">
                    Find words that <span className="text-[#f7c342] font-semibold">contains</span> letters in this order
                    <span className="font-semibold text-[#f7c342]">(AB {"->"} cABle
                    </span>) or in certain positions
                    <span className="font-semibold text-[#f7c342]">(X_S {"->"} eXeS
                    </span>)
                  </HoverCardContent>
                </HoverCard> </button>
              </div>


              <div className="justify-between flex w-full">
                <input className="border border-black rounded-full text-2xl py-2 px-4  " placeholder="Length" type="text" />

                <button className="-translate-x-10 text-2xl " >   <HoverCard>
                  <HoverCardTrigger><CiCircleQuestion /> </HoverCardTrigger>
                  <HoverCardContent className="text-[13px]">
                    Only show words with specfic <span className="text-[#f7c342] font-semibold">length</span>

                  </HoverCardContent>
                </HoverCard> </button>
              </div>

            </div>
          </div>

          <select name="" id="" className="pr-16 pl-4 w-full text-2xl flex justify-center py-4 rounded-md border border-black mt-5">
            <option selected > Words with friends</option>
            <option > Scrabble US</option>
            <option > Scrabble UK</option>
            <option  > All Dictionaries</option>
          </select>

          <button className="w-full bg-[#f7c342] leading-[22px] text-gray-700 mt-4 rounded-full py-3">SEARCH</button>
        </div>
      </div>

    </div>
  );
}
