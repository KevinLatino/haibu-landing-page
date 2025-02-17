"use client"
import { MarqueeDemo } from "@/components/landing-page/user-opinions";
import ChopinFrameworkSection from "@/sections/ChopinFramework";
import HeroSection from "@/sections/HeroSection";


export default function LandingPage() {
    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <section className="flex min-h-3/4 flex-col items-center md:items-stretch md:flex-row w-full mt-[0] md:mt-[4rem] justify-evenly">
                    <HeroSection />
                </section>

                <section className="flex flex-col gap-8  items-center mt-[4rem]">
                    <ChopinFrameworkSection />
                </section>

                <section className="mt-[8rem]">
                    <h2 className="text-3xl text-center font-medium">
                        <strong className="text-haibu-purple">Take a look</strong> to lastest Haibu's Comunnity {" "}
                        <strong className="text-haibu-purple">Hais (posts)</strong>.
                    </h2>
                    <article className="overflow-x-hidden">
                        <MarqueeDemo />
                    </article>

                </section>

            </main>
        </>
    )
}