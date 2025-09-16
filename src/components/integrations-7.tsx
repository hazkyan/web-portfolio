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
                            🛠️ Learning Progress
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
                        Proficiency levels in programming languages and technologies gained through coursework and projects
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
                            className={`relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group ${
                                activeCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60'
                            }`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Gradient background for active state */}
                            {activeCategory === category.id && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    layoutId="activeTab"
                                />
                            )}
                            
                            {/* Content */}
                            <div className="relative z-10 flex items-center gap-3">
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {category.icon}
                                </motion.div>
                                {category.title}
                            </div>
                            
                            {/* Subtle glow effect */}
                            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                                activeCategory === category.id 
                                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl opacity-100' 
                                    : 'opacity-0'
                            }`} />
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Progress Bars */}
                <motion.div 
                    className="bg-gradient-to-br from-white/80 via-white/90 to-white/80 dark:from-gray-900/80 dark:via-gray-900/90 dark:to-gray-900/80 backdrop-blur-lg rounded-3xl border border-gray-200/60 dark:border-gray-700/60 p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    whileHover={{ y: -5 }}
                >
                    <motion.h3 
                        className="text-center text-xl font-bold text-gray-800 dark:text-gray-200 mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        {skillCategories.find(cat => cat.id === activeCategory)?.title} Skills
                    </motion.h3>
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
    const getGradientColor = (level: number) => {
        if (level >= 90) return "from-emerald-500 to-teal-500"
        if (level >= 80) return "from-blue-500 to-cyan-500"
        if (level >= 70) return "from-purple-500 to-violet-500"
        return "from-orange-500 to-yellow-500"
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
            className="group p-4 rounded-xl bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/40 hover:border-gray-300/60 dark:hover:border-gray-600/60 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -3, scale: 1.02 }}
        >
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-base text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                        backgroundImage: skill.level >= 90 ? 'linear-gradient(135deg, #10b981, #14b8a6)' :
                                         skill.level >= 80 ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' :
                                         skill.level >= 70 ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' :
                                         'linear-gradient(135deg, #f59e0b, #eab308)'
                    }}
                >
                    {skill.name}
                </h3>
                <motion.span 
                    className="text-sm font-bold text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md bg-gray-100/80 dark:bg-gray-800/80"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 1.4 + (index * 0.1) }}
                >
                    {skill.level}%
                </motion.span>
            </div>
            
            <div className="relative mb-3">
                <div className="w-full bg-gray-200/80 dark:bg-gray-700/80 rounded-full h-3 overflow-hidden shadow-inner">
                    <motion.div
                        className={`bg-gradient-to-r ${getGradientColor(skill.level)} h-3 rounded-full shadow-sm relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                            duration: 1.5, 
                            delay: 1.4 + (index * 0.1),
                            ease: "easeOut" 
                        }}
                    >
                        {/* Animated shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{
                                duration: 2,
                                delay: 1.8 + (index * 0.1),
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            
            <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Proficiency
                </p>
                <motion.div 
                    className="flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 1.6 + (index * 0.1) }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                                i < Math.floor(skill.level / 20) 
                                    ? `bg-gradient-to-r ${getGradientColor(skill.level)}`
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ 
                                duration: 0.2, 
                                delay: 1.7 + (index * 0.1) + (i * 0.05) 
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}


