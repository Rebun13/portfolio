import { Card } from "@/components/ui/containers/cards/card"

import { CardProp, aimenCard, kaseyaCard } from "@/components/work-exp-cards/cards"


export default async function WorkExperience() {
    const cards: CardProp[] = [aimenCard, kaseyaCard]
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            {cards.map((card: CardProp) =>
                <Card key={card.title} card={card} />
            )}
        </div>
    )
}