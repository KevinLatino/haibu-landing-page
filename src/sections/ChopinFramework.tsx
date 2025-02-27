"use client";
import { motion } from "framer-motion";
import TwitterCard from "@/components/landing-page/tweet-card";
import { fastFadeInLeft, fastFadeInRight } from "@/animations/variants";

export default function ChopinSection() {
    return (
        <section id="chopin" className="flex flex-col gap-8 items-center p-4 md:p-[6rem]">
            <h2 className="text-2xl md:text-3xl text-center font-medium text-strong-blue" id="chopinFramework">
                Why does <strong className="text-light-yellow">Haibu</strong> use{" "}
                <strong className="text-haibu-purple">Chopin Framework</strong>?
            </h2>
            <article className="w-full flex flex-col md:flex-row justify-evenly items-center">

                <motion.div
                    className="w-full md:w-[60%] flex justify-center"
                    variants={fastFadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} 
                >
                    <ul className="text-[1.08rem] flex-wrap font-raleway w-[90%] h-full flex flex-col gap-6 justify-center">
                        <li className="flex text-[1.5rem] gap-4">
                            <p>
                                <strong className="text-stellar-blue">What is Chopin Framework?</strong>
                            </p>
                        </li>
                        <li className="flex w-full gap-4 justify-center">
                            <strong className="text-light-yellow">●</strong>
                            <p>
                                <strong className="text-haibu-purple">Chopin Framework</strong> turns HTTP requests into blockchain
                                transactions, allowing seamless integration without wallets or extensions.
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-green-800">●</strong>
                            <p>
                                Transactions are signed in the browser using an embedded Capsule wallet and stored on a data
                                availability (DA) layer for verification.
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
                                <strong className="text-haibu-purple">Haibu</strong> uses Chopin to increase security by ensuring all
                                interactions are verifiable and tamper-proof on-chain.
                            </p>
                        </li>
                        <li className="flex items-center w-full gap-4 justify-center">
                            <strong className="text-purple-500">●</strong>
                            <p>Eliminates centralized authentication risks, making Haibu a safer and more resilient platform.</p>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="w-full md:w-[50%] flex justify-center mt-8 md:mt-0"
                    variants={fastFadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <TwitterCard />
                </motion.div>
            </article>
        </section>
    );
}
