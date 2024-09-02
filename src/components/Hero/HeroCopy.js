import Image from "next/image";
import { Button } from "@headlessui/react";
import AppStore from "/public/hero/appStoreBtn.svg";

export default function HeroCopy() {
  return (
    <section className="w-full bg-neutral-50">
      <div className="container mx-auto flex lg:flex-row flex-col justify-center lg:pt-40 pt-32 gap-36 lg:items-start items-center">
        {/* text */}
        <div className="lg:max-w-xl w-full">
          <h1 className="text-4xl font-medium mb-8">
            Invest at the perfect time.
          </h1>
          <p className="text-lg leading-8 mb-8">
            By leveraging insights from our network of industry insiders, you’ll
            know exactly when to buy to maximize profit, and exactly when to
            sell to avoid painful losses.
          </p>
          <div className="flex gap-6 mb-16">
            <Button className="bg-neutral-800 rounded-lg text-sm text-white font-semibold">
              <Image
                src={AppStore.src}
                width={120}
                height={40}
                alt="app store 버튼"
              />
            </Button>
            <Button className="border border-neutral-300 rounded-lg text-sm flex items-center gap-2 px-2 data-[hover]:border-neutral-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                class="h-6 w-6 flex-none"
              >
                <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4"></circle>
                <path
                  d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                  fill="#A3A3A3"
                  stroke="#A3A3A3"
                ></path>
              </svg>
              Watch the video
            </Button>
          </div>

          <p className="text-sm font-semibold mb-8">As featured in</p>
          <div className="flex flex-wrap justify-between gap-6">
            <img src="https://pocket.tailwindui.com/_next/static/media/forbes.c4b4b0dd.svg" />
            <img src="https://pocket.tailwindui.com/_next/static/media/techcrunch.fe121d74.svg" />
            <img src="https://pocket.tailwindui.com/_next/static/media/wired.42c588dc.svg" />
            <img src="https://pocket.tailwindui.com/_next/static/media/cnn.eaae184a.svg" />
            <img src="https://pocket.tailwindui.com/_next/static/media/bbc.9cfc75a9.svg" />
            <img src="https://pocket.tailwindui.com/_next/static/media/cbs.aa596395.svg" />
            <img src="https://pocket.tailwindui.com/_next/static/media/fast-company.8fba32a5.svg" />
            <img src="https://pocket.tailwindui.com/_next/static/media/huffpost.eeec742f.svg" />
          </div>
        </div>

        {/* img */}
        <div className="w-[480px] h-[560px] overflow-hidden relative">
          <img src="https://pocket.tailwindui.com/_next/static/media/phone-frame.d4b6b62a.svg" />
          <div className="absolute w-full bottom-0 h-64 bg-gradient-to-t from-neutral-50"></div>
        </div>
      </div>
    </section>
  );
}
