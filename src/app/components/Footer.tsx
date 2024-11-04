import Link from "next/link";

export default function Footer() {
    return (
      <footer className="w-full h-44 text-white flex items-center justify-center bg-blue-950">
        <div className=" w-3/5 h-full text-center items-center ">
          <div className="mt-6">
            <Link href="/" className="px-2 hover:text-yellow-300 transition-all">About Us</Link>
            <Link href="/" className="px-2 hover:text-yellow-300 transition-all">Services</Link>
            <Link href="/" className="px-2 hover:text-yellow-300 transition-all">Contact</Link>
          </div>
          <div className='m-3'>
            <Link href="https://facebook.com" className="px-2 hover:text-yellow-300 transition-all">Facebook</Link>
            <Link href="https://twitter.com" className="px-2 hover:text-yellow-300 transition-all">Twitter</Link>
            <Link href="https://instagram.com" className='px-2 hover:text-yellow-300 transition-all'>Instagram</Link>
          </div>
          <p className="">© {new Date().getFullYear()} PakWheels.com All rights reserved.</p>
          <h1 className="mt-3 text-xl">Made By <Link target="_main" href={'https://www.linkedin.com/in/sabter-iqbal-4a3b702b4/'} className="hover:text-amber-300 transition-all text-2xl hover:underline">"Sabter Raza Qadri"</Link></h1>
        </div>
      </footer>
    );
  };
    