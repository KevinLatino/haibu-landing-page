"use client";
import { motion } from "framer-motion";
import Iphone15Pro from "@/components/landing-page/Iphone15Mock";
import { AnimatedList } from "@/components/magicui/animated-list";
import Link from "next/link";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Item } from "@/types";
import NotificationCard from "@/components/landing-page/NotificationCard";
import TokenSection from "@/sections/TokenSection";
import ContributeSection from "@/sections/ContributeSection";
import ChopinSection from "@/sections/ChopinFramework";
import SocialMediaSection from "@/sections/SocialMediaSection";
import { fastFadeInRight, fastFadeInLeft, fadeInUp } from "@/animations/variants";
import { InfiniteBeeAllFrames } from "@/components/landing-page/infinite-bee-all-frames"
import HaibuSection from "@/sections/HaibuSection";

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
            <main className="flex flex-col justify-center items-center min-h-screen">
                <motion.section
                    className="flex flex-col md:flex-row items-center justify-center w-full text-center md:text-left gap-5"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        id="home"
                        className="flex w-full md:w-[40%] flex-col justify-center items-center gap-5 mb-[10rem] ml-[4rem] relative"
                        variants={fastFadeInLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-strong-blue text-center font-medium text-3xl max-w-[50rem]">
                            Welcome to <strong className="text-haibu-purple">Haibu</strong>, the future of
                            social media: <strong className="text-haibu-purple">secure</strong>,
                            <strong className="text-haibu-purple"> decentralized</strong>, and <strong className="text-haibu-purple">user-governed</strong>!
                        </h1>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="/register">
                                <ShimmerButton className="shadow-2xl">
                                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                        Join Haibu and shape the future!
                                    </span>
                                </ShimmerButton>
                            </Link>
                        </motion.div>
                        <div className="absolute top-36 left-1/2 transform -translate-x-1/2 pointer-events-none">
                            <InfiniteBeeAllFrames width={350} height={100} />
                        </div>
                    </motion.div>

                    <motion.section
                        className="flex w-full md:w-[40%] justify-center"
                        variants={fastFadeInRight}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <Iphone15Pro>
                            <AnimatedList delay={1000}>
                                {notifications.map((notification) => (
                                    <NotificationCard key={notification.title} {...notification} />
                                ))}
                            </AnimatedList>
                        </Iphone15Pro>
                    </motion.section>
                </motion.section>

                <HaibuSection />
                <TokenSection />
                <ContributeSection />
                <ChopinSection />
                <SocialMediaSection />
            </main>
        </>
    );
}
