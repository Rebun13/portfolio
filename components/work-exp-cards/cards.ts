export interface CardProp {
    title: string
    subtitle: string
    description: string
    image_light: string
    image_dark: string
}

export const aimenCard: CardProp = {
    title: "AIMEN",
    subtitle: [
        "## `Research Software Engineer`",
        "### Current job | Spain"
    ].join("\n"),
    description: [
        "- Deployment with Docker of micro-services developed in Python and/or React.",
        "- Design and development of micro-services.",
        "- Full-stack web development.",
    ].join("\n"),
    image_dark: "https://www.aimen.es/assets/img/logo-aimen-white-en.png",
    image_light: "https://www.aimen.es/assets/img/logo-aimen-en.png",
}

export const kaseyaCard: CardProp = {
    title: "KASEYA",
    subtitle: [
        "## `Full Stack Developer`",
        "### 4 months | Ireland",
    ].join("\n"),
    description: [
        "* Web development with React JS, PHP and MySQL."
    ].join("\n"),
    image_dark: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kaseya_SVG_Logo.svg",
    image_light: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kaseya_SVG_Logo.svg"
}