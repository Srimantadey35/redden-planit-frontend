// app/not-found.js or wherever your 404 component goes

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-white text-center px-4">
      <div className="container">
       
          <Image
            src="/images/404.gif"
            alt="404 Not Found"
            width={800}
            height={600}
            className="mx-auto"
            priority
          />
        <div className="mt-[-100px]">
          <h1 className="text-[4rem] font-bold mt-6 text-black">404</h1>
          <h1 className="text-[2rem] font-bold mt-6 text-black">
            Page Not Found
          </h1>
          <p className="text-gray-600 mt-2">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
