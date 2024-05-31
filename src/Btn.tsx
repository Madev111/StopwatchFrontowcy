type Props = {
    body: string,
    handleClick?: ()=> void | undefined,
}
export const Btn = ({body, handleClick} : Props)=> {
    return <button onClick={handleClick}>{body}</button>
}