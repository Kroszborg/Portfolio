'use client';

import { motion } from 'framer-motion';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import Link from 'next/link';
import { ANIMATION_DURATION } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Socials({ className }: { className?: string }) {

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.3 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: ANIMATION_DURATION.MEDIUM,
                ease: 'easeOut',
            },
        }),
    };


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className={cn('flex items-center gap-5 z-10 justify-center', className)}
        >
            <Link
                className="text-theme-primary font-black hover:scale-125 duration-300 transition-transform delay-0"
                href="https://medium.com/@kroszborg"
                target='_blank'
                aria-label={`Abhiman Panwar's Blogs (opens in the new tab)`}
            >
                <motion.div custom={0} variants={iconVariants}>
                     <span> Blog </span>
                </motion.div>
            </Link>
            <Link
                href="https://www.linkedin.com/in/abhiman-panwar-272aa7228/"
                target="_blank"
                aria-label="Abhiman Panwar's LinkedIn profile (opens in a new tab)"
            >
                <motion.div custom={1} variants={iconVariants}>
                    <LinkedinIcon
                        className="fill-theme-primary hover:scale-125 transition-transform duration-200 delay-0"
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>
            <Link
                href="https://github.com/Kroszborg"
                target="_blank"
                aria-label="Abhiman Panwar's GitHub profile (opens in a new tab)"
            >
                <motion.div custom={2} variants={iconVariants}>
                    <GithubIcon
                        className="fill-theme-primary hover:scale-125 transition-transform duration-200 delay-0"
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>
            <Link
                className="text-theme-primary font-black hover:scale-125 duration-300 transition-transform delay-0"
                href="https://docs.google.com/document/d/1vyy2-e_Fj9JhI5bLKmpdliicZTI85H2bTcdtDtoHxco/edit?usp=sharing"
                target="_blank"
                aria-label="Abhiman Panwar's Resume (opens in a new tab)"
            >
                <motion.div custom={3} variants={iconVariants}>
                    <span> Resume </span>
                </motion.div>
            </Link>
            <Link
                href="https://x.com/abhimanpanwar"
                target="_blank"
                aria-label="Abhiman Panwar's Twitter profile (opens in a new tab)"
            >
                <motion.div custom={2} variants={iconVariants}>
                    <TwitterIcon
                        className="fill-theme-primary hover:scale-125 transition-transform duration-200 delay-0"
                        aria-hidden="true"
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
}
