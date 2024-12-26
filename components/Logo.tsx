import Image from 'next/image'
import logo from "@/public/Logo.png"

export function Logo() {
    return (
        <Image
            src={logo}
            width={40}
            height={40}
            alt="Logo"
        />
    );
}
