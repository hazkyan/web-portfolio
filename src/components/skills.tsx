"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import { 
  Code2, 
  Database, 
  Palette, 
  Rocket, 
  Brain, 
  Server,
  GitBranch,
  ExternalLink
} from 'lucide-react'

export default function Skills() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
    
    const skillCategories = [
        {
            icon: <Code2 className="size-6" />,
            title: "Frontend Development",
            description: "Building beautiful, responsive user interfaces with modern frameworks and libraries.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "PHP", "JavaScript"],
            gradient: "from-blue-500 to-cyan-500",
            certificates: [
                {
                    title: "JavaScript Essentials 2",
                    issuer: "OpenEDG JS Institute",
                    date: "Sep 2025",
                    link: "https://drive.google.com/file/d/16tX3LgEuS19Ym2JoZwEPqX1ND__bhZ5c/view?usp=drive_link"
                },
                {
                    title: "JavaScript Essentials 1",
                    issuer: "OpenEDG JS Institute", 
                    date: "Aug 2025",
                    link: "https://drive.google.com/file/d/1lNqN7Mb9i6626ApD9cVgeUOXztqYwRDG/view?usp=drive_link"
                }
            ]
        },
        {
            icon: <Server className="size-6" />,
            title: "Backend Development", 
            description: "Creating robust server-side applications and APIs for scalable web solutions.",
            skills: ["Node.js", "Python", "Authentication"],
            gradient: "from-green-500 to-emerald-500",
            certificates: []
        },
        {
            icon: <Database className="size-6" />,
            title: "Database & Cloud",
            description: "Managing data efficiently with modern databases and cloud infrastructure.",
            skills: ["Supabase", "PostgreSQL", "Vercel"],
            gradient: "from-purple-500 to-violet-500",
            certificates: [
                {
                    title: "Oracle Cloud Data Platform 2025",
                    issuer: "Oracle",
                    date: "Sep 2025",
                    link: "https://drive.google.com/file/d/1ZvS9MHCezclBPQQft9ifzBVoEsT4MO5E/view?usp=drive_link"
                },
                {
                    title: "Introduction to Cloud",
                    issuer: "IBM Developers Skills Network",
                    date: "Aug 2025",
                    link: "https://drive.google.com/file/d/1WZLa3GXCoYHovILAjK8EfhD5xoefczW1/view?usp=drive_link"
                },
                {
                    title: "SQL and Relational Database 101",
                    issuer: "IBM Developer Skills Network",
                    date: "Aug 2025",
                    link: "https://drive.google.com/file/d/15Kvb2MlTnQRWGbvr7ckvWiJbppVxrCuw/view?usp=drive_link"
                },
                {
                    title: "Oracle Cloud Infrastructure 2023",
                    issuer: "Oracle",
                    date: "May 2024",
                    link: "https://drive.google.com/file/d/1iY4sbm9i4u0StHPZLz0oZcFbrlgkxNlC/view?usp=drive_link"
                },
                {
                    title: "Oracle Cloud Data Management 2023",
                    issuer: "Oracle",
                    date: "May 2024",
                    link: "https://drive.google.com/file/d/1r99mXjdiX54n36JkexSBVC7owUV4-WNc/view?usp=drive_link"
                }
            ]
        },
        {
            icon: <Palette className="size-6" />,
            title: "Design & UX",
            description: "Creating intuitive user experiences with modern design principles.",
            skills: ["Figma", "UI/UX Design", "Responsive Design", "Framer Motion"],
            gradient: "from-pink-500 to-rose-500",
            certificates: []
        },
        {
            icon: <GitBranch className="size-6" />,
            title: "Development Tools & IoT",
            description: "Leveraging modern tools and IoT technologies for efficient development.",
            skills: ["Git", "GitHub", "VS Code", "NPM", "Webpack"],
            gradient: "from-orange-500 to-yellow-500",
            certificates: [
                {
                    title: "Introduction to IoT",
                    issuer: "Cisco Networking Academy",
                    date: "Aug 2025",
                    link: "https://drive.google.com/file/d/1EwT7rYCoLP6NK0DmRfQ-lu7WeOEaqLO0/view?usp=drive_link"
                }
            ]
        },
        {
            icon: <Brain className="size-6" />,
            title: "Data Science & AI",
            description: "Analyzing data and building intelligent solutions with modern technologies.",
            skills: ["Python", "Data Analysis", "Machine Learning", "Pandas", "NumPy", "Jupyter"],
            gradient: "from-indigo-500 to-blue-500",
            certificates: [
                {
                    title: "Data Analysis with Python",
                    issuer: "IBM Developer Skills Network",
                    date: "Aug 2025",
                    link: "https://drive.google.com/file/d/1551PPIP0rRmtHNMjjfH3wAeDEV3JTGa6/view?usp=drive_link"
                },
                {
                    title: "Data Science Essentials with Python",
                    issuer: "Cisco Networking Academy",
                    date: "Aug 2025", 
                    link: "https://drive.google.com/file/d/1A_LVMwKnakbN3y8779aZtoiaYTD5i0Au/view?usp=drive_link"
                },
                {
                    title: "Python 101 for Data Science",
                    issuer: "IBM Developer Skills Network",
                    date: "Aug 2025",
                    link: "https://drive.google.com/file/d/1nCvcSpnbB-9pb-PRX_2FLIRKLZtwhdb2/view?usp=drive_link"
                },
                {
                    title: "Introduction to Data Science",
                    issuer: "Cisco Networking Academy",
                    date: "Aug 2025",
                    link: "https://drive.google.com/file/d/1coaQGyhPl_NcJ09Yuw_ngAAjPTlhVgbN/view?usp=drive_link"
                },
                {
                    title: "Oracle Cloud Infrastructure AI 2023",
                    issuer: "Oracle",
                    date: "May 2024",
                    link: "https://drive.google.com/file/d/1FR0A2qlM6-YxD9c34gcSy1qq7V6I6C87/view?usp=drive_link"
                }
            ]
        }
    ]

    return (
        <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden" id="skills">
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

            <div className="mx-auto max-w-7xl px-6 relative z-10">
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
                            🚀 My Expertise
                        </span>
                    </motion.div>
                    <motion.h2 
                        className="text-balance text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Skills & Technologies
                    </motion.h2>
                    <motion.p 
                        className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Crafting digital experiences with cutting-edge technologies and creative problem-solving
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
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
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                                
                                <CardHeader className="pb-4 relative">
                                    <SkillCardDecorator gradient={category.gradient}>
                                        {category.icon}
                                    </SkillCardDecorator>

                                    <motion.h3 
                                        className="mt-6 text-xl font-bold text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)), hsl(var(--foreground)))`
                                        }}
                                        whileHover={{
                                            backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                                            '--tw-gradient-from': category.gradient.includes('blue') ? '#3b82f6' : 
                                                                 category.gradient.includes('green') ? '#10b981' :
                                                                 category.gradient.includes('purple') ? '#8b5cf6' :
                                                                 category.gradient.includes('pink') ? '#ec4899' :
                                                                 category.gradient.includes('orange') ? '#f59e0b' : '#6366f1',
                                            '--tw-gradient-to': category.gradient.includes('cyan') ? '#06b6d4' :
                                                               category.gradient.includes('emerald') ? '#059669' :
                                                               category.gradient.includes('violet') ? '#7c3aed' :
                                                               category.gradient.includes('rose') ? '#f43f5e' :
                                                               category.gradient.includes('yellow') ? '#eab308' : '#3b82f6'
                                        }}
                                    >
                                        {category.title}
                                    </motion.h3>
                                </CardHeader>

                                <CardContent className="relative">
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-center">
                                        {category.description}
                                    </p>
                                    
                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h5 className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                                            <Code2 className="size-3" />
                                            SKILLS
                                        </h5>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {category.skills.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skill}
                                                    className={`px-3 py-1.5 text-xs font-medium bg-gradient-to-r ${category.gradient} text-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-default`}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                    transition={{ 
                                                        duration: 0.4, 
                                                        delay: 1.2 + (index * 0.1) + (skillIndex * 0.05) 
                                                    }}
                                                    whileHover={{ 
                                                        scale: 1.05,
                                                        y: -2,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Certificates */}
                                    {category.certificates.length > 0 && (
                                        <div>
                                            <h5 className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                                                🏆
                                                CERTIFICATES ({category.certificates.length})
                                            </h5>
                                            <div className="space-y-2">
                                                {category.certificates.map((cert, certIndex) => (
                                                    <motion.a
                                                        key={cert.title}
                                                        href={cert.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block p-2 bg-white/30 dark:bg-gray-800/30 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                                        transition={{ 
                                                            duration: 0.3, 
                                                            delay: 1.4 + (index * 0.1) + (certIndex * 0.1) 
                                                        }}
                                                        whileHover={{ scale: 1.02 }}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                                    {cert.title}
                                                                </p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    {cert.issuer} • {cert.date}
                                                                </p>
                                                            </div>
                                                            <ExternalLink className="size-3 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 ml-2" />
                                                        </div>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to action */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.p 
                        className="text-lg text-muted-foreground mb-6"
                        whileHover={{ scale: 1.02 }}
                    >
                        Always learning and exploring new technologies to stay ahead of the curve
                    </motion.p>
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200 dark:border-blue-800"
                        animate={{ 
                            scale: [1, 1.02, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Rocket className="size-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            Ready for new challenges
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

const SkillCardDecorator = ({ children, gradient }: { children: ReactNode, gradient: string }) => (
    <div className="relative mx-auto size-28 duration-300 group-hover:scale-110">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 rounded-2xl" />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
        
        {/* Center icon container */}
        <div className="relative h-full flex items-center justify-center">
            <div className={`flex size-16 items-center justify-center border bg-white dark:bg-gray-900 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:${gradient} group-hover:text-white`}>
                {children}
            </div>
        </div>
        
        {/* Floating particles around the decorator */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${gradient} rounded-full`}
                    style={{
                        left: `${20 + i * 20}%`,
                        top: `${15 + i * 30}%`,
                    }}
                    animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    </div>
)
