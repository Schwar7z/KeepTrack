import { ListGroup, ListGroupItem } from "react-bootstrap"

export default function SelectorList( props ) {

    let [ selectedId, setSelectedId ] = useState( "" )

    return (
        <ListGroup>
            { props.list.map( listItem => (
                <StyledListGroupItem 
                    active={ selectedId === listItem.id } 
                    onClick={ () => setSelectedId( listItem.id ) } 
                    label={ listItem.label }
                    key={ listItem.id + "_selector" }
                />
            ))}
        </ListGroup>
    )
}

function StyledListGroupItem( props ) {
    return (
        <ListGroupItem action active={ props.active } onClick={ props.onClick } key={ props.key }>{ props.label }</ListGroupItem>
    )
}