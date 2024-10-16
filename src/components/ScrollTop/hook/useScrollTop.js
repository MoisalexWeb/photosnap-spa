import { useEffect } from "react"

export const useScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        const scrollBtn = document.getElementById("scrollTop-btn")
        
        const handleScroll = () => {
            if (window.scrollY >= 300) scrollBtn.classList.add("show-scroll-btn")
            else scrollBtn.classList.remove("show-scroll-btn")
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return {
        scrollToTop
    }
}
