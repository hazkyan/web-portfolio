"use client"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Mail, 
  Github, 
  Linkedin, 
  MessageSquare,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

    const contactMethods = [
        {
            icon: <Mail className="size-8" />,
            title: "Email",
            description: "Get in touch via email",
            value: "hazpoldev@gmail.com",
            href: "mailto:hazpoldev@gmail.com",
            gradient: "from-red-500 to-orange-500",
            color: "text-red-600 dark:text-red-400"
        },
        {
            icon: <Github className="size-8" />,
            title: "GitHub",
            description: "Check out my repositories",
            value: "@hazkyan",
            href: "https://github.com/hazkyan",
            gradient: "from-gray-600 to-gray-800",
            color: "text-gray-600 dark:text-gray-400"
        },
        {
            icon: <Linkedin className="size-8" />,
            title: "LinkedIn",
            description: "Let's connect professionally",
            value: "Hazpol Kyan",
            href: "https://www.linkedin.com/in/hazpoldev/",
            gradient: "from-blue-500 to-blue-700",
            color: "text-blue-600 dark:text-blue-400"
        },
        {
            icon: <MessageSquare className="size-8" />,
            title: "Telegram",
            description: "Quick messaging",
            value: "@hazhogen",
            href: "https://t.me/hazhogen",
            gradient: "from-cyan-400 to-blue-500",
            color: "text-cyan-600 dark:text-cyan-400"
        }
    ]

    return (
        <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden" id="contact">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 2) * 40}%`,
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
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="mx-auto max-w-6xl px-6 relative z-10">
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
                            💬 Get In Touch
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="text-balance text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Let&apos;s Connect
                    </motion.h2>
                    <motion.p 
                        className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Ready to collaborate or have questions? Here&apos;s how you can reach me.
                    </motion.p>
                </motion.div>

                {/* Contact Methods Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={method.href} target="_blank" rel="noopener noreferrer">
                                <Card className="group border-0 shadow-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:shadow-2xl hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all duration-500 cursor-pointer h-full">
                                    <CardContent className="p-8 text-center space-y-4">
                                        <motion.div
                                            className={`mx-auto w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className="text-white">
                                                {method.icon}
                                            </div>
                                        </motion.div>
                                        
                                        <div className="space-y-2">
                                            <h3 className={`text-xl font-bold ${method.color} group-hover:scale-105 transition-transform duration-300`}>
                                                {method.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {method.description}
                                            </p>
                                            <p className="text-sm font-medium text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                {method.value}
                                            </p>
                                        </div>

                                        <motion.div
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ y: 10 }}
                                            whileHover={{ y: 0 }}
                                        >
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                className="text-xs text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                Click to connect →
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quick Response Note */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                >
                    <Card className="max-w-md mx-auto shadow-xl bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/30 dark:to-purple-950/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                        <CardContent className="p-6 text-center">
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                                className="text-4xl mb-3"
                            >
                                ⚡
                            </motion.div>
                            <h4 className="font-semibold text-lg mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Quick Response
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                I typically respond within <span className="font-semibold text-foreground">24 hours</span>
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
