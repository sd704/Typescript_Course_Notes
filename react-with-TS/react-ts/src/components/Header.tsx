// ReactNode is any jsx thats returnable by a react component
import { type ReactNode } from "react"


type HeaderProp = {
    image: {
        src: string,
        alt: string
    },
    children?: ReactNode
    // We have made children optional
}

const Header = ({ image, children }: HeaderProp) => {
    return (
        <header>
            <img {...image} />
            {/* Here we are spreading the image object which has src and alt, which are required in a img tag */}

            {children}
        </header>
    )
}

export default Header