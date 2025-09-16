"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from '@/components/header'
import { InfiniteSlider } from '@/components/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { motion, useInView } from 'framer-motion'

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
            {/* Desktop Code Panels - Hidden on Mobile */}
            <div className="absolute left-4 top-0 h-full w-72 pointer-events-none z-10 hidden xl:block">
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

            <div className="absolute right-4 top-0 h-full w-72 pointer-events-none z-10 hidden xl:block">
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

const FloatingTechIcons = () => {
    const techIcons = [
        { icon: '⚛️', name: 'React', left: '12%', top: '20%', delay: '0s', color: 'from-blue-400 to-blue-600' },
        { icon: '▲', name: 'Next.js', right: '8%', top: '15%', delay: '1s', color: 'from-gray-800 to-black' },
        { icon: 'TS', name: 'TypeScript', left: '6%', top: '45%', delay: '2s', color: 'from-blue-600 to-blue-800' },
        { icon: '🎨', name: 'Design', right: '10%', top: '40%', delay: '1.5s', color: 'from-purple-500 to-pink-600' },
        { icon: '⚡', name: 'Performance', left: '8%', top: '70%', delay: '2.5s', color: 'from-yellow-400 to-orange-500' },
        { icon: '🔧', name: 'Tools', right: '6%', top: '75%', delay: '3s', color: 'from-green-500 to-emerald-600' },
    ]

    return (
        <div className="xl:hidden fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Mobile Floating Tech Icons */}
            {techIcons.map((tech, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        left: tech.left,
                        right: tech.right,
                        top: tech.top,
                    }}
                    initial={{ opacity: 0, scale: 0.3, y: 50 }}
                    animate={{ 
                        opacity: [0.3, 0.7, 0.4], 
                        scale: [0.8, 1, 0.9], 
                        y: [0, -15, 0] 
                    }}
                    transition={{ 
                        duration: 4,
                        delay: parseFloat(tech.delay),
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl shadow-lg flex items-center justify-center text-white font-bold backdrop-blur-sm border border-white/10`}>
                        <span className="text-sm">{tech.icon}</span>
                    </div>
                </motion.div>
            ))}

            {/* Mobile Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/30 rounded-full"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-500/30 rounded-full"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4] 
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div 
                    className="absolute top-2/3 left-1/6 w-16 h-16 border border-green-500/30 rounded-full"
                    animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.6, 0.2] 
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>
        </div>
    )
}

export default function HeroSection() {
    const sectionRef = React.useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
    const [cursor, setCursor] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    const roles = React.useRef<string[]>(["Developer", "Designer", "Data Analyst"])
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
                <FloatingTechIcons />
                <motion.section 
                    ref={sectionRef}
                    className="relative min-h-screen flex flex-col"
                    id="about"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <FloatingParticles />
                    <FloatingCodeSnippets />
                    
                    <div className="absolute inset-0 -z-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 animate-pulse" />
                    </div>
                    
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
                    </div>
                    
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
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div 
                                className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="space-y-2">
                                    <motion.div 
                                        className="inline-block"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300">
                                            👋 Welcome to my portfolio
                                        </span>
                                    </motion.div>
                                    <motion.h1 
                                        className="max-w-2xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent transition-all duration-500 hover:-translate-y-1 leading-tight"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    >
                                        Hi, I&apos;m Haz
                                    </motion.h1>
                                </div>
                                
                                <motion.p 
                                    className="mt-4 max-w-2xl text-pretty text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground px-4 sm:px-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                                    <br></br>(also improving my data analysis skills)
                                </motion.p>

                                <motion.div 
                                    className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <Button
                                            size="lg"
                                            onClick={() => {
                                                const projectsElement = document.getElementById('projects')
                                                if (projectsElement) {
                                                    const headerHeight = 80
                                                    const elementPosition = projectsElement.getBoundingClientRect().top
                                                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight
                                                    
                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: 'smooth'
                                                    })
                                                }
                                            }}
                                            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25">
                                            <span className="relative z-10 text-white">View My Work</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </Button>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            onClick={() => {
                                                const contactElement = document.getElementById('contact')
                                                if (contactElement) {
                                                    const headerHeight = 80
                                                    const elementPosition = contactElement.getBoundingClientRect().top
                                                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight
                                                    
                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: 'smooth'
                                                    })
                                                }
                                            }}
                                            className="group border-2 border-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-base font-medium transition-all duration-300 hover:shadow-lg hover:border-blue-400 dark:hover:border-purple-400">
                                            <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500">Connect With Me</span>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                    
                    <motion.div 
                        className="lg:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
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
                
                    <motion.div 
                        className="relative pb-16 pt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-blue-950/10" />
                        
                        <motion.div 
                            className="group relative m-auto max-w-6xl px-6"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.div 
                                className="relative py-6 w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
