export interface CardProp {
    title: string
    subtitle: string
    description: string
    image: string
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
    image: "https://www.aimen.es/assets/img/logo-aimen-white-en.png"
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
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kaseya_SVG_Logo.svg"
}