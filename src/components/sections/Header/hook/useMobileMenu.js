import { useState, useEffect } from "react"

export const useMobileMenu = () => {
    const  [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mobileCloseMenu =  () => setIsMobileMenuOpen(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMobileMenuOpen) mobileCloseMenu()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return {
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        mobileCloseMenu
    }
}
