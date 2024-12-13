import { Logo } from "@/components/Logo";

export function Footer({ title = "" }) {
    return (
        <footer>
            <Logo />
            <code>{title}</code>
        </footer>
    );
}
