import { useState } from "react"

type Menu = [
    boolean,
    () => void,
]

export default function useMenu(): Menu {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = () => setIsMenuOpen(!isMenuOpen);

    return [isMenuOpen, toogleMenu]
}