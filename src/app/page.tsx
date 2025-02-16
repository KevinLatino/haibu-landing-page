"use client"
import Iphone15Pro from "@/components/landing-page/Iphone15Mock";
import { AnimatedList } from "@/components/magicui/animated-list";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Item } from "@/types";
import NotificationCard from "@/components/landing-page/NotificationCard";
import { MarqueeDemo } from "@/components/landing-page/user-opinions";
import TwitterCard from "@/components/landing-page/tweet-card";


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

                <section className="mt-[8rem]">
                    <h2 className="text-3xl text-center font-medium">
                        <strong className="text-haibu-purple">Take a look</strong> to lastest Haibu's Comunnity {" "}
                        <strong className="text-haibu-purple">Hais (posts)</strong>.
                    </h2>
                    <MarqueeDemo />
                </section>

                <section className="flex flex-col gap-8 items-center mt-[4rem]">
                    <h2 className="text-3xl text-center font-medium text-strong-blue" id="chopinFramework">
                        Why does <strong className="text-light-yellow">Haibu</strong> use <strong className="text-haibu-purple">Chopin Framework</strong>?
                    </h2>
                    <article className="w-full flex justify-evenly items-center">
                        <div className="w-[42%] flex justify-center">
                            <ul className="text-[1.08rem] flex-wrap font-raleway w-[90%] h-full flex flex-col gap-6 justify-center">
                                <li className="flex text-[1.5rem] gap-4">
                                    <p>
                                        <strong className="text-stellar-blue">What is Chopin Framework?</strong>
                                    </p>
                                </li>
                                <li className="flex w-full gap-4 justify-center">
                                    <strong className="text-light-yellow">●</strong>
                                    <p>
                                        <strong className="text-haibu-purple">Chopin Framework</strong> turns HTTP requests into blockchain transactions, allowing seamless integration without wallets or extensions.
                                    </p>
                                </li>
                                <li className="flex items-center w-full gap-4 justify-center">
                                    <strong className="text-light-green">●</strong>
                                    <p>
                                        Transactions are signed in the browser using an embedded Capsule wallet and stored on a data availability (DA) layer for verification.
                                    </p>
                                </li>
                                <li className="flex text-[1.5rem] items-center w-full gap-4">
                                    <p>
                                        <strong className="text-stellar-blue">Why does Haibu use Chopin?</strong>
                                    </p>
                                </li>
                                <li className="flex items-center w-full gap-4 justify-center">
                                    <strong className="text-red-500">●</strong>
                                    <p>
                                        <strong className="text-haibu-purple">Haibu</strong> uses Chopin to increase security by ensuring all interactions are verifiable and tamper-proof on-chain.
                                    </p>
                                </li>
                                <li className="flex items-center w-full gap-4 justify-center">
                                    <strong className="text-purple-500">●</strong>
                                    <p>
                                        Eliminates centralized authentication risks, making Haibu a safer and more resilient platform.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-[40%] flex justify-center">
                            <TwitterCard />
                        </div>
                    </article>
                </section>


            </main>
        </>
    )
}