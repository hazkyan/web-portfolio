"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Github, 
  Calendar,
  Code,
  Globe,
  Star
} from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
    
    const projects = [
        {
            title: "Mini Compiler in Java",
            description: "Final project for Compiler Construction course, implementing a complete compiler pipeline including lexical analyzer, recursive descent parser, semantic analyzer, and code generator. Gained hands-on experience with formal language theory and compiler design principles taught in class.",
            image: "/placeholder-project1.jpg",
            tags: ["Java", "Compiler Design", "Lexical Analysis", "Parser", "Code Generation"],
            githubUrl: "https://github.com/hazkyan/miniCompilerTpl",
            liveUrl: null,
            featured: true,
            date: "2024"
        },
        {
            title: "Student Attendance Tracker",
            description: "Group project for Software Engineering course, developing a full-stack web application with user authentication and database integration. Applied software development lifecycle methodologies, version control practices, and collaborative coding techniques learned throughout the program.",
            image: "/placeholder-project2.jpg",
            tags: ["Full-Stack", "Web Development", "Database", "Authentication", "Analytics"],
            githubUrl: "https://github.com/DarylTManampan/se2-project",
            liveUrl: null,
            featured: true,
            date: "2024"
        }
    ]

    return (
        <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden" id="projects">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10" />
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

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Header section */}
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
                            🎓 Academic Projects
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="text-balance text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        My Projects
                    </motion.h2>
                    <motion.p 
                        className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Course projects and personal learning endeavors in computer science fundamentals
                    </motion.p>
                </motion.div>

                {/* Featured Projects */}
                <motion.div 
                    className="grid gap-8 lg:grid-cols-2 mb-12"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={isInView ? { 
                                opacity: 1, 
                                y: 0, 
                                scale: 1 
                            } : { 
                                opacity: 0, 
                                y: 30, 
                                scale: 0.95 
                            }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.9 + (index * 0.2),
                                ease: "easeOut" 
                            }}
                            whileHover={{ 
                                y: -12,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <Card className="group border-0 shadow-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full overflow-hidden relative">
                                {/* Enhanced glassmorphism overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/30 to-purple-50/20 dark:from-gray-800/20 dark:via-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Project image placeholder with enhanced gradients */}
                                <div className={`relative h-52 ${index === 0 
                                    ? 'bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 dark:from-orange-900/30 dark:via-yellow-900/20 dark:to-red-900/30' 
                                    : 'bg-gradient-to-br from-green-100 via-blue-50 to-cyan-100 dark:from-green-900/30 dark:via-blue-900/20 dark:to-cyan-900/30'
                                }`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code className="size-20 text-opacity-40" style={{
                                            color: index === 0 ? '#f59e0b' : '#3b82f6'
                                        }} />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg">
                                            <Star className="size-4 fill-yellow-400 text-yellow-400" />
                                            Featured
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full text-sm font-medium shadow-lg">
                                            <Calendar className="size-4" />
                                            {project.date}
                                        </span>
                                    </div>
                                    
                                    {/* Floating accent elements */}
                                    <div className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse" />
                                    <div className="absolute bottom-8 right-12 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}} />
                                </div>

                                <CardHeader className="pb-4 relative z-10">
                                    <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
                                        {project.title}
                                    </h3>
                                </CardHeader>

                                <CardContent className="space-y-6 relative z-10">
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tag}
                                                className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-200/60 dark:border-blue-800/60 rounded-lg text-blue-700 dark:text-blue-300 backdrop-blur-sm hover:from-blue-500/25 hover:to-purple-500/25 transition-all duration-300"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                transition={{ 
                                                    duration: 0.4, 
                                                    delay: 1.2 + (index * 0.2) + (tagIndex * 0.1) 
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="group border-2 border-gray-300/60 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="size-5 mr-2 group-hover:text-blue-600 transition-colors duration-300" />
                                                <span className="text-base font-medium">View Code</span>
                                            </Link>
                                        </Button>
                                        {project.liveUrl && (
                                            <Button
                                                asChild
                                                size="lg"
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
                                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <Globe className="size-5 mr-2" />
                                                    <span className="text-base font-medium">Live Demo</span>
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to action */}
                <motion.div 
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    <motion.p 
                        className="text-lg text-muted-foreground mb-6"
                        whileHover={{ scale: 1.02 }}
                    >
                        Want to see more of my academic work and coding journey?
                    </motion.p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25">
                                <Link href="https://github.com/hazkyan" target="_blank" rel="noopener noreferrer">
                                    <Github className="size-4 mr-2" />
                                    <span className="relative z-10 text-white">View All Repositories</span>
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
                                <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500">Get In Touch</span>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
