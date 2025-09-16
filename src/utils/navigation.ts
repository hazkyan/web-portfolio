import { HEADER_HEIGHT } from '@/constants'

export const scrollToSection = (href: string, callback?: () => void) => {
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
        if (callback) callback()
        
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        
        targetElement.style.transform = 'scale(1.005)'
        targetElement.style.transition = 'transform 0.3s ease-out'
        
        setTimeout(() => {
            targetElement.style.transform = 'scale(1)'
            setTimeout(() => {
                targetElement.style.transition = ''
            }, 300)
        }, 100)
    }
}

export const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${15 + i * 15}%`,
        top: `${20 + (i % 2) * 40}%`,
        delay: i * 0.5,
        duration: 4 + i * 0.5,
    }))
}

export const cn = (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(' ')
}