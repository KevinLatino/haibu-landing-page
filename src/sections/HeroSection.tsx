import Link from "next/link"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { AnimatedList } from "@/components/magicui/animated-list"
import NotificationCard from "@/components/landing-page/NotificationCard";
import Iphone15Pro from "@/components/landing-page/Iphone15Mock";
import { Item } from "@/types";


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


export default function HeroSection() {
    return (
        <>
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
        </>
    )
}