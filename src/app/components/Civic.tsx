import Link from "next/link";
import i4 from ".//images/civic.jpeg";
import Image from "next/image";

export default function Civic() {
  return (
    <div className="w-full h-auto flex justify-center">
      <div className=" w-2/4 h-full justify-center ">
        <div className=" flex justify-center mt-8">
          <h1 className="underline text-2xl font-bold">Honda Civic 2024 Price In Pakistan,Images,Reviews & Specs</h1>
        </div>
        <div className="flex justify-center mt-6">
          <Image src={i4} alt="img" className="w-60"></Image>
              </div>
              <div className="flex justify-center mt-6 gap-3">
                  <button className="w-32 h-10 bg-blue-800 text-xs text-white rounded-md no-underline hover:bg-blue-300 hover:text-black transition-all">Book A Test Drive</button>
                  <button className="w-32 h-10 bg-blue-800 text-xs text-white rounded-md no-underline hover:bg-blue-300 hover:text-black transition-all">Request Finance</button>
                  <button className="w-32 h-10 bg-blue-800 text-xs text-white rounded-md no-underline hover:bg-blue-300 hover:text-black transition-all">Visit Place</button>
                  <button className="w-32 h-10 bg-blue-800 text-xs text-white rounded-md no-underline hover:bg-blue-300 hover:text-black transition-all">Car Inspection</button>
              </div>
              <div className="flex justify-center mt-6 text-lg font-medium">
                  <h1>Vehicle Description</h1>
              </div>
              <div className="flex justify-center mt-6 gap-6">
                  <h6 className="text-xs"><b>Number Of Doors : </b>4</h6>
                  <h6 className="text-xs"><b>Engine : </b>2000cc</h6>
                  <h6 className="text-xs"><b>Condition : </b>7.5/10</h6>
                  <h6 className="text-xs"><b>Driven : </b>6500 KM</h6>
              </div>

              <div className="flex justify-center mt-4 gap-4">
              <h6 className="text-xs"><b>Suspension Type : </b>Soft Suspension</h6>
                  <h6 className="text-xs"><b>Fuel Average : </b>13 KM Per Ltr</h6>
                  <h6 className="text-xs"><b>Transmision Type : </b>Automatic</h6>
                  <h6 className="text-xs"><b>Fuel Type : </b>High Octane</h6>
              </div>

              <div className="flex justify-center mt-8 font-semibold">
                  <h1 className="text-green-600">PKR 75,20,000</h1>
              </div>          

              <div className="flex justify-center mt-8 mb-10">
              <Link  href={'/checkout'}> <button className="w-32 h-10 bg-blue-800 text-xs text-white rounded-md no-underline hover:bg-blue-300 hover:text-black transition-all">Make Payment</button></Link>
              </div>
      </div>
    </div>
  );
}