import { Button, ButtonGroup, Card, Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function CalendarFlipperTemplate( props ) {

    // Stolen shamelessly from 
    // https://stackoverflow.com/questions/13203518/javascript-date-suffix-formatting
    function ordinal( number ) {
        var d = number % 10
        let decider = ( number % 100 / 10 )
        
        return ( ~~ decider === 1 ) ? 'th' :
                ( d === 1 ) ? 'st' :
                ( d === 2 ) ? 'nd' :
                ( d === 3 ) ? 'rd' : 'th';
    }

    let d = new Date()
    let currentDayOfYear = d.getDate()
    let formattedDayOfYearString = currentDayOfYear + ordinal( currentDayOfYear )

    // hey chris. You here. Maybe create a custom list component that will allow
    // the 

    return (
        <Container fluid>
            <Row>
                <Col xs={ 4 }>
                    <Card>
                        <CardHeader>
                            Controls
                        </CardHeader>
                        <Card.Body>
                            <p>Schedule task:</p>
                            <ButtonGroup vertical style={{ width: '100%'}}>
                                <Button>Daily</Button>
                                <Button>Every Other Day</Button>
                                <Button>Once a week</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card body className="border bg-success" >
                        <h4 className="text-center text-light">Today is the</h4>
                        <h2 className="text-center text-light">{ formattedDayOfYearString }</h2>
                        <p></p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

