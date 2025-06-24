import React from "react";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="bg-white grid place-items-center h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <div className="relative w-full max-w-md aspect-[4/3]">
            <Image
              className="rounded-[20px] object-cover"
              src="/images/404.gif"
              alt="404 not found"
              fill
              sizes="100vw"
            />
          </div>

          {/* Content below */}
          <div>
            <h1 className="text-[50px] font-bold text-black">404</h1>
            <h3 className="text-[32px] font-semibold text-black">
              Looks like you're lost
            </h3>
            <p className="text-[18px] text-black mt-2">
              The page you are looking for is not available!
            </p>
            <a
              href="/"
              className="text-white px-5 py-3 bg-green-600 hover:bg-green-700 transition rounded text-[15px] mt-6 inline-block"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
