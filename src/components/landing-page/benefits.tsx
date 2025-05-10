import { FifthImage } from "@/images/benifits/five";
import { FourthImage } from "@/images/benifits/four";
import { FirstImage } from "@/images/benifits/one";
import { ThirdImage } from "@/images/benifits/three";
import { SecondImage } from "@/images/benifits/two";

export default function Benefits() {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-4 py-6">
      {/* Heading and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-[#020617] text-4xl font-bold mb-2 h-[41.28px]">
          What you fix with us
        </h1>
        <p className="text-[#64748B] h-[19.04px]">
          Everything that slows you down? Gone.
        </p>
      </div>

      {/* First row - one large card */}
      <div className="w-full max-w-[1240px] mb-4">
        <FirstImage />
      </div>

      {/* Second row - two cards */}
      <div className="flex flex-col md:flex-row justify-center w-full gap-4 mb-4">
        <div className="flex justify-center">
          <div className="max-w-[709px]">
            <SecondImage />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[508px]">
            <ThirdImage />
          </div>
        </div>
      </div>

      {/* Third row - two cards */}
      <div className="flex flex-col md:flex-row justify-center w-full gap-4">
        <div className="flex justify-center">
          <div className="max-w-[508px]">
            <FourthImage />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[709px]">
            <FifthImage />
          </div>
        </div>
      </div>
    </div>
  );
}