
export default function GeneralSection( props ) {
    
    return (
        <div className={ "border rounded p-2 " + props.className }>
            { props.children }
        </div>
    )
}