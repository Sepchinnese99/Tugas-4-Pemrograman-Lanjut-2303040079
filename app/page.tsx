import Image from "next/image";
import background from '@/public/background.jpg';

export default function Page() {
    return (
        <main>
            <nav className="bg-white-500 fixed w-screen h-auto mx-auto z-50">
                <div className="flex justify-center px-4 space-x-4 text-white">
                    <div className="flex items-center space-x-1 hover:text-gray-500">
                        <a href="#" className="">Home</a>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-gray-500">
                        <a href="#" className="">About</a>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-gray-500">
                        <a href="#" className="">Contact</a>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-gray-500">
                        <a href="#" className="">News</a>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-gray-500">
                        <a href="#" className="">FaQ</a>
                    </div>
                </div>
            </nav>
            <div className="">
                <Image className="fixed z-[-1]"
                src={background}
                alt="background"
                />
                <div className="bg-black-rgba text-white w-screen h-screen flex z-10 justify-center items-center">
                   <div className="m1-25">
                    <h1 className="text-5xl">Cerdas, Baik Hati, Rajin Mengaji</h1>
                    <h2 className="text-left"> Evan Prima Mangku Leksana <br/> 2303040079 <br/> Amateur Programmer </h2>
               </div>
                </div>
            </div>
        </main>
    )
}

