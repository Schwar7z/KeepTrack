import { useState } from "react"
import { Button, ButtonGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import CalendarFlipperTemplate from "./widgetTemplates/CalendarFlipperTemplate"

export default function WidgetCreator( props ) {

    let [ widgetType, setWidgetType ] = useState( 0 )
    let [ widgetSelection, setWidgetSelection ] = useState( 0 )

    return (
        <Container fluid>
            <Row>
                <Col xs={ 3 }>
                    <ButtonGroup style={{ width: "100%" }}>
                        <Button 
                            variant={ widgetType === 0 ? "primary" : "light" } 
                            onClick={ () => setWidgetType( 0 ) }
                            className="border"
                        >
                            Static
                        </Button>
                        <Button 
                            variant={ widgetType === 1 ? "primary" : "light" } 
                            onClick={ () => setWidgetType( 1 ) }
                            className="border"
                        >
                            Interactive
                        </Button>
                    </ButtonGroup>
                    <ListGroup>
                        { widgetType === 0 ?
                            <>
                                <StyledListGroupItem 
                                    active={ widgetSelection === "clock" } 
                                    onClick={ () => setWidgetSelection( "clock" ) } 
                                    label={ "Clock" }
                                />
                                <StyledListGroupItem 
                                    active={ widgetSelection === "calendar_viewer" } 
                                    onClick={ () => setWidgetSelection( "calendar_viewer" ) } 
                                    label={ "Calendar Viewer" } 
                                />
                            </>
                        :
                            <>
                                <StyledListGroupItem 
                                    active={ widgetSelection === "calendar_flipper" } 
                                    onClick={ () => setWidgetSelection( "calendar_flipper" ) } 
                                    label={ "Calendar Flipper" } 
                                />
                                <StyledListGroupItem 
                                    active={ widgetSelection === "daily_task" } 
                                    onClick={ () => setWidgetSelection( "daily_task" ) } 
                                    label={ "Daily Task Checker" } 
                                />
                                <StyledListGroupItem 
                                    active={ widgetSelection === "to_do" } 
                                    onClick={ () => setWidgetSelection( "to_do" ) } 
                                    label={ "To Do" } 
                                />
                                <StyledListGroupItem 
                                    active={ widgetSelection === "timer" } 
                                    onClick={ () => setWidgetSelection( "timer" ) } 
                                    label={ "Timer" } 
                                />
                            </>
                        }
                    </ListGroup>
                </Col>
                <Col>
                    <div>
                        <WidgetLookupElement widgetId={ widgetSelection } />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

function StyledListGroupItem( props ) {

    return (
        <ListGroupItem action active={ props.active } onClick={ props.onClick }>{ props.label }</ListGroupItem>
    )
}

function WidgetLookupElement({ widgetId }) {
    switch( widgetId ) {
        case "calendar_flipper": return <CalendarFlipperTemplate />
        default: return <p>I don't exist yet :^)</p>
    }
}