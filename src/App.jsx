import { Container, Row, Col } from "react-bootstrap"
import KTSidebar from "./layout/KTSidebar"
import { Outlet } from "react-router"
import KTHeader from "./layout/KTHeader"

function App() {

    // The app consists of three areas:
    // A header
    // A sidebar
    // and the main content area.
    // This will sort of be the "admin" dashboard,
    // where you can set up the components to be used.
    //
    // The app can also serve up standalone items
    // if you navigate to a page. Say, app/full_screen/<custom_name>:
    // it'll show a sticky note page that can be "written" on, or
    // like a calendar-esque component where you "tear" away pages and
    // on certain days do something.

    return (
        <Container 
            className="p-2" 
            style={{ maxHeight: '100vh', minHeight: "100vh" }}
        >
            <Row>
                <div style={{ display: "flex" }}>
                    <KTSidebar />
                    <Container>
                        <Row>
                            <Col> 
                                <KTHeader />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{ overflowY: "auto" }}>
                                    <Outlet />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Row>
        </Container>
    )
}

export default App
