import { ReactNode } from 'react'

export interface Certificate {
    title: string
    issuer: string
    date: string
    link: string
}

export interface SkillCategory {
    icon: ReactNode
    title: string
    description: string
    skills: string[]
    gradient: string
}

export interface CertificateCategory {
    icon: ReactNode
    title: string
    description: string
    gradient: string
    certificates: Certificate[]
}

export interface ContactMethod {
    icon: ReactNode
    title: string
    description: string
    value: string
    href: string
    gradient: string
    color: string
}

export interface MenuItem {
    name: string
    href: string
}

export interface ProjectData {
    title: string
    description: string
    image?: string
    technologies: string[]
    demoUrl?: string
    githubUrl?: string
    featured: boolean
}