import { FileCode as CodeIcon } from "@phosphor-icons/react"

export const PastQueryCard = () => {
    interface PastQueryCard {
        title: string,
        timeCreated: string,
        type: string
    }

    const cardData: PastQueryCard[] = [
        {
            title: "demo",
            timeCreated: "2min ago",
            type: "MongoDB"
        },
        {
            title: "get_name",
            timeCreated: "5min ago",
            type: "Postgres"
        },
        {
            title: "cwa",
            timeCreated: "10min ago",
            type: "Postgres"
        }
    ]
    return (
        <div className="flex flex-col gap-4">
            {
                cardData.map((element, index) => {
                    return (
                        <div className="py-4 px-2 flex gap-2 items-center font-normal border shadow-none rounded-lg dark:bg-custom-gradient" key={index}>
                            <div className="grid gap-1 w-full">
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row items-center justify-center gap-2">
                                        <CodeIcon className="size-6 font-black text-gray-300"></CodeIcon>
                                        <span className="text-base font-bold">{`${element.title}.${element.type.toLowerCase()=== 'postgres'? 'sql':'js'}`}</span>
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-300">{element.timeCreated}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>



    )
}