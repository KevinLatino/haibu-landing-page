import { PixelCard } from "@/components/ui/pixelcard"
import TiltedCard from "@/components/TiltedCard/TiltedCard"

export default function TokenSection() {
    return (
        <section className="mt-[6rem] p-4 md:p-[8rem]">
            <h2 className="text-2xl md:text-3xl text-center font-medium">
                Discover our token <strong className="text-light-yellow">Hai</strong> and what it's{" "}
                <strong className="text-haibu-purple"> mission</strong>
            </h2>
  
            <div className="flex flex-col md:flex-row justify-center items-center  md:gap-[10rem] mt-[3rem]">
                <ul className="text-[1.08rem] w-full md:w-[72%] flex-wrap font-raleway flex flex-col gap-6 justify-center">
                    <li className="flex text-[1.5rem] items-center w-full gap-4">
                        <p>
                            <strong className="text-stellar-blue">What is Hai Token?</strong>
                        </p>
                    </li>
                    <li className="flex items-center w-full gap-4 justify-start">
                        <strong className="text-red-500">●</strong>
                        <p>Hai is the governance token of Haibu. Holders can vote on platform decisions and shape its future.</p>
                    </li>
                    <li className="flex items-center w-full gap-4 justify-start">
                        <strong className="text-purple-500">●</strong>
                        <p>By holding Hai, you influence Haibu's development, making it truly decentralized.</p>
                    </li>
                    <li className="flex text-[1.5rem] items-center w-full gap-4">
                        <p>
                            <strong className="text-stellar-blue">How to earn Hai?</strong>
                        </p>
                    </li>
                    <li className="flex items-center w-full gap-4 justify-start">
                        <strong className="text-blue-500">●</strong>
                        <p>Join the Clicks Campaign! The top 5 users will receive Hai rewards.</p>
                    </li>
                    <li className="flex items-center w-full gap-4 justify-start">
                        <strong className="text-green-500">●</strong>
                        <p>
                            Hai is distributed monthly based on user likes and activity. The more engaged you are, the more you earn!
                        </p>
                    </li>
                </ul>
  
                <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
                    <PixelCard>
                        <h2 className="text-xl text-[#F6850A] font-[900]">Click the Hai Token to go to our Clicks Campaign!</h2>
                        <TiltedCard
                            imageSrc="/haibu-logos/HaiToken.svg"
                            containerHeight="320px"
                            containerWidth="320px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={10}
                            scaleOnHover={1.15}
                            showMobileWarning={false}
                            overlayContent={
                                <div>
                                    <p className="text-yellow-500 text-lg font-mono tracking-widest">Hai Token</p>
                                </div>
                            }
                        />
                    </PixelCard>
                </div>
            </div>
        </section>
    )
  }