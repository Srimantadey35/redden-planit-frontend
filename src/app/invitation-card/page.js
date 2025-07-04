"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Draggable from "react-draggable";
import Sidebar from "@/components/Layout/Sidebar";

export default function EditableInvitationCard() {
  const [activeKey, setActiveKey] = useState(null);
  const editableFields = useRef({});

  const handleInput = (key, e) => {
    editableFields.current[key] = e.target.innerText;
  };

  const MIN_FONT_SIZE = 10;
  const MAX_FONT_SIZE = 72;
  const [fontSize, setFontSize] = useState(28.2);
  const [selectedFont, setSelectedFont] = useState("League Spartan");
  const [isUppercase, setIsUppercase] = useState(false);
  const intervalRef = useRef(null);

  const updateStylesFromElement = (el) => {
    const computedStyle = window.getComputedStyle(el);
    const size = parseFloat(computedStyle.fontSize);
    const font = computedStyle.fontFamily.replace(/["']/g, "");
    setFontSize(size);
    setSelectedFont(font);
  };

  const applyFontSize = (newSize) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.fontSize = `${newSize}px`;
    span.textContent = range.toString();
    range.deleteContents();
    range.insertNode(span);
  };

  const handleIncrement = () => {
    setFontSize((prev) => {
      const newSize = Math.min(prev + 1, MAX_FONT_SIZE);
      if (newSize !== prev) applyFontSize(newSize);
      return newSize;
    });
  };

  const handleDecrement = () => {
    setFontSize((prev) => {
      const newSize = Math.max(prev - 1, MIN_FONT_SIZE);
      if (newSize !== prev) applyFontSize(newSize);
      return newSize;
    });
  };

  const startFontChange = (direction) => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      direction === "increase" ? handleIncrement() : handleDecrement();
    }, 100);
  };

  const stopFontChange = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedFont(selectedValue);
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("fontName", false, selectedValue);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("foreColor", false, color);
  };

  const exec = (command, value = null) => {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand(command, false, value);
  };

  const toggleTextTransform = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.textTransform = isUppercase ? "none" : "uppercase";
    span.textContent = range.toString();
    range.deleteContents();
    range.insertNode(span);
    setIsUppercase(!isUppercase);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isClickInsideAnyEditable = Object.values(
        editableFields.current
      ).some((el) => el instanceof HTMLElement && el.contains(e.target));

      if (!isClickInsideAnyEditable) {
        setActiveKey(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Layout>
        <div className="flex ">
          <Sidebar />

          <div className="py-10 bg-[#ebedf0] grow flex flex-col overflow-y-auto items-center">
            <div className="flex items-start">
              <div className="space-y-8 bg-white p-3 mt-[72px] rounded-sm mr-5 flex flex-col">
                <button className="cursor-pointer">
                  <Image
                    className="mx-auto"
                    width={22}
                    height={30}
                    src={"/templates.svg"}
                    alt="templates.svg"
                  />
                  <p className="font-normal text-black text-[14px] mt-2 text-center">
                    {" "}
                    Templates{" "}
                  </p>
                </button>
                <button className="cursor-pointer">
                  <Image
                    className="mx-auto"
                    width={22}
                    height={30}
                    src={"/T.svg"}
                    alt="templates.svg"
                  />
                  <p className="font-normal text-black text-[14px] mt-2 text-center">
                    {" "}
                    Text{" "}
                  </p>
                </button>
                <button className="cursor-pointer">
                  <Image
                    className="mx-auto"
                    width={22}
                    height={30}
                    src={"/elements.svg"}
                    alt="templates.svg"
                  />
                  <p className="font-normal text-black text-[14px] mt-2 text-center">
                    {" "}
                    Elements{" "}
                  </p>
                </button>
                <button className="cursor-pointer relative">
                  <Image
                    className="mx-auto cursor-pointer"
                    width={22}
                    height={30}
                    src={"/upload.svg"}
                    alt="templates.svg"
                  />
                  <p className="font-normal text-black text-[14px] mt-2 text-center cursor-pointer">
                    {" "}
                    Upload{" "}
                  </p>
                  <input
                    className="absolute cursor-pointer top-0 right-0 bottom-0 left-0 opacity-0"
                    type="file"
                    name="file_upload"
                    id=""
                  />
                </button>
              </div>
              <div>
                <div className="flex w-[550px] items-center justify-between gap-2 p-2 bg-white rounded-md shadow-md text-sm font-medium text-black">
                  <select
                    className="border border-[#d6d5d5] rounded px-2 py-1 outline-none"
                    value={selectedFont}
                    onChange={handleChange}
                  >
                    <option value="League Spartan">League Spartan</option>
                    <option value="Arial">Arial</option>
                    <option value="Roboto">Roboto</option>
                  </select>
                  <div className="flex items-center border border-[#d6d5d5] rounded px-2 py-1 h-full">
                    <button
                      className="px-1 text-[14px]"
                      onClick={handleDecrement}
                      onMouseDown={() => startFontChange("decrease")}
                      onMouseUp={stopFontChange}
                      onMouseLeave={stopFontChange}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={fontSize}
                      className="w-12 text-center outline-none"
                      readOnly
                    />
                    <button
                      className="px-1 text-[14px]"
                      onClick={handleIncrement}
                      onMouseDown={() => startFontChange("increase")}
                      onMouseUp={stopFontChange}
                      onMouseLeave={stopFontChange}
                    >
                      +
                    </button>
                  </div>
                  <label
                    htmlFor="A"
                    className="w-8 h-8 inline-flex flex-col items-center cursor-pointer relative rounded-md hover:bg-gray-100 transition"
                  >
                    <span className="text-[15px] font-semibold text-black">
                      {" "}
                      A{" "}
                    </span>
                    <div className="w-5 h-[5px] rounded-full overflow-hidden mt-[-3px]">
                      <div className="w-full h-full bg-[linear-gradient(to_right,_red,_orange,_yellow,_green,_blue,_indigo,_violet)]"></div>
                    </div>
                    <input
                      id="A"
                      type="color"
                      className="absolute inset-0 opacity-0 cursor-pointer size-full"
                      onChange={handleColorChange}
                    />
                  </label>
                  <button
                    className="w-8 h-8 font-bold px-1 text-[#a3a3a3] rounded-md hover:bg-gray-100 transition cursor-pointer"
                    onClick={() => exec("bold")}
                  >
                    B
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black italic text-xl rounded-md hover:bg-gray-100 transition cursor-pointer"
                    onClick={() => exec("italic")}
                  >
                    I
                  </button>
                  <button
                    className="w-8 h-8 underline px-1 hover:bg-gray-100 transition rounded-md cursor-pointer"
                    onClick={() => exec("underline")}
                  >
                    U
                  </button>
                  <button
                    className="w-8 h-8 line-through px-1 hover:bg-gray-100 transition rounded-md cursor-pointer"
                    onClick={() => exec("strikeThrough")}
                  >
                    S
                  </button>
                  <button
                    className="w-8 h-8 px-1 bg-purple-100 text-purple-700 hover:bg-gray-100 transition rounded-md cursor-pointer"
                    onClick={toggleTextTransform}
                  >
                    aA
                  </button>
                  <button className="px-1 w-8 h-8 hover:bg-gray-100 transition rounded-md cursor-pointer">
                    <div className="flex flex-col space-y-[2px]">
                      <span className="w-3 h-[2px] bg-black"></span>
                      <span className="w-1.5 h-[2px] bg-black"></span>
                      <span className="w-3 h-[2px] bg-black"></span>
                      <span className="w-1.5 h-[2px] bg-black"></span>
                    </div>
                  </button>
                  <button className="px-1 w-8 h-8 hover:bg-gray-100 transition rounded-md cursor-pointer">
                    <Image
                      width={20}
                      height={18}
                      src={"/dot_menu.svg"}
                      alt="dot_menu"
                    />
                  </button>

                  <button className="px-1 w-8 h-8 hover:bg-gray-100 transition rounded-md cursor-pointer">
                    <Image
                      width={22}
                      height={18}
                      src={"/menuslider.svg"}
                      alt="dot_menu"
                    />
                  </button>
                </div>

                {/* main invitation card  */}
                <div className="mt-6 relative border border-gray-200 shadow-xl w-[550px] px-6 py-10 font-serif bg-white text-center z-[1]">
                  {/* Floral decorations */}
                  <Image
                    src="/invitationcardtopright.png"
                    alt="Top floral"
                    width={300}
                    height={300}
                    className="absolute top-0 right-0 w-[260px] z-[-1]"
                  />
                  <Image
                    src="/cardbottomleft.png"
                    alt="Bottom floral"
                    width={300}
                    height={300}
                    className="absolute bottom-0 left-0 w-[210px] z-[-1]"
                  />
                  <svg
                    width="100%"
                    height="50"
                    viewBox="0 0 400 100"
                    className="mx-auto overflow-visible mt-6"
                  >
                    <defs>
                      <path
                        id="curve1"
                        d="M20,80 Q200,0 380,80"
                        fill="transparent"
                      />
                    </defs>
                    <text
                      fill="#4B2E2E"
                      fontSize="24"
                      fontFamily="serif"
                      letterSpacing="2"
                    >
                      <textPath
                        href="#curve1"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        TOGETHER
                      </textPath>
                    </text>
                  </svg>
                  <svg
                    width="100%"
                    height="60"
                    viewBox="0 0 400 100"
                    className="mx-auto mb-1 overflow-visible -mt-7"
                  >
                    <defs>
                      <path
                        id="curve2"
                        d="M20,80 Q200,0 380,80"
                        fill="transparent"
                      />
                    </defs>
                    <text
                      fill="#4B2E2E"
                      fontSize="24"
                      fontFamily="serif"
                      letterSpacing="2"
                    >
                      <textPath
                        href="#curve2"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        WITH THEIR FAMILIES
                      </textPath>
                    </text>
                  </svg>

                  <h1
                    contentEditable
                    suppressContentEditableWarning
                    onClick={(e) => {
                      setActiveKey("bride");
                      updateStylesFromElement(e.target);
                    }}
                    onInput={(e) => handleInput("bride", e)}
                    className={`text-[28px] text-[#4B2E2E] dancing-script-font w-fit mx-auto outline-none ${
                      activeKey === "bride"
                        ? "border border-dashed border-blue-500"
                        : ""
                    }`}
                    ref={(el) => (editableFields.current["bride"] = el)}
                  >
                    Sasa Adi Tinah
                  </h1>

                  <p className="text-[14px] text-gray-700 outline-none cursor-text">
                    {" "}
                    AND{" "}
                  </p>
                  <h1
                    contentEditable
                    suppressContentEditableWarning
                    onClick={(e) => {
                      setActiveKey("groom");
                      updateStylesFromElement(e.target);
                    }}
                    onInput={(e) => handleInput("groom", e)}
                    className={`text-[28px] text-[#4B2E2E] dancing-script-font w-fit mx-auto outline-none ${
                      activeKey === "groom"
                        ? "border border-dashed border-blue-500"
                        : ""
                    }`}
                    ref={(el) => (editableFields.current["groom"] = el)}
                  >
                    Allan Susilo
                  </h1>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onClick={(e) => {
                      setActiveKey("inviteMessage");
                      updateStylesFromElement(e.target);
                    }}
                    onInput={(e) => handleInput("inviteMessage", e)}
                    className={`mt-6 text-[12px] text-gray-600 uppercase tracking-wider outline-none w-fit mx-auto ${
                      activeKey === "inviteMessage"
                        ? "border border-dashed border-blue-500"
                        : ""
                    }`}
                    ref={(el) => (editableFields.current["inviteMessage"] = el)}
                  >
                    Request the pleasure of your company <br />
                    at the ceremony of their wedding
                  </p>
                  <div className="mt-6 mb-4 text-[#4B2E2E] flex items-center justify-center">
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onInput={(e) => handleInput("monthYear", e)}
                      className="text-[14px] uppercase w-fit outline-none"
                    >
                      <span className="mr-[5px]">May</span> |
                    </div>
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onInput={(e) => handleInput("day", e)}
                      className="text-[14px] w-fit outline-none mx-[25px] leading-[1]"
                    >
                      SAT <br />
                      <span className="text-[30px]">25</span>
                    </div>
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onInput={(e) => handleInput("date", e)}
                      className="text-[14px] uppercase  w-fit outline-none"
                    >
                      | <span className="ml-[5px]">2025</span>
                    </div>
                  </div>
                  <p className="text-[11px] uppercase text-[#4B2E2E] mb-1">
                    Two thousand thirty
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => handleInput("time", e)}
                    className="text-[13px] mb-4 text-[#4B2E2E]"
                  >
                    At nine o&apos;clock in the afternoon
                  </p>
                  <h2
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => handleInput("venue", e)}
                    className="uppercase font-bold text-[#EA0056] text-[15px] outline-none m-auto w-fit"
                  >
                    Your Villa
                  </h2>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => handleInput("address", e)}
                    className="text-[12px] text-gray-800 mt-1 outline-none m-auto w-fit"
                  >
                    481 Your City, Your District, Your Country
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => handleInput("reception", e)}
                    className="italic text-[12px] text-gray-600 mt-4 outline-none m-auto w-fit"
                  >
                    reception to follow
                  </p>
                </div>
                <div className="mt-6 w-[550px]">
                  <div className="flex items-center justify-between">
                    <p className="text-black text-sm">
                      <span className="font-semibold">Design ID:</span> W89023
                    </p>
                    <button className="text-sm font-medium text-white bg-[#EA0056] rounded-[8px] px-4 py-2 flex items-center">
                      <Image
                        className="mr-2"
                        width={18}
                        height={18}
                        src={"/share.svg"}
                        alt="share"
                      />
                      Send to your guest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
