import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

export default function Section({title, children}: SectionProps){
    return(
        <>
            <h2>this is title: {title}</h2>
            <p>this is children : {children}</p>
        </>
    )
}