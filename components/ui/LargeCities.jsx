import defaultStates from "@/app/utils/defaultStates";


export default function LargeCities() {
    return (
        <div className={"state flex flex-col gap-3 flex-1"}>
            <h2 className={"flex gap-2 items-center font-medium"}>
                Top Large Cities
            </h2>
            <div className={"flex flex-col gap-4"}>
                {defaultStates.map((state, index) => {
                    return (
                        <div key={index} className={"border rounded-lg cursor-pointer  shadow-sm dark:shadow-none "}>
                            <p className={"px-6 py-4"}>{state.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}