import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
}

export const fadeInLeft: Variants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
}

export const fadeInRight: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
}

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
}

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const slideInFromTop: Variants = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
}

export const hoverScale = {
    scale: 1.05,
    y: -3,
    transition: { duration: 0.2 },
}

export const tapScale = {
    scale: 0.98,
}