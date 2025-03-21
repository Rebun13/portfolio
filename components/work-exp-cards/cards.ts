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
    // image_dark: "https://www.aimen.es/assets/img/logo-aimen-white-en.png",
    image_dark: "https://www.aimen.es/assets/img/logo-aimen-en.png",
    image_light: "https://www.aimen.es/assets/img/logo-aimen-en.png",
}

export const kaseyaCard: CardProp = {
    title: "KASEYA",
    subtitle: [
        "## `Full Stack Developer`",
        "### 4 months | Ireland",
    ].join("\n"),
    description: [
        "- Web development with React JS, PHP and MySQL."
    ].join("\n"),
    image_dark: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kaseya_SVG_Logo.svg",
    image_light: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kaseya_SVG_Logo.svg"
}

export const ctagCard: CardProp = {
    title: "CTAG",
    subtitle: [
        "## `Backend Cloud Developer`",
        "### 1 year 4 months | Spain",
    ].join("\n"),
    description: [
        "- Design and development of REST APIs and libraries with Python."
    ].join("\n"),
    image_dark: "https://aspromec.org/wp-content/uploads/2020/10/CTAG.jpg",
    image_light: "https://aspromec.org/wp-content/uploads/2020/10/CTAG.jpg"
}