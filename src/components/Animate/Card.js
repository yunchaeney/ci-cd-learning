import Image from "next/image";
import star from "/public/animate/star.svg";

export default function Card() {
  return (
    <>
      <div className="p-6 rounded-2xl shadow-lg shadow-gray-900/5 flex flex-col gap-3 bg-white mb-8">
        <div className="flex mb-1">
          <Image src={star.src} width={20} height={20} alt="별" />
          <Image src={star.src} width={20} height={20} alt="별" />
          <Image src={star.src} width={20} height={20} alt="별" />
          <Image src={star.src} width={20} height={20} alt="별" />
          <Image src={star.src} width={20} height={20} alt="별" />
        </div>
        <h3 className="text-lg/6 font-semibold">“I love it!”</h3>
        <p className="text-base/7">
          I started providing insider information myself and now I get new
          insider tips every 5 minutes. I don’t even have time to act on all of
          them. New Lamborghini is being delivered next week!
        </p>
        <span className="text-sm text-gray-600">- MrBurns</span>
      </div>
    </>
  );
}
