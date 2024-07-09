"use client"

import {motion} from "framer-motion";
import React from "react";

const TransitionVariants = {
    initial: {
        x: '100%',
        width: '100%',
    },
    animate: {
        x: '0%',
        width: '0%'
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%']
    }
}

const Transition = () => {
    return (
        <div>
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[30] bg-[#2e2257]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{delay: .2, duration: .6, ease: 'easeInOut'}}
            />
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[20] bg-[#3b2d71]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{delay: .4, duration: .6, ease: 'easeInOut'}}
            />
            <motion.div
                className="fixed top-0 bottom-0 h-screen w-screen right-full z-[10] bg-[#4b3792]"
                variants={TransitionVariants}
                initial="initial"
                exit="exit"
                animate="animate"
                transition={{delay: .4, duration: .6, ease: 'easeInOut'}}
            />
        </div>
    )
}

export default Transition