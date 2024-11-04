import Link from "next/link"
export default function checkout() {
    return (
        <div className="w-full h-auto bg-sky-50">
           <div className="flex justify-center"><h1 className="text-3xl font-bold mt-10">Enter Your Details</h1></div>
            <div className="flex justify-center">
                <form action="/" className=" h-72 w-96 flex flex-col justify-center pl-12 gap-4 mt-20">
                    <input type="text" placeholder="Enter Your Name" className=" rounded-md border w-72 h-7 pl-4 text-xs" />
                    <input type="email" placeholder="Enter Your Email" className=" rounded-md border w-72 h-7 pl-4 text-xs" />
                    <input type="password" placeholder="Card Number" className=" rounded-md border w-72 h-7 pl-4 text-xs" />
                    <input type="text" placeholder="Address" className=" rounded-md border w-72 h-7 pl-4 text-xs"/>
                </form>
            </div>
        <Link href={'/thanks'}>    <div className="flex justify-center">
            <button className="w-32 h-10 bg-blue-800 mb-20 text-xs text-white rounded-md no-underline hover:bg-blue-300 hover:text-black transition-all">Place Your Order</button>
            </div> </Link>
        </div> 
    )
}