import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export default function KTSidebar( props ) {
    
    let defaultSidebarSize = 250

    return (
        <div 
            style={{ width: defaultSidebarSize }}
        >
            <Nav
                className="flex-column"
                variant="pills"
            >
                <Nav.Item>
                    <NavLink
                        to="/"
                        className={ "nav-link mb-1" }
                    >
                        Overview
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/widgets"
                        className={ "nav-link mb-1" }
                    >
                        Widgets
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/settings"
                        className={ "nav-link mb-1" }
                    >
                        Settings
                    </NavLink>
                </Nav.Item>

            </Nav>
        </div>
    )
}