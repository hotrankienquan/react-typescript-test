
type HeaderProps = {title: string}
export default function Header({title}: HeaderProps){
    return (
        <>
        <h1>this is header</h1>
        <p>{title}</p>
        </>
    )
}