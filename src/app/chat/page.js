'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Layout from '@/components/Layout';
import TopNavBar from '@/components/widgets/TopNavBar';
import userOne from "../assets/images/user-1.jpg"
import aiIcon from "../assets/images/ai-icon.png"
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PlanItCardSlider from '@/components/widgets/PlanItCardSlider';

export default function Page() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([]);
  const bottomRef = useRef(null);

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    console.log(trimmed)

    // add msg to the chat 
    const userMsg = { text: trimmed, id: Date.now(), sender: 'user' };
    setChat((prev) => [...prev, userMsg]);
    setMessage('');
    setIsTyping(true);

    // Simulate auto-reply after 1 second
    setTimeout(() => {
      const botReply = {
        text: `i can see your message you said: "${trimmed}" 😄`,
        id: Date.now() + 1,
        sender: 'bot',
      };
      setChat((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);
  }


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  console.log('chat:', chat)
  return (
    <Layout>
      <div className="grow flex flex-col overflow-y-auto">
        <TopNavBar />
        <div className="container px-2 max-w-6xl mx-auto grow flex flex-col h-screen">
          <div className="grow flex flex-col">
            <div className='grid grid-cols-10 items-start'>
              <div className="col-span-8 mr-[20px]">
                <div className='flex items-center justify-end py-2 mr-3'>
                  <button className='text-[#EA0056] font-[400] text-[14px] cursor-pointer'>New chat</button>
                  <button className='text-black font-[400] text-[14px] ml-[26px] cursor-pointer'>Clear Chat</button>
                </div>

                <div className='rounded-xl bg-white border border-neutral-200 shadow-lg'>
                  <div className='space-y-2 px-6 p-6 my-auto flex flex-col grow overflow-y-auto h-[calc(100vh-280px)]'>
                    {/* send  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-end ml-auto'>
                      <div className='bg-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                      </div>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={userOne} alt="user" priority width="28" height="28" />
                      </div>
                    </div>
                    {/* receive  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-start'>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={aiIcon} alt="user" priority width="28" height="28" />
                      </div>
                      <div className='bg-white border border-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                        It is a long
                      </div>

                    </div>
                    {/* send  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-end ml-auto'>
                      <div className='bg-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                        Yes sure
                      </div>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={userOne} alt="user" priority width="28" height="28" />
                      </div>
                    </div>
                    {/* receive  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-start'>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={aiIcon} alt="user" priority width="28" height="28" />
                      </div>
                      <div className='space-y-1.5'>
                        <div className='bg-white border border-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                          When is the wedding planned for?
                        </div>
                        {/* <div className='bg-white border border-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black font-bold flex items-center'>
                          <span className='mr-3'>Select date</span>
                          <Image width={22} height={22} src={'/calendermodal.svg'} alt='calendermodal.svg' />
                        </div> */}
                        <div className="relative inline-block">
                          <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-white border border-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black font-bold flex items-center cursor-pointer"
                          >
                            <span className="mr-3">
                              {selectedDate ? selectedDate.toDateString() : 'Select date'}
                            </span>
                            <Image width={22} height={22} src="/calendermodal.svg" alt="calendar icon" />
                          </div>

                          {isOpen && (
                            <div className="absolute mt-2 z-50">
                              <DatePicker
                                selected={selectedDate}
                                onChange={(date) => {
                                  setSelectedDate(date);
                                  setIsOpen(false);
                                }}
                                inline
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* send  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-end ml-auto'>
                      <div className='bg-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                        It&apos;s on 20 June 2027
                      </div>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={userOne} alt="user" priority width="28" height="28" />
                      </div>
                    </div>
                    {/* receive  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-start'>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={aiIcon} alt="user" priority width="28" height="28" />
                      </div>
                      <div className='space-y-1.5'>
                        <div className='bg-white border border-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                          Which city or location is the wedding happening in?
                        </div>

                      </div>
                    </div>
                    {/* send  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-end ml-auto'>
                      <div className='bg-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                        It is in Kolkata Sector 2
                      </div>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={userOne} alt="user" priority width="28" height="28" />
                      </div>
                    </div>
                    {/* receive  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-start mb-8'>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={aiIcon} alt="user" priority width="28" height="28" />
                      </div>
                      <div className='space-y-1.5'>
                        <div className='bg-white border border-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                          Roughly how many guests are expected?
                        </div>
                        <div className='mt-6'>
                          <ul className='space-y-[15px] space-x-[15px] flex flex-wrap'>
                            <li className='text-black font-medium text-[14px] p-2 bg-[#FFE5F0] border border-[#F4B7D1] rounded-lg flex items-center'>
                              <Image width={30} height={30} src={'/calendar.svg'} alt='calendar' />
                              <span className='ml-2'>A custom timeline starting from today till June 20, 2027</span>
                            </li>
                            <li className='text-black font-medium text-[14px] p-2 w-fit bg-[#E5EDFF] border border-[#B4D5FE] rounded-lg flex items-center'>
                              <Image width={30} height={30} src={'/group.svg'} alt='group' />
                              <span className='ml-2'>Guest list management tools for 200-300 people</span>
                            </li>
                            <li className='text-black font-medium text-[14px] p-2 w-fit bg-[#EEFFCD] border border-[#C8EC7F] rounded-lg flex items-center'>
                              <div className='size-[30px]'>
                                <Image className='size-full object-contain' width={30} height={30} src={'/invitation.svg'} alt='invitation' />
                              </div>
                              <span className='ml-2'>Invitation design studio</span>
                            </li>
                            <li className='text-black font-medium text-[14px] p-2 w-fit bg-[#EEFFCD] border border-[#C8EC7F] rounded-lg flex items-center'>
                              <div className='size-[30px]'>
                                <Image className='size-full object-contain' width={30} height={30} src={'/webfwedding.svg'} alt='webfwedding' />
                              </div>
                              <span className='ml-2'> Website for your wedding</span>
                            </li>
                            <li className='text-black font-medium text-[14px] p-2 w-fit bg-[#FFEFBE] border border-[#F2D98F] rounded-lg flex items-center'>
                              <div className='size-[30px]'>
                                <Image className='size-full object-contain' width={30} height={30} src={'/vector.svg'} alt='vector' />
                              </div>
                              <span className='ml-2'> Vendor suggestions in Kolkata Sector 2</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* receive  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-start'>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={aiIcon} alt="user" priority width="28" height="28" />
                      </div>
                      <div className='space-y-1.5'>
                        <div className='bg-white border border-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                          Let’s begin with the most important step. <strong>What would you like to do first?</strong>
                        </div>

                      </div>
                    </div>
                    {/* send  */}
                    <div className='flex space-x-2 items-end max-w-8/12 justify-end ml-auto'>
                      <div className='bg-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                        Invitation design studio
                      </div>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={userOne} alt="user" priority width="28" height="28" />
                      </div>
                    </div>
                    <div className='flex space-x-2 items-end max-w-8/12 justify-end ml-auto'>
                      <div className='bg-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                        I want to create a wedding invitation card
                      </div>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={userOne} alt="user" priority width="28" height="28" />
                      </div>
                    </div>
                    {/* receive  */}
                    <div className='flex space-x-2 items-end justify-start'>
                      <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                        <Image className="size-full object-cover" src={aiIcon} alt="user" priority width="28" height="28" />
                      </div>
                      <div className='space-y-1.5 grow-[1]'>
                        <div className='bg-white border border-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black'>
                          Ok. great! <strong>Here are some ideas you can choose from </strong>
                        </div>
                        <div className='my-6'>
                          <PlanItCardSlider isInChat={true} />
                        </div>
                        <div className='flex items-center'>
                          <button className='text-[16px] flex items-center text-black font-normal rounded-lg border border-[#B2B2B2] py-2 px-3 cursor-pointer'>
                            <Image className='mr-2' width={20} height={20} src={'/moredesigns.svg'} alt='moredesigns' />
                            More Designs
                          </button>
                          <button className='text-[16px] ml-3 flex items-center text-black font-normal rounded-lg border border-[#B2B2B2] py-2 px-3 cursor-pointer'>
                            <Image className='mr-2' width={20} height={20} src={'/color.svg'} alt='moredesigns' />
                            With vintage color
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* send with chatlist */}

                    {chat.map((msg, index) => (
                      msg.sender === 'user' ? (
                        <div key={index} className='break-words flex space-x-2 items-end max-w-8/12 justify-end ml-auto'>
                          <pre className="bg-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black whitespace-pre-wrap">
                            {msg.text}
                          </pre>
                          <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                            <Image className="size-full object-cover" src={userOne} alt="user" priority width="28" height="28" />
                          </div>
                        </div>
                      ) : (
                        <div key={index} className='break-words flex space-x-2 items-end max-w-8/12 justify-start'>
                          <div className='size-7 rounded-full overflow-hidden shrink-0 relative -top-1'>
                            <Image className="size-full object-cover" src={aiIcon} alt="user" priority width="28" height="28" />
                          </div>
                          <div className='space-y-1.5'>
                            <pre className="bg-neutral-200 rounded-lg text-base px-4 py-2 w-fit text-black whitespace-pre-wrap">
                              {msg.text}
                            </pre>
                          </div>
                        </div>
                      )
                    ))
                    }
                    {isTyping && (
                      <div className="chat-bubble ml-[38px]">
                        <div className="typing">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                    )}

                    {/* Invisible anchor for scroll */}
                    <div ref={bottomRef}></div>
                  </div>

                  <div className='flex pt-10 px-5 pb-6'>
                    <button className="shrink-0 border-none p-1 mr-3 cursor-pointer">
                      <svg width="24" height="23" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.1427 13.5034L15.7309 25.2093C14.2104 26.6434 12.148 27.449 9.99764 27.449C7.84727 27.449 5.78497 26.6434 4.26442 25.2093C2.74388 23.7753 1.88965 21.8303 1.88965 19.8021C1.88965 17.7742 2.74388 15.8291 4.26442 14.3951L16.6763 2.68912C17.69 1.73308 19.0649 1.19598 20.4984 1.19598C21.932 1.19598 23.3069 1.73308 24.3206 2.68912C25.3342 3.64516 25.9038 4.94183 25.9038 6.29388C25.9038 7.64593 25.3342 8.94261 24.3206 9.89864L11.8952 21.6045C11.3884 22.0826 10.7009 22.3512 9.98414 22.3512C9.26734 22.3512 8.57991 22.0826 8.07306 21.6045C7.56622 21.1265 7.28147 20.4782 7.28147 19.8021C7.28147 19.1262 7.56622 18.4778 8.07306 17.9998L19.5394 7.19827" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className='flex items-end border py-4 border-neutral-200 rounded-lg grow relative pr-10 pl-3 bg-[#F7F7F7]'>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                          }
                        }} name="" id="" style={{ height: "28px" }} className='placeholder:text-[#9E9E9E] grow resize-none p-1 outline-0 text-sm tracking-wider font-normal text-black' placeholder='Write here...'></textarea>
                      <button onClick={handleSend} className="text-neutral-200 hover:text-[#EA0056] p-0 bg-transparent border-none cursor-pointer absolute bottom-1.5 right-2 size-[45px]">
                        <svg className='size-full' xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M24.003 12L.292 1.665L3.587 11H11v2H3.587L.292 22.336z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-2 mt-[37px]'>
                <div className='bg-white py-2 px-1 border border-neutral-200 text-center text-lg font-medium rounded-lg text-black'>Recent chats</div>
                <ul className='bg-[#F5F5F5] px-[22px] py-[15px] border border-neutral-200 rounded-lg text-[#686868] mt-2'>
                  <li>
                    <button className='text-left text-[16px] font-medium'>Wedding invitation card design</button>

                    <ul>
                      <li className='text-[#ABABAB] font-normal text-[16px] mt-3'>2 days ago</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
