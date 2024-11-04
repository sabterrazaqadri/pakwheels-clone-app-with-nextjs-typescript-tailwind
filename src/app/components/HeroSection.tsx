export default function HeroSection() {
    return (
        <div className=" w-full h-96 mt-40 flex justify-center">
            <div className=" h-5/6 w-3/4 border ">
                <h3 className="mt-2 text-2xl text-center font-semibold text-slate-700">Sell Your Cars On PakWheels And Get The Best Price</h3>
                <div className="flex items-center justify-center">
                <div className="pl-8 w-2/4 h-80 ">
                    <h2 className=" mt-8 text-blue-900 font-semibold text-xl">Post Your Ad On PakWheels</h2>
                    <h6 className=" mt-8 text-slate-600">&#10003; Post Your Ad For Free In 3 Easy Steps</h6>
                    <h6 className=" mt-2 text-slate-600">&#10003; Get Genuine Offers From Verified Buyers</h6>
                    <h6 className=" mt-2 text-slate-600">&#10003; Sell Your Car Fast At The Best Price</h6>
                    <button className="bg-red-700 h-12 mt-8 p-2 rounded-md text-white font-semibold w-44 hover:text-lg transition-all">
                        Post Your Ad </button>
                    </div>
                    <h6 className="text-2xl pr-20 text-slate-500 font-bold  ">OR</h6>
                    <div className=" w-2/4 h-80 ">
                    <h2 className="mt-8  text-blue-900 font-semibold text-xl">Try PakWheels Sell It For Me</h2>
                    <h6 className=" mt-8 text-slate-600">&#10003; Dedicated Sales Expert To Sell Your Car</h6>
                    <h6 className=" mt-2 text-slate-600">&#10003; We Bargain For You And Share The Best Offer</h6>
                    <h6 className=" mt-2 text-slate-600">&#10003; We Ensure Safe&Secure Transaction</h6>
                    <button className="bg-blue-500 mt-8 h-12 p-2 rounded-md text-white font-semibold w-44 hover:text-lg transition-all">
                        Register Your Car </button>
                    </div>
                </div>
            </div>
        </div>
    )
}