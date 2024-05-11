import Image from "next/image";

export default function Scroll() {
  return (
    <div>

    <div className="w-full h-screen flex justify-center items-center">

       <div className="relative z-10 bg-gray-100 rotate-3">
       <div className="flex flex-row animate-marquee whitespace-nowrap gap-4">
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
        </div>
       </div>

       <div className="absolute z-30 bg-gray-100 shadow-2xl -rotate-3">
       <div className="flex flex-row animate-marquee whitespace-nowrap gap-4">
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>UI/UX DESIGNER</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
        </div>
       </div>

    </div>

    </div>
  );
}