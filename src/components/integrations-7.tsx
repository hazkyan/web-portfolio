"use client"
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Code2, Rocket, Target } from 'lucide-react'
import React, { useState, useRef } from 'react'

export default function IntegrationsSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
    const [activeCategory, setActiveCategory] = useState("programming")

    const skillCategories = [
        {
            id: "programming",
            icon: <Code2 className="size-5" />,
            title: "Programming",
            skills: [
                { name: "Java", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "Python", level: 85 },
                { name: "TypeScript", level: 75 },
                { name: "PHP", level: 70 },
                { name: "SQL", level: 85 }
            ]
        },
        {
            id: "frontend",
            icon: <Sparkles className="size-5" />,
            title: "Frontend",
            skills: [
                { name: "React.js", level: 90 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "Tailwind CSS", level: 85 },
                { name: "Bootstrap", level: 80 },
                { name: "JavaScript", level: 90 }
            ]
        },
        {
            id: "backend",
            icon: <Target className="size-5" />,
            title: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "MySQL", level: 90 },
                { name: "PHP", level: 70 },
                { name: "Java", level: 95 },
                { name: "Python", level: 85 },
                { name: "SQL", level: 85 }
            ]
        },
        {
            id: "tools",
            icon: <Rocket className="size-5" />,
            title: "Tools & Data Science",
            skills: [
                { name: "Git", level: 95 },
                { name: "Jupyter Notebook", level: 85 },
                { name: "NumPy", level: 80 },
                { name: "Pandas", level: 80 },
                { name: "PyTorch", level: 75 },
                { name: "Power BI", level: 70 }
            ]
        }
    ]

    const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || []

    return (
        <section 
            ref={sectionRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden py-16"
            id="technologies"
        >
            {/* Background decorations matching hero section */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40"
                        style={{
                            left: `${10 + i * 10}%`,
                            top: `${15 + (i % 3) * 25}%`,
                        }}
                        animate={{ 
                            y: [0, -30, 0],
                            x: [0, 15, 0, -15, 0],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>
            <div className="relative z-10 mx-auto max-w-5xl px-6">
                {/* Header section with hero-style typography */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="inline-block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300">
                            ⚡ Tech Stack
                        </span>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-balance text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Tools and Languages
                    </motion.h2>
                    
                    <motion.p 
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Technical expertise and proficiency across different domains of software development
                    </motion.p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                activeCategory === category.id
                                    ? 'bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 shadow-lg'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.icon}
                            {category.title}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Progress Bars */}
                <motion.div 
                    className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activeSkills.map((skill, index) => (
                            <SkillProgressBar 
                                key={`${activeCategory}-${skill.name}`}
                                skill={skill}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Call to action section with hero-style buttons */}
                <motion.div 
                    className="text-center mt-16 space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="size-6 text-blue-500" />
                        </motion.div>
                        <motion.p 
                            className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.02 }}
                        >
                            Passionate about innovation, committed to excellence
                        </motion.p>
                        <motion.div
                            animate={{ rotate: [0, -360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Code2 className="size-6 text-purple-500" />
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                                <Rocket className="size-4 mr-2" />
                                <span className="relative z-10 text-white">See My Projects</span>
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
                                <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500">Let&apos;s Connect</span>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

const SkillProgressBar = ({ skill, index, isInView }: { 
    skill: { name: string; level: number }, 
    index: number,
    isInView: boolean 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
            className="space-y-3"
        >
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                </h3>
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                    {skill.level}%
                </span>
            </div>
            
            <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                        className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                            duration: 1.5, 
                            delay: 1.4 + (index * 0.1),
                            ease: "easeOut" 
                        }}
                    />
                </div>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-500">
                Language
            </p>
        </motion.div>
    )
}


