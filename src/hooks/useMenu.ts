import { RefObject, useEffect, useRef, useState } from "react"

type Menu = [
    boolean,
    () => void,
    RefObject<HTMLDivElement>
]

export default function useMenu(): Menu {
    const headerRef = useRef<HTMLDivElement>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleScroll = () => {
        if (headerRef.current) {
            if (window.scrollY > 200) {
                if (headerRef.current.className.includes("Header_secondary")) {
                    headerRef.current.style.backgroundColor = "#ECFBFF";
                } else {
                    headerRef.current.style.backgroundColor = "#062949";
                }
            } else {
                headerRef.current.style.backgroundColor = "transparent";
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return [isMenuOpen, toogleMenu, headerRef]
}