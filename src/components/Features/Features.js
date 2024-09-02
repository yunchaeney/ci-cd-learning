import Image from "next/image";
import icon1 from "/public/features/icon1.svg";
import icon2 from "/public/features/icon2.svg";
import icon3 from "/public/features/icon3.svg";
import icon4 from "/public/features/icon4.svg";
import icon5 from "/public/features/icon5.svg";
import icon6 from "/public/features/icon6.svg";

export default function Features() {
  return (
    <>
      <section className="w-full bg-neutral-50">
        <div className="py-32 mx-auto max-w-7xl">
          <h1 className="text-center text-3xl font-medium mb-6">
            Now is the time to build your portfolio.
          </h1>
          <h2 className="text-center mx-auto text-lg text-neutral-600">
            With typical market returns, you have to start young to secure your
            future.
            <br />
            With Pocket, it’s never too late to build your nest egg.
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-10 mt-20">
            <div className="border rounded-xl p-8 w-1/4 flex-grow text-sm">
              <Image src={icon1.src} width={32} height={32} alt="아이콘" />
              <h4 className="font-semibold mt-6 mb-2">Invest any amount</h4>
              <p className="leading-6 text-neutral-600">
                Whether it’s $1 or $1,000,000, we can put your money to work for
                you.
              </p>
            </div>

            <div className="border rounded-xl p-8 w-1/4 flex-grow text-sm">
              <Image src={icon2.src} width={32} height={32} alt="아이콘" />
              <h4 className="font-semibold mt-6 mb-2">
                Build a balanced portfolio
              </h4>
              <p className="leading-6 text-neutral-600">
                Invest in different industries to find the most opportunities to
                win huge.
              </p>
            </div>

            <div className="border rounded-xl p-8 w-1/4 flex-grow text-sm">
              <Image src={icon3.src} width={32} height={32} alt="아이콘" />
              <h4 className="font-semibold mt-6 mb-2">Trade in real-time</h4>
              <p className="leading-6 text-neutral-600">
                Get insider tips on big stock moves and act on them within
                seconds.
              </p>
            </div>

            <div className="border rounded-xl p-8 w-1/4 flex-grow text-sm">
              <Image src={icon4.src} width={32} height={32} alt="아이콘" />
              <h4 className="font-semibold mt-6 mb-2">
                Profit from your network
              </h4>
              <p className="leading-6 text-neutral-600">
                Invite new insiders to get tips faster and beat even other
                Pocket users.
              </p>
            </div>

            <div className="border rounded-xl p-8 w-1/4 flex-grow text-sm">
              <Image src={icon5.src} width={32} height={32} alt="아이콘" />
              <h4 className="font-semibold mt-6 mb-2">
                Encrypted and anonymized
              </h4>
              <p className="leading-6 text-neutral-600">
                Cutting-edge security technology that even the NSA doesn’t know
                about keeps you hidden.
              </p>
            </div>

            <div className="border rounded-xl p-8 w-1/4 flex-grow text-sm">
              <Image src={icon6.src} width={32} height={32} alt="아이콘" />
              <h4 className="font-semibold mt-6 mb-2">Portfolio tracking</h4>
              <p className="leading-6 text-neutral-600">
                Watch your investments grow exponentially, leaving other
                investors in the dust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
