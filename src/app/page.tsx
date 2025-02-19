"use client"
import Iphone15Pro from "@/components/landing-page/Iphone15Mock";
import { AnimatedList } from "@/components/magicui/animated-list";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Item } from "@/types";
import NotificationCard from "@/components/landing-page/NotificationCard";
import { MarqueeDemo } from "@/components/landing-page/user-opinions";
import TwitterCard from "@/components/landing-page/tweet-card";
import { HaibuContribution } from "@/components/landing-page/terminal";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import { motion } from "framer-motion";
import { PixelCard } from "@/components/ui/pixelcard";

const notifications: Item[] = [
    {
        title: "Secure with Chopin",
        description: "Advanced security to protect your privacy.",
        icon: "🔒",
        color: "#FF3D71",
    },
    {
        title: "Open & Community Driven",
        description: "Built for transparency and collaboration.",
        icon: "🌟",
        color: "#1E86FF",
    },
    {
        title: "Hai Token Governance",
        description: "Use Hai tokens to shape Haibu's future.",
        icon: "🐝",
        color: "#FFB800",
    },
    {
        title: "Powered by Celestia",
        description: "Leveraging Celestia's modularity.",
        icon: "🌌",
        color: "#00C9A7",
    },
];


function TokenSection() {
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
  
  function DeveloperSection() {
    return (
        <section className="md:p-[8rem] w-full flex flex-col justify-evenly items-center">
            <h2 className="text-2xl md:text-3xl text-center font-medium">
                Are you a <strong className="text-light-yellow">developer</strong>? Join us and contribute to
                <strong className="text-haibu-purple"> Haibu!</strong>
            </h2>
  
            <article className="flex flex-col md:flex-row mt-[2rem] gap-[5rem] ">
                <div className="w-full md:w-[62%] flex flex-col justify-center">
                    <ul className="text-[1.08rem] flex-wrap font-raleway w-full md:w-[90%] h-full flex flex-col gap-6 justify-center">
                        <li className="flex text-[1.5rem] items-center w-full gap-4">
                            <p>
                                <strong className="text-stellar-blue">How can you help?</strong>
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-red-500">●</strong>
                            <p>
                                Fork our repo, pick an issue, contribute with code, documentation, or ideas. Every contribution matters!
                                🌟
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-purple-500">●</strong>
                            <p>
                                Join our community discussions, propose features, and be part of an open and inclusive development
                                process.
                            </p>
                        </li>
                        <li className="flex text-[1.5rem] items-center w-full gap-4">
                            <p>
                                <strong className="text-stellar-blue">Why contribute to Haibu?</strong>
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-blue-500">●</strong>
                            <p>
                                Get real-world open-source experience, build your portfolio, and collaborate with like-minded
                                developers.
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-green-500">●</strong>
                            <p>
                                Help create a decentralized, community-driven platform where governance is in the hands of the users.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-[60%]">
                    <HaibuContribution />
                </div>
            </article>
        </section>
    )
  }

  
  function CommunitySection() {
    return (
        <section className="mt-[8rem]">
            <h2 className="text-2xl md:text-3xl text-center font-medium">
                <strong className="text-haibu-purple">Take a look</strong> to lastest Haibu's Comunnity{" "}
                <strong className="text-haibu-purple">Hais (posts)</strong>.
            </h2>
            <article className="overflow-x-hidden">
                <MarqueeDemo />
            </article>
        </section>
    )
  }
  

  export default function LandingPage() {
    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <section className="flex min-h-3/4 flex-col items-center md:items-stretch md:flex-row w-full mt-[0] md:mt-[4rem] justify-evenly">
                    <div className="flex w-full md:w-[40%] flex-col gap-7 md:mt-20 mt-0 md:h-auto h-[300px]">
                        <h1 className="text-strong-blue font-medium text-3xl text-center">
                            Welcome to <strong className="text-haibu-purple">Haibu</strong>, the future of
                            social media: <strong className="text-haibu-purple">secure</strong>,
                            <strong className="text-haibu-purple"> decentralized</strong>, and <strong className="text-haibu-purple">user-governed</strong>!
                        </h1>
                        <div className="flex items-center justify-center">
                            <Link href="/register">
                                <ShimmerButton className="shadow-2xl">
                                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                        Join Haibu and shape the future!
                                    </span>
                                </ShimmerButton>
                            </Link>
                        </div>
                    </div>
                    <div className="flex w-full md:w-[40%] mt-[-80px] flex-col gap-5">
                        <Iphone15Pro>
                            <AnimatedList delay={1000}>
                                {notifications.map((notification) => (
                                    <NotificationCard key={notification.title} {...notification} />
                                ))}
                            </AnimatedList>
                        </Iphone15Pro>
                    </div>
                </section>

                {/* Secciones adicionales */}
                <TokenSection />
                <DeveloperSection />
                <ChopinSection />
                <CommunitySection />
            </main>
        </>
    );
}
