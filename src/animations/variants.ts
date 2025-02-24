import { Variants } from "framer-motion";

export const fastFadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } 
    },
};

export const fastFadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } 
    },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 1.3, ease: [0.25, 0.1, 0.25, 1] } 
    },
};
