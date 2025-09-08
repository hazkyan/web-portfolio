"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import { InfiniteSlider } from '@/components/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { motion } from 'framer-motion'

// Floating particles component - Fixed positions to prevent hydration errors
const FloatingParticles = () => {
    const particles = [
        { left: '15%', top: '20%', delay: '0s', duration: '3s' },
        { left: '85%', top: '10%', delay: '0.5s', duration: '4s' },
        { left: '75%', top: '60%', delay: '1s', duration: '3.5s' },
        { left: '25%', top: '70%', delay: '1.5s', duration: '4.5s' },
        { left: '60%', top: '30%', delay: '2s', duration: '3.2s' },
        { left: '10%', top: '80%', delay: '2.5s', duration: '4.2s' },
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{ 
                        y: [0, -30, 0],
                        x: [0, 15, 0, -15, 0],
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: parseFloat(particle.duration),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: parseFloat(particle.delay),
                    }}
                />
            ))}
        </div>
    )
}

// Floating code snippets for the sides
const FloatingCodeSnippets = () => {
    const leftSnippets = [
        { 
            code: "const developer = {\n  name: 'Hazpol',\n  skills: ['React', 'Next.js']\n}", 
            top: '15%', 
            delay: '0s',
            language: 'javascript'
        },
        { 
            code: "function createAmazingWebsite() {\n  return 'portfolio.dev'\n}", 
            top: '45%', 
            delay: '2s',
            language: 'javascript'
        },
        { 
            code: "SELECT * FROM projects\nWHERE awesome = true", 
            top: '75%', 
            delay: '4s',
            language: 'sql'
        }
    ]

    const rightSnippets = [
        { 
            code: "import { talent } from 'hazpol'\n\nexport default talent", 
            top: '20%', 
            delay: '1s',
            language: 'typescript'
        },
        { 
            code: ".hero {\n  background: linear-gradient(\n    to-right, blue, purple\n  );\n}", 
            top: '50%', 
            delay: '3s',
            language: 'css'
        },
        { 
            code: "class Developer:\n    def __init__(self):\n        self.name = 'Hazpol'", 
            top: '80%', 
            delay: '5s',
            language: 'python'
        }
    ]

    return (
        <>
            {/* Left side snippets */}
            <div className="fixed left-4 top-0 h-full w-72 pointer-events-none z-10 hidden xl:block">
                {leftSnippets.map((snippet, i) => (
                    <motion.div
                        key={`left-${i}`}
                        className="absolute"
                        style={{ top: snippet.top }}
                        initial={{ opacity: 0, x: -100, rotateY: 90 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: parseFloat(snippet.delay),
                            ease: "easeOut"
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            rotate: 0,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="bg-gray-900/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-gray-400 ml-2">{snippet.language}</span>
                            </div>
                            <pre className="text-xs text-gray-300 font-mono leading-relaxed overflow-hidden">
                                <code>{snippet.code}</code>
                            </pre>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Right side snippets */}
            <div className="fixed right-4 top-0 h-full w-72 pointer-events-none z-10 hidden xl:block">
                {rightSnippets.map((snippet, i) => (
                    <motion.div
                        key={`right-${i}`}
                        className="absolute"
                        style={{ top: snippet.top }}
                        initial={{ opacity: 0, x: 100, rotateY: -90 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: parseFloat(snippet.delay),
                            ease: "easeOut"
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            rotate: 0,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="bg-gray-900/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 shadow-xl transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-gray-400 ml-2">{snippet.language}</span>
                            </div>
                            <pre className="text-xs text-gray-300 font-mono leading-relaxed overflow-hidden">
                                <code>{snippet.code}</code>
                            </pre>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

// Interactive tech icons for medium+ screens
const FloatingTechIcons = () => {
    const techIcons = [
        { icon: '⚛️', name: 'React', left: '8%', top: '25%', delay: '0s' },
        { icon: '🚀', name: 'Next.js', right: '8%', top: '20%', delay: '1s' },
        { icon: '💾', name: 'Database', left: '5%', top: '60%', delay: '2s' },
        { icon: '🎨', name: 'Design', right: '5%', top: '65%', delay: '3s' },
        { icon: '⚡', name: 'Fast', left: '10%', top: '80%', delay: '4s' },
        { icon: '🔧', name: 'Tools', right: '12%', top: '85%', delay: '5s' },
    ]

    return (
        <div className="fixed inset-0 pointer-events-none z-10 lg:block xl:hidden">
            {techIcons.map((tech, i) => (
                <motion.div
                    key={i}
                    className="absolute group"
                    style={{
                        left: tech.left,
                        right: tech.right,
                        top: tech.top,
                    }}
                    initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: parseFloat(tech.delay),
                        ease: "backOut"
                    }}
                    whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.div 
                        className="relative"
                        animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 animate-float">
                            {tech.icon}
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                            {tech.name}
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default function HeroSection() {
    const [cursor, setCursor] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    const roles = React.useRef<string[]>(["Developer", "Designer", "Data Analyst"]) // cycling words
    const [typed, setTyped] = React.useState<string>("")
    const [roleIndex, setRoleIndex] = React.useState<number>(0)
    const [isDeleting, setIsDeleting] = React.useState<boolean>(false)

    React.useEffect(() => {
        const current = roles.current[roleIndex % roles.current.length]
        const speed = isDeleting ? 40 : 80
        const timeout = setTimeout(() => {
            const nextLength = isDeleting ? typed.length - 1 : typed.length + 1
            const nextText = current.slice(0, Math.max(0, nextLength))
            setTyped(nextText)

            if (!isDeleting && nextText === current) {
                setIsDeleting(true)
            } else if (isDeleting && nextText === "") {
                setIsDeleting(false)
                setRoleIndex((i) => (i + 1) % roles.current.length)
            }
        }, speed)
        return () => clearTimeout(timeout)
    }, [typed, isDeleting, roleIndex])
    
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <FloatingCodeSnippets />
                <FloatingTechIcons />
                <motion.section 
                    className="relative min-h-screen flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <FloatingParticles />
                    
                    {/* Enhanced animated background with gradient overlay */}
                    <div className="absolute inset-0 -z-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 animate-pulse" />
                    </div>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
                    </div>
                    
                    {/* Main hero content */}
                    <div className="relative flex-1 flex items-center pb-8 pt-32 md:pt-44 w-full" onMouseMove={onMove}>
                        <div
                            className="pointer-events-none absolute inset-0 -z-10 transition-all duration-300"
                            style={{
                                background: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, hsl(var(--foreground) / 0.06), transparent 60%)`,
                            }}
                        />
                        
                        <motion.div 
                            className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 lg:flex-row lg:gap-10"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div 
                                className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="space-y-2">
                                    <motion.div 
                                        className="inline-block"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300">
                                            👋 Welcome to my portfolio
                                        </span>
                                    </motion.div>
                                    <motion.h1 
                                        className="max-w-2xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-balance text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent transition-all duration-500 hover:-translate-y-1"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    >
                                        Hi, I&apos;m Haz
                                    </motion.h1>
                                </div>
                                <motion.p 
                                    className="mt-3 text-base lg:text-lg text-muted-foreground"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    I&apos;m a
                                    {' '}
                                    <span className="relative font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {typed}
                                        <span className="ml-1 inline-block h-5 w-[2px] translate-y-[2px] bg-blue-500 animate-pulse"></span>
                                    </span>
                                </motion.p>
                                <motion.p 
                                    className="mt-4 max-w-2xl text-pretty text-base lg:text-lg leading-relaxed text-muted-foreground"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                >
                                    Web developer crafting fast, accessible web apps with
                                    {' '}
                                    <span className="relative whitespace-nowrap font-medium text-foreground after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">Next.js</span>,
                                    {' '}
                                    <span className="relative whitespace-nowrap font-medium text-foreground after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">TypeScript</span>,
                                    {' '}
                                    and
                                    {' '}
                                    <span className="relative whitespace-nowrap font-medium text-foreground after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full">Supabase</span>.
                                    {' '}
                                    <span className="font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">THE BEST VIBE CODER AVAILABLE IN THE MARKET :D</span>
                                </motion.p>

                                <motion.div 
                                    className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <Button
                                            asChild
                                            size="lg"
                                            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25">
                                            <Link href="#projects">
                                                <span className="relative z-10 text-white">View Projects</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="group border-2 border-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-base font-medium transition-all duration-300 hover:shadow-lg hover:border-blue-400 dark:hover:border-purple-400">
                                            <Link href="#contact">
                                                <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500">My Socials</span>
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                    
                    {/* Right Side - Visual Elements */}
                    <motion.div 
                        className="lg:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div 
                            className="relative"
                            whileHover={{ 
                                        scale: 1.05,
                                        rotate: [0, -1, 1, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
                                    <Image
                                        className="relative animate-float h-auto w-full max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] object-contain transition-all duration-500 hover:-translate-y-2 hover:scale-105 drop-shadow-2xl"
                                        src="/avatar.png"
                                        alt="Hazpol's Avatar"
                                        height={800}
                                        width={800}
                                        sizes="(min-width: 1024px) 33vw, 66vw"
                                        priority
                                    />
                                </motion.div>
                    </motion.div>
                </motion.div>
                </div>
                
                    {/* Tech Skills Section - Now part of the hero */}
                    <motion.div 
                        className="relative pb-16 pt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-blue-950/10" />
                        
                        <motion.div 
                            className="group relative m-auto max-w-6xl px-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.div 
                                className="relative py-6 w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.0 }}
                            >
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={160}>
                                        <motion.div 
                                            className="flex transition-transform hover:scale-[1.02]"
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            <Image className="mx-auto h-8 w-auto" height={32} width={260} alt="Next.js badge" src="https://img.shields.io/badge/Next.js-000000.png?style=for-the-badge&logo=next.js&logoColor=white" />
                                        </motion.div>
                                        <motion.div 
                                            className="flex transition-transform hover:scale-[1.02]"
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            <Image className="mx-auto h-8 w-auto" height={32} width={260} alt="Supabase badge" src="https://img.shields.io/badge/Supabase-3FCF8E.png?style=for-the-badge&logo=supabase&logoColor=white" />
                                        </motion.div>
                                        <motion.div 
                                            className="flex transition-transform hover:scale-[1.02]"
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            <Image className="mx-auto h-8 w-auto" height={32} width={260} alt="Python badge" src="https://img.shields.io/badge/Python-3776AB.png?style=for-the-badge&logo=python&logoColor=white" />
                                        </motion.div>
                                        <motion.div 
                                            className="flex transition-transform hover:scale-[1.02]"
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            <Image className="mx-auto h-8 w-auto" height={32} width={260} alt="Java badge" src="https://img.shields.io/badge/Java-ED8B00.png?style=for-the-badge&logo=openjdk&logoColor=white" />
                                        </motion.div>
                                        <motion.div 
                                            className="flex transition-transform hover:scale-[1.02]"
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            <Image className="mx-auto h-8 w-auto" height={32} width={260} alt="Tailwind CSS badge" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC.png?style=for-the-badge&logo=tailwindcss&logoColor=white" />
                                        </motion.div>
                                        <motion.div 
                                            className="flex transition-transform hover:scale-[1.02]"
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            <Image className="mx-auto h-8 w-auto" height={32} width={260} alt="TypeScript badge" src="https://img.shields.io/badge/TypeScript-3178C6.png?style=for-the-badge&logo=typescript&logoColor=white" />
                                        </motion.div>
                                        <motion.div 
                                            className="flex transition-transform hover:scale-[1.02]"
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            <Image className="mx-auto h-8 w-auto" height={32} width={260} alt="Git badge" src="https://img.shields.io/badge/Git-F05032.png?style=for-the-badge&logo=git&logoColor=white" />
                                        </motion.div>
                                        <motion.div 
                                            className="flex transition-transform hover:scale-[1.02]"
                                            whileHover={{ y: -2, scale: 1.05 }}
                                        >
                                            <Image className="mx-auto h-8 w-auto" height={32} width={260} alt="JavaScript badge" src="https://img.shields.io/badge/JavaScript-F7DF1E.png?style=for-the-badge&logo=javascript&logoColor=white" />
                                        </motion.div>
                                    </InfiniteSlider>

                                    <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                    <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                    <ProgressiveBlur
                                        className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                        direction="left"
                                        blurIntensity={1}
                                    />
                                    <ProgressiveBlur
                                        className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                        direction="right"
                                        blurIntensity={1}
                                    />
                                </motion.div>
                        </motion.div>
                    </motion.div>
            </motion.section>
        </main>
        </>
    )
}
