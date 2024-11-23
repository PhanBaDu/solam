'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(' ');
    useEffect(() => {
        animate(
            'span',
            {
                opacity: 1,
                filter: filter ? 'blur(0px)' : 'none',
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            },
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                            style={{
                                filter: filter ? 'blur(10px)' : 'none',
                            }}
                        >
                            {word === 'e-commerce' && (
                                <span className="header__hero--heading-gradient block">
                                    {word}{' '}
                                </span>
                            )}
                            {word !== 'e-commerce' && word !== 'view-projects' && `${word}${' '}`}
                            {word === 'view-projects' && (
                                <Link
                                    className="flex justify-center text-lg hover:underline hover:text-[#1872e8] duration-300 mt-10"
                                    href={'#'}
                                >
                                    👋
                                    {word.split('-').map((e, i) => (
                                        <p key={i}>{e} </p>
                                    ))}
                                </Link>
                            )}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn('font-bold', className)}>
            <div className="mt-4">
                <div className=" dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
