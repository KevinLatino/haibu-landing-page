import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { useRef, useState, useEffect } from "react";
import grass from '@/components/assets/card-haibu/grass.png';
import tree from '@/components/assets/card-haibu/TreeWithColmena.png';
import { InfiniteBeeAllFrames } from '@/components/landing-page/infinite-bee-all-frames';
import RotatingText from '@/components/RotatingText/RotatingText';
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

const clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7, cloud8, cloud9, cloud10];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

function getRandomCloud() {
    return clouds[Math.floor(Math.random() * clouds.length)];
}

function getRandomHeight() {
    return Math.floor(Math.random() * 20);
}

function getRandomInterval() {
    return Math.floor(Math.random() * 4500) + 5000;
}

export default function HaibuSection() {
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
        <section id="features"  ref={ref} className="relative flex flex-col items-center p-8 mt-40 w-full h-auto min-h-[700px] bg-white rounded-lg overflow-hidden">
            <div className="absolute top-1 left-0 w-full h-full z-5 pointer-events-none">
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
                className="absolute bottom-8 right-1 w-1/4 h-auto object-cover z-10" 
            />
            <img 
                src={tree.src} 
                alt="Tree" 
                className="absolute bottom-20 left-1 w-1/4 h-auto object-cover z-10" 
            />
            
            <motion.div 
                className="relative p-4 z-20 w-full max-w-[1200px] text-center"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="max-w-[50rem] mt-16 mx-auto z-50">
                    <motion.h2 
                        className="text-black text-4xl text-center font-semibold mb-10"
                        variants={fadeInUp}
                    >
                        <span className="">What is <span className="text-haibu-purple">Haibu</span>?</span>
                    </motion.h2>
                    <motion.p 
                        className="text-black text-2xl mt-2 text-center max-w-[50rem] mx-auto font-semibold"
                        variants={fadeInUp}
                    >
                        <span className="">It is a <span className=" font-bold text-haibu-purple">secure</span>, <span className=" font-bold text-haibu-purple">decentralized</span>, and <span className="font-bold text-haibu-purple">user-governed</span> social media platform where people can share their thoughts, ideas, and experiences through posts, comments, and interactions.</span>
                    </motion.p>
                </div>

                <motion.div 
                    className="relative p-4 z-20"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={120} height={50} className="absolute top-12 left-3/4" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={100} height={50} className="absolute top-8 left-1/3" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={100} height={50} className="absolute top-8 left-1/3" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={140} height={50} className="absolute top-28 left-1/5" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={140} height={50} className="absolute top-28 left-1/4" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={140} height={50} className="absolute top-35 left-1/4" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={100} height={50} className="absolute top-20 left-2/3" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={100} height={50} className="absolute top-24 left-1/5" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={95} height={50} className="absolute top-28 left-3/5" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={140} height={50} className="absolute top-28 right-20" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={140} height={50} className="absolute top-28 right-40" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={140} height={50} className="absolute top-28 right-60" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={140} height={50} className="absolute top-40 right-80" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <InfiniteBeeAllFrames width={140} height={50} className="absolute top-40 right-120" />
                    </motion.div>
                </motion.div>
            </motion.div>
            
            <motion.div 
                className="mt-48 z-30 flex items-center justify-center"
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <span className="text-black text-3xl font-bold">Haibu is </span>&nbsp;
                <RotatingText
                    texts={['Decentralized', 'Secure', 'Open Source', 'Social', 'Community', 'The Future']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-haibu-purple shadow-lg text-3xl text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"first"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </motion.div>
        </section>
    );
}
