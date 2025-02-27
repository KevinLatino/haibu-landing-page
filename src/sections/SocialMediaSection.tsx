import { ShineBorder } from "@/components/magicui/shine-border";
import { InfiniteBeeAllFrames } from "@/components/landing-page/infinite-bee-all-frames";
import { motion, useInView } from "framer-motion";
import { fastFadeInLeft, fastFadeInRight, fadeInUp } from "@/animations/variants";
import { useRef, useState, useEffect } from "react";
import cloud1 from '@/components/assets/clouds/cloud1.png';
import cloud2 from '@/components/assets/clouds/cloud2.png';
import cloud3 from '@/components/assets/clouds/cloud3.png';
import cloud4 from '@/components/assets/clouds/cloud4.png';
import cloud5 from '@/components/assets/clouds/cloud5.png';
import cloud6 from '@/components/assets/clouds/cloud6.png';
import cloud7 from '@/components/assets/clouds/cloud7.png';
import cloud8 from '@/components/assets/clouds/cloud8.png';
import cloud9 from '@/components/assets/clouds/cloud9.png';
import cloud10 from '@/components/assets/clouds/cloud10.png';
import grass from '@/components/assets/card-haibu/grass.png';
import tree from '@/components/assets/card-haibu/TreeWithColmena.png';

const clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9, cloud10];



function getRandomCloud() {
    return clouds[Math.floor(Math.random() * clouds.length)];
}

function getRandomHeight() {
    return Math.floor(Math.random() * 20);
}

function getRandomInterval() {
    return Math.floor(Math.random() * 4500) + 5000;
}

export default function SocialMediaSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    interface Cloud {
        id: number;
        src: string;
        top: number;
        left: number;
    }

    const [cloudsArray, setCloudsArray] = useState<Cloud[]>([]);

    useEffect(() => {
        setCloudsArray([...Array(5)].map(() => ({ id: Date.now() + Math.random(), src: getRandomCloud().src, top: getRandomHeight(), left: 100 })));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCloudsArray(prevClouds => [...prevClouds, { id: Date.now() + Math.random(), src: getRandomCloud().src, top: getRandomHeight(), left: 100 }]);
        }, getRandomInterval());

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCloudsArray(prevClouds => prevClouds.filter(cloud => cloud.left > -20).map(cloud => ({ ...cloud, left: cloud.left - 0.2 })));
        }, 100);

        return () => clearInterval(interval);
    }, []);


    return (
        <section id="socialmedia" ref={ref} className="relative flex flex-col items-center p-8 mt-40 w-full h-auto min-h-[700px] bg-white shadow-xl rounded-lg overflow-hidden">
            <motion.h2 
                className="absolute text-haibu-purple text-2xl text-center mt-40 font-semibold z-20"
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                Social Media
            </motion.h2>
            <motion.h1 
                className="absolute text-black font-bold text-4xl top-[220px] z-20"
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                Connect With Haibu
            </motion.h1>
            <motion.p 
                className="absolute text-black text-lg mt-60 text-center max-w-[50rem] z-20"
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                Connect with us on <span className="text-haibu-purple"><strong>social media and contribute to building</strong></span> a better ecosystem for <span className="text-haibu-purple"><strong>Haibu</strong></span>. 
                Stay updated, share your thoughts, and collaborate with our growing community!
            </motion.p>

            <div className="absolute flex flex-wrap justify-center gap-10 mt-80 z-20">
                <motion.a 
                    href="https://x.com/haibusocial"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fastFadeInLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ y: -10 }}
                >
                    <ShineBorder className="w-60 h-60 flex flex-col items-center justify-center shadow-2xl" color="black" borderWidth={2}>
                        <svg className="w-12 h-12" viewBox="0 0 124 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M97.3806 0.887207H116.111L75.201 48.1546L123.503 112.251H85.551L55.977 73.3967L21.9679 112.251H3.23771L47.1048 61.7646L0.77417 0.887207H39.7123L66.5748 36.5225L97.3806 0.887207ZM90.7259 100.866H101.076L34.0435 11.5274H22.7077L90.7259 100.866Z" fill="currentColor" />
                        </svg>
                        <p className="text-black mt-2 font-bold">Twitter</p>
                        <p className="text-black font-semibold"> News and Updates</p>
                    </ShineBorder>
                </motion.a>
                <motion.a 
                    href="https://t.me/haibusocial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ y: -10 }}
                >
                    <ShineBorder className="w-60 h-60 flex flex-col items-center justify-center shadow-2xl" color="blue" borderWidth={2}>
                        <svg className="w-12 h-12 text-blue-500 lucide lucide-send" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                            <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                        <p className="text-black mt-2 font-bold">Telegram</p>
                        <p className="text-black font-semibold">Discussions</p>
                    </ShineBorder>
                </motion.a>
                <motion.a 
                    href="https://github.com/Haibu-Project/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={fastFadeInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ y: -10 }}
                >
                    <ShineBorder className="w-60 h-60 flex flex-col items-center justify-center shadow-2xl" color="black" borderWidth={2}>
                        <svg className="w-12 h-12 text-balck lucide lucide-github" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        <p className="text-black mt-2 font-semibold">GitHub</p>
                        <p className="text-black font-semibold"> Resources</p>
                    </ShineBorder>
                </motion.a>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none">
                {cloudsArray.map((cloud) => (
                    <div
                        key={cloud.id}
                        className="absolute w-1/6 h-auto object-cover"
                        style={{ top: `${cloud.top}%`, left: `${cloud.left}%`, transition: 'left 0.1s linear' }}
                    >
                        <img
                            src={cloud.src}
                            alt="Cloud"
                            className="w-full h-auto"
                            onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                        />
                    </div>
                ))}
            </div>
            
            <img 
                src={grass.src} 
                alt="Grass" 
                className="absolute bottom-0 w-full h-auto object-cover z-10" 
            />
            <img 
                src={tree.src} 
                alt="Tree" 
                className="absolute bottom-8 left-1 w-1/6 h-auto object-cover z-10" 
            />
            <img 
                src={tree.src} 
                alt="Tree" 
                className="absolute bottom-20 right-1 w-1/6 h-auto object-cover z-10" 
            />

            <div className="absolute z-10 bottom-50 mt-[26rem] left-0 w-full h-full">
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-20 left-3/4" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-20 left-1/3" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-20 left-1/3" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-28 left-1/5" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-28 left-1/4" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-35 left-1/4" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={100} height={100} className="absolute top-20 left-2/3" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={80} height={100} className="absolute top-24 left-1/5" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-28 left-3/5" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-28 right-20" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={140} height={100} className="absolute top-40 right-40" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-40 right-60" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={140} height={100} className="absolute top-40 right-80" />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <InfiniteBeeAllFrames width={120} height={100} className="absolute top-40 right-120" />
                </motion.div>
            </div>
        </section>
    );
}
