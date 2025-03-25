export interface CardProp {
    title: string
    subtitle: string
    description: string
    image_light: string
    image_dark: string
    company?: string
}

export const aimenCard: CardProp = {
    title: "Research Software Engineer",
    subtitle: [
        "Current job | Spain"
    ].join("\n"),
    description: [
        "- Deployment with Docker of micro-services developed in Python and/or React.",
        "- Design and development of micro-services.",
        "- Full-stack web development.",
    ].join("\n"),
    // image_dark: "https://www.aimen.es/assets/img/logo-aimen-white-en.png",
    image_dark: "./aimen_logo.png",
    image_light: "./aimen_logo.png",
    company: "AIMEN"
}

export const kaseyaCard: CardProp = {
    title: "Full Stack Developer",
    subtitle: [
        "4 months | Ireland",
    ].join("\n"),
    description: [
        "- Web development with React JS, PHP and MySQL."
    ].join("\n"),
    image_dark: "./kaseya_logo.png",
    image_light: "./kaseya_logo.png",
    company: "Kaseya"
}

export const ctagCard: CardProp = {
    title: "Backend Cloud Developer",
    subtitle: [
        "1 year 4 months | Spain",
    ].join("\n"),
    description: [
        "- Design and development of REST APIs and libraries with Python."
    ].join("\n"),
    image_dark: "./ctag_logo.jpg",
    image_light: "./ctag_logo.jpg",
    company: "CTAG"
}