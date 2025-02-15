"use client"
import Iphone15Pro from "@/components/landing-page/Iphone15Mock";
import { AnimatedList } from "@/components/magicui/animated-list";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Item } from "@/types";
import NotificationCard from "@/components/landing-page/NotificationCard";
import { MarqueeDemo } from "@/components/landing-page/user-opinions";


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
                            Welcome to <strong className="text-haibu_purple">Haibu</strong>, the future of
                            social media: <strong className="text-haibu_purple">secure</strong>,
                            <strong className="text-haibu_purple"> decentralized</strong>, and <strong className="text-haibu_purple">user-governed</strong>!
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
                        <strong className="text-haibu_purple">Take a look</strong> to lastest Haibu's Comunnity {" "}
                        <strong className="text-haibu_purple">Hais (posts)</strong>.
                    </h2>
                    <MarqueeDemo />
                </section>
            </main>
        </>
    )
}