import { MongoDBIcon } from "@/components/icons/icons"
import { Postgres } from "@/components/icons/Postgres"
export const PastConnectionCard = () => {

    interface CardData {
        title: string,
        timeCreated: string,
        status: string,
        type: string
    }

    const cardData: CardData[] = [
        {
            title: "product_data",
            timeCreated: "2min ago",
            status: "Connected",
            type: "MongoDB"
        },
        {
            title: "knust_student_data",
            timeCreated: "5min ago",
            status: "Disconnected",
            type: "Postgres"
        },
        {
            title: "lab_pal",
            timeCreated: "10min ago",
            status: "Disconnected",
            type: "Postgres"
        }
    ]

    return (
        <div className="connection-container flex flex-col gap-2">{
            cardData.map((element, index) => {
                return (
                    <div className="py-4 px-2 flex gap-2 items-center font-normal border shadow-none rounded-lg dark:bg-primary-foreground" key={index}>
                        {element.type === "MongoDB" ? <MongoDBIcon className="size-9" /> : <Postgres className="size-9" />}
                        <div className="grid gap-1 w-full">
                            <div className="flex flex-row justify-between">
                                <span className="text-base font-bold">{element.title}</span>
                                <span className="text-gray-600 dark:text-gray-300">{element.timeCreated}</span>
                            </div>
                            <div className="flex w-full pr-2 justify-between items-center text-xs font-normal">
                                <div className="flex gap-2 items-center">
                                    <div className={`size-2 rounded-full ${element.status.toLowerCase() === 'connected'? 'bg-green-500':'bg-red-500'}`}/>
                                    <span className="lowercase text-sm">{element.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}