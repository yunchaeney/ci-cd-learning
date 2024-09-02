import { Button, Input } from "@headlessui/react";
import QrcodeWrapper from "./QrcodeWrapper";
import Qrcode from "./Qrcode";

export default function Footer() {
  return (
    <>
      <section className="w-full bg-neutral-50 border-t-1 border-t-neutral-200">
        <div className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-4 divide-y">
          {/* 상단 */}
          <div className="flex justify-between  mb-16">
            <div className="pt-6">
              {/* 좌측 아이콘 */}
              <div className="flex">
                <div className="py-1">
                  <svg
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                    class="h-10 w-10 flex-none fill-cyan-500"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-between ml-4">
                  <h3 className="font-semibold">Pocket</h3>
                  <h4 className="text-sm">Invest at the perfect time.</h4>
                </div>
              </div>
              {/* 좌측 nav */}
              <ul className="flex gap-8 mt-11 text-sm text-neutral-600">
                <li>Features</li>
                <li>Reviews</li>
                <li>Pricing</li>
                <li>FAQs</li>
              </ul>
            </div>
            {/* 우측 QR */}
            <div className="group flex rounded-2xl p-6 hover:bg-neutral-100">
              <div class="relative h-24 w-24 flex items-center justify-center">
                <QrcodeWrapper className="absolute h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
                <Qrcode />
              </div>

              <div className="flex flex-col justify-center max-w-64 ml-8">
                <h3 className="font-semibold text-neutral-700 mb-2">
                  Download the app
                </h3>
                <h4 className="text-sm text-neutral-600">
                  Scan the QR code to download the app from the App Store.
                </h4>
              </div>
            </div>
          </div>

          {/* 하단 */}
          <div className="flex justify-between py-7 text-neutral-500">
            <p className="text-sm">© Copyright 2024. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Input
                name="input"
                type="text"
                placeholder="Email address"
                className="bg-white border border-neutral-300 rounded-lg max-w-64 p-2 text-sm placeholder:text-neutral-400
                data-[focus]:outline-cyan-500 "
              />
              <Button className="bg-cyan-500 rounded-lg p-2.5 text-sm text-white font-semibold data-[hover]:bg-opacity-90">
                Join our newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
