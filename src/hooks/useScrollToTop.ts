import { useEffect, useState } from "react";

type UseScrllToTop = [
    boolean,
    () => void
]

export default function useScrllToTop(): UseScrllToTop {
    const [isScrollVisible, setIsScrollVisible] = useState(false);
    const isBrowser = () => typeof window !== "undefined";

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrollVisible(true);
        } else {
            setIsScrollVisible(false);
        }
    };

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return [isScrollVisible, scrollToTop]
}