"use client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { combine } from "./try/page";

export default function Home() {
  const [text, setText] = useState("");

  const [result, setResult] = useState([]);

  const handleClick = () => {
    setResult(() => combine(text));
    console.log(result);
  };

  return (
    <div className="bg-emerald-500 min-h-screen text-center text-white ">
      <h1 className="font-bold text-3xl pt-4">Word Cookies Answers</h1>
      <p className="text-[30px] px-4">Enter your Letters</p>

      <div className="flex justify-center text-black">
        <CiSearch className="translate-x-12 translate-y-3 text-gray-500 text-[30px]" />
        <input
          type="text"
          placeholder="YOUR LETTERS"
          onChange={(e) => setText(e.target.value)}
          className="px-60 py-4  rounded-full outline-none"
        />
      </div>

      <div className="flex mt-10  rounded-md justify-center">
        <div className="bg-white text-black rounded-md p-7 w-fit">
          <div className="">
            <div className="flex justify-center">
              <div className="justify-between flex w-full">
                <input
                  className="border border-black rounded-full text-2xl py-2 px-4  "
                  placeholder="Starts"
                  type="text"
                />

                <button className="-translate-x-10 text-2xl ">
                  {" "}
                  <HoverCard>
                    <HoverCardTrigger>
                      <CiCircleQuestion />{" "}
                    </HoverCardTrigger>
                    <HoverCardContent className="text-[13px]">
                      Find words that{" "}
                      <span className="text-[#f7c342] font-semibold">
                        starts
                      </span>{" "}
                      with these letters{" "}
                      <span className="font-semibold text-[#f7c342]">
                        (AB {"->"} Ab
                      </span>
                      le)
                    </HoverCardContent>
                  </HoverCard>{" "}
                </button>
              </div>

              <div className="justify-between flex w-full">
                <input
                  className="border border-black rounded-full text-2xl py-2 px-4  "
                  placeholder="Ends"
                  type="text"
                />

                <button className="-translate-x-10 text-2xl ">
                  {" "}
                  <HoverCard>
                    <HoverCardTrigger>
                      <CiCircleQuestion />{" "}
                    </HoverCardTrigger>
                    <HoverCardContent className="text-[13px]">
                      Find words that{" "}
                      <span className="text-[#f7c342] font-semibold">ends</span>{" "}
                      with these letters
                      <span className="font-semibold text-[#f7c342]">
                        (AB {"->"} Cab
                      </span>
                      )
                    </HoverCardContent>
                  </HoverCard>{" "}
                </button>
              </div>
            </div>

            <div className="flex justify-center py-2">
              <div className="justify-between flex w-full">
                <input
                  className="border border-black rounded-full text-2xl py-2 px-4  "
                  placeholder="Contains"
                  type="text"
                />

                <button className="-translate-x-10 text-2xl ">
                  {" "}
                  <HoverCard>
                    <HoverCardTrigger>
                      <CiCircleQuestion />{" "}
                    </HoverCardTrigger>
                    <HoverCardContent className="text-[13px]">
                      Find words that{" "}
                      <span className="text-[#f7c342] font-semibold">
                        contains
                      </span>{" "}
                      letters in this order
                      <span className="font-semibold text-[#f7c342]">
                        (AB {"->"} cABle
                      </span>
                      ) or in certain positions
                      <span className="font-semibold text-[#f7c342]">
                        (X_S {"->"} eXeS
                      </span>
                      )
                    </HoverCardContent>
                  </HoverCard>{" "}
                </button>
              </div>

              <div className="justify-between flex w-full">
                <input
                  className="border border-black rounded-full text-2xl py-2 px-4  "
                  placeholder="Length"
                  type="text"
                />

                <button className="-translate-x-10 text-2xl ">
                  {" "}
                  <HoverCard>
                    <HoverCardTrigger>
                      <CiCircleQuestion />{" "}
                    </HoverCardTrigger>
                    <HoverCardContent className="text-[13px]">
                      Only show words with specfic{" "}
                      <span className="text-[#f7c342] font-semibold">
                        length
                      </span>
                    </HoverCardContent>
                  </HoverCard>{" "}
                </button>
              </div>
            </div>
          </div>

          <select
            name=""
            id=""
            value={"select"}
            className="pr-16 pl-4 w-full text-2xl flex justify-center py-4 rounded-md border border-black mt-5"
          >
            <option selected value={"Words"}>
              {" "}
              Words with friends
            </option>
            <option value={"Scrabble US"}> Scrabble US</option>
            <option value={"Scrabble UK"}> Scrabble UK</option>
            <option value={"All Dictionaries"}> All Dictionaries</option>
          </select>

          <button
            className="w-full bg-[#f7c342] leading-[22px] text-gray-700 mt-4 rounded-full py-3"
            onClick={handleClick}
          >
            SEARCH
          </button>
        </div>
      </div>

      {result.length > 0 && (
        <div>
          <p className="text-3xl text-left underline">Result</p>

          <div>
            {result.map((item, i) => {
              return (
                <div className="text-left mb-2 mt-2 ">
                  <p>{i + 1} letter words</p>
                  <div className="flex gap-4">
                    {item.map((com, j) => {
                      return (
                        <div className="flex gap-4 ">
                          <p>{j + 1},</p>
                          <p className="">{com},</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
