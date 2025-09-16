import { MenuItem } from '@/types'

export const MENU_ITEMS: MenuItem[] = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tech Stack', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export const NAVIGATION_LINKS = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Technologies', href: '#technologies' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
]

export const HEADER_HEIGHT = 80

export const ANIMATION_DURATIONS = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    hover: 0.2,
} as const

export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const