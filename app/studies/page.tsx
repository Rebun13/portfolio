import Timeline from "@/components/ui/containers/timeline/Timeline";
import { items } from "@/components/data/studies/data";

export default async function Studies() {
    return (
        <>
            <h1 className="title">Studies</h1>
            <Timeline items={items} />
        </>
    )
}