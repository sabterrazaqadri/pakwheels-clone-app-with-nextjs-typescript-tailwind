import Link from "next/link";
import Image from "next/image";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <div>
      <div className="bg-black w-full h-24 flex justify-center">
        <div className=" w-3/4">
          <div className="w-full h-6 flex items-center border-y-slate-700 text-white">
            <h6 className="w-5/6 font-sans text-sm">Download App Via SMS</h6>
            <div className=" ml-16 justify-center items-center">
              <Link href={"./"} className="font-sans pr-2 text-sm">
                Sign In
              </Link>
              <Link href={"./"} className="font-sans mr-1 text-sm">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="flex items-center h-16 ">
                      <Image src={logo} alt="logo" className="w-28"></Image>
                      <div className=" flex justify-center items-center w-4/5 h-full text-white font-semibold">
                          <Link href={'/'}className="hover:text-sky-300 hover:text-lg transition-all w-24">Used Cars</Link>
                          <Link href={'/'}className="hover:text-sky-300 hover:text-lg transition-all text-center w-24">New Cars</Link>
                          <Link href={'/'}className="hover:text-sky-300 hover:text-lg transition-all text-center w-24">Bikes</Link>
                          <Link href={'/'}className="hover:text-sky-300 hover:text-lg transition-all text-center w-24">Auto Store</Link>
                          <Link href={'/'}className="hover:text-sky-300 hover:text-lg transition-all text-center w-24">Videos</Link>
                          <Link href={'/'}className="hover:text-sky-300 hover:text-lg transition-all text-center w-20">Forum</Link>
                          <Link href={'/'}className="hover:text-sky-300 hover:text-lg transition-all text-center w-20">Blog</Link>
                          <Link href={'/'}className="hover:text-sky-300 hover:text-lg transition-all text-center w-20">More <sup className="text-blue-500">New</sup></Link>
                      </div>
                      <button className="bg-red-700 p-1 rounded-md text-white font-semibold w-36 hover:text-lg transition-all">
                          Post An Ad &#8595;
                      </button>
          </div>
        </div>
      </div>
    </div>
  );
}
