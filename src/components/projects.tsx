"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ExternalLink, 
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
            title: "Next.js Portfolio Website",
            description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
            image: "/placeholder-project1.jpg",
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            githubUrl: "https://github.com/hazkyan/web-portfolio",
            liveUrl: "https://your-portfolio.vercel.app",
            featured: true,
            date: "2024"
        },
        {
            title: "Java Design Patterns Library",
            description: "Comprehensive implementation of classic design patterns in Java. Educational resource demonstrating best practices and object-oriented programming principles.",
            image: "/placeholder-project2.jpg",
            tags: ["Java", "Design Patterns", "OOP", "Documentation"],
            githubUrl: "https://github.com/hazkyan/design-patterns",
            liveUrl: null,
            featured: true,
            date: "2024"
        },
        {
            title: "Python Data Analysis Tool",
            description: "Data visualization and analysis tool built with Python, Pandas, and NumPy. Features interactive charts and statistical analysis capabilities.",
            image: "/placeholder-project3.jpg",
            tags: ["Python", "Pandas", "NumPy", "Data Science"],
            githubUrl: "https://github.com/hazkyan/data-analysis",
            liveUrl: "https://data-tool.vercel.app",
            featured: false,
            date: "2024"
        },
        {
            title: "MySQL Database Manager",
            description: "Web-based database management interface with CRUD operations, query builder, and data visualization. Built with modern web technologies.",
            image: "/placeholder-project4.jpg",
            tags: ["MySQL", "PHP", "JavaScript", "Bootstrap"],
            githubUrl: "https://github.com/hazkyan/db-manager",
            liveUrl: null,
            featured: false,
            date: "2023"
        },
        {
            title: "React Component Library",
            description: "Reusable React components with TypeScript support, comprehensive documentation, and Storybook integration for modern web applications.",
            image: "/placeholder-project5.jpg",
            tags: ["React", "TypeScript", "Storybook", "CSS"],
            githubUrl: "https://github.com/hazkyan/react-components",
            liveUrl: "https://components.vercel.app",
            featured: false,
            date: "2023"
        },
        {
            title: "Machine Learning Playground",
            description: "Interactive platform for experimenting with machine learning algorithms using PyTorch and scikit-learn with Jupyter notebook integration.",
            image: "/placeholder-project6.jpg",
            tags: ["Python", "PyTorch", "scikit-learn", "Jupyter"],
            githubUrl: "https://github.com/hazkyan/ml-playground",
            liveUrl: null,
            featured: false,
            date: "2023"
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
                            💼 My Work
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="text-balance text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        A showcase of my development projects, from web applications to data science tools
                    </motion.p>
                </motion.div>

                {/* Featured Projects */}
                <motion.div 
                    className="grid gap-8 lg:grid-cols-2 mb-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {projects.filter(project => project.featured).map((project, index) => (
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
                                delay: 0.9 + (index * 0.1),
                                ease: "easeOut" 
                            }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <Card className="group border-0 shadow-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full overflow-hidden relative">
                                {/* Project image placeholder */}
                                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code className="size-16 text-blue-500/30" />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium">
                                            <Star className="size-3 fill-yellow-400 text-yellow-400" />
                                            Featured
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium">
                                            <Calendar className="size-3" />
                                            {project.date}
                                        </span>
                                    </div>
                                </div>

                                <CardHeader className="pb-4">
                                    <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                                        {project.title}
                                    </h3>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tag}
                                                className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800 rounded-md text-blue-700 dark:text-blue-300"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                transition={{ 
                                                    duration: 0.4, 
                                                    delay: 1.2 + (index * 0.1) + (tagIndex * 0.05) 
                                                }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <Button
                                            asChild
                                            size="sm"
                                            variant="outline"
                                            className="group border-gray-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="size-4 mr-2" />
                                                <span className="text-sm">Code</span>
                                            </Link>
                                        </Button>
                                        {project.liveUrl && (
                                            <Button
                                                asChild
                                                size="sm"
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <Globe className="size-4 mr-2" />
                                                    <span className="text-sm">Live Demo</span>
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Other Projects */}
                <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                >
                    <h3 className="text-2xl font-bold text-center mb-8">Other Projects</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.filter(project => !project.featured).map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 1.5 + (index * 0.1) 
                                }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            >
                                <Card className="group border-0 shadow-md bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <h4 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {project.title}
                                            </h4>
                                            <span className="text-xs text-muted-foreground">{project.date}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-2 pt-2">
                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="size-5 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300" />
                                            </Link>
                                            {project.liveUrl && (
                                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="size-5 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-300" />
                                                </Link>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to action */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                >
                    <motion.p 
                        className="text-lg text-muted-foreground mb-6"
                        whileHover={{ scale: 1.02 }}
                    >
                        Want to see more of my work?
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
                                    <span className="relative z-10 text-white">View GitHub</span>
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
