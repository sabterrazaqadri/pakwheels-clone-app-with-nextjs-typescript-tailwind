import Link from "next/link";
import Image from "next/image";
import i2 from ".//images/corolla.jpeg";
import i3 from ".//images/mira.jpg";
import i4 from ".//images/civic.jpeg";
import i5 from ".//images/rating.png";
import i1 from ".//images/alto.jpeg"

export default function Featuring() {
  return (
    <div className=" w-full h-full flex mb-4 bg-gray-100 justify-center">
      <div className="w-3/4  h-full">
        <div className="  flex">
          <h2 className="w-4/5 font-semibold mt-6">Featured New Car</h2>
          <h6 className="mt-6 text-xs hover:underline text-blue-400 ml-32">
            View All New Cars</h6>
        </div>
        <div className="pt-6 text-sm ">
          <Link
            href={"/"}
            className="hover:text-blue-500 transition-all hover:underline hover:font-semibold pr-10"
          >
            Popular
          </Link>
          <Link
            href={"/"}
            className="hover:text-blue-500 transition-all hover:underline hover:font-semibold pr-10"
          >
            Upcoming
          </Link>
          <Link
            href={"/"}
            className="hover:text-blue-500 transition-all hover:underline hover:font-semibold"
          >
            Newly Launched
          </Link>
        </div>

        <div className="w-full h-72 mt-3 border items-center flex justify-between gap-4">
          <Link href={"/suzukiAlto"}>
            <div className="bg-white h-64 w-52">
              <Image src={i1} alt="img" className="mt-8 pr-3 w-48"></Image>
              <h3 className="text-center mt-4 text-blue-800">Suzuki Alto</h3>
              <h6 className="text-center text-xs text-green-600">
                PKR 20.5 - 29.7 lacs
              </h6>
              <div className="flex mt-1 h-8 justify-center items-center gap-2">
                <Image className="w-10" src={i5} alt="img"></Image>
                <p className="text-xs">816 Reviews</p>
              </div>
            </div>
          </Link>

            <Link href={"/hondaCivic"}>
              <div className="bg-white h-64 w-52">
                <Image src={i4} alt="img" className="mt-4 "></Image>
                <h3 className="text-center mt-4 text-blue-800">Honda Civic</h3>
                <h6 className="text-center text-xs text-green-600">
                  PKR 40.5 - 65 lacs
                </h6>
                <div className="flex mt-1 h-8 justify-center items-center gap-2">
                  <Image className="w-10" src={i5} alt="img"></Image>
                  <p className="text-xs">643 Reviews</p>
                </div>
              </div>
            </Link>
          
          <Link href={"/toyotaCorolla"}>
            <div className="bg-white h-64 w-52">
              <Image src={i2} alt="img" className="mt-4 w-44 pl-5"></Image>
              <h3 className="text-center mt-4 text-blue-800">Toyota Corolla</h3>
              <h6 className="text-center text-xs text-green-600">
                PKR 75.5 - 89.2 lacs
              </h6>
              <div className="flex mt-1 h-8 justify-center items-center gap-2">
                <Image className="w-10" src={i5} alt="img"></Image>
                <p className="text-xs">938 Reviews</p>
              </div>
            </div>
          </Link>
          <Link href={"/daihatsuMira"}>
            <div className="bg-white h-64 w-52">
              <Image src={i3} alt="img" className="mt-4 w-44 pl-5"></Image>
              <h3 className="text-center mt-4 text-blue-800">Daihatsu Mira</h3>
              <h6 className="text-center text-xs text-green-600">
                PKR 29.5 - 39.5 lacs
              </h6>
              <div className="flex mt-1 h-8 justify-center items-center gap-2">
                <Image className="w-10" src={i5} alt="img"></Image>
                <p className="text-xs">816 Reviews</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
