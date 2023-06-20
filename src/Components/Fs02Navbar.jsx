import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Fs02Navbar.scss';

function FsNavbar() {
    const [showShopDropdown, setShowShopDropdown] = useState(false);

    const handleShopMouseEnter = () => {
        setShowShopDropdown(true);
    };

    const handleShopMouseLeave = () => {
        setShowShopDropdown(false);
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top">
            <Container>
                <Navbar.Brand href="#">
                    <h2>FASHION</h2> <h2 style={{ color: "red" }}>CUBE</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div className="nav_home ml-auto">
                            <Nav.Link href="#">HOME</Nav.Link>
                            <NavDropdown
                                title="SHOP"
                                id="collasible-nav-dropdown"
                                show={showShopDropdown}
                                onMouseEnter={handleShopMouseEnter}
                                onMouseLeave={handleShopMouseLeave}
                            >
                                <NavDropdown.Item href="#">WOMEN'S</NavDropdown.Item>
                                <NavDropdown.Item href="#">MEN'S</NavDropdown.Item>
                                <NavDropdown.Item href="#">ACCESSORIES'S</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" className="ml-auto">CONTACT</Nav.Link>
                        </div>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" className="ml-auto">
                            <div className="nav_icons">
                                <div className="nav_icon_hover">
                                    <i className="fa-sharp fa-solid fa-magnifying-glass nav_icon"></i>
                                </div>
                                <div className="nav_icon_hover">
                                    <i className="fa-solid fa-user nav_icon"></i>
                                </div>
                                <div className="nav_icon_hover">
                                    <i className="fa-sharp fa-solid fa-bag-shopping nav_icon"></i>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default FsNavbar;


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Fs02Navbar.scss'

// function FsNavbar() {
//     return (
//         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top">
//             <Container>
//                 <Navbar.Brand href="#"><h2>FASHION</h2> <h2 style={{ color: "red" }}>CUBE</h2></Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto">
//                         <div className="nav_home ml-auto">
//                             <Nav.Link href="#">HOME</Nav.Link>
//                             <NavDropdown title="SHOP" id="collasible-nav-dropdown">
//                                 <NavDropdown.Item href="#">WOMEN'S</NavDropdown.Item>
//                                 <NavDropdown.Item href="#">MEN'S</NavDropdown.Item>
//                                 <NavDropdown.Item href="#">ACCESSORIES'S</NavDropdown.Item>
//                             </NavDropdown>
//                             <Nav.Link href="#" className="ml-auto">CONTACT</Nav.Link>
//                         </div>
//                     </Nav>
//                     <Nav>
//                         <Nav.Link href="#" className="ml-auto">
//                             <div className="nav_icons">
//                                 <div className="nav_icon_hover">
//                                     <i class="fa-sharp fa-solid fa-magnifying-glass nav_icon"></i>
//                                 </div>
//                                 <div className="nav_icon_hover">
//                                     <i class="fa-solid fa-user nav_icon"></i>
//                                 </div>
//                                 <div className="nav_icon_hover">
//                                     <i class="fa-sharp fa-solid fa-bag-shopping nav_icon"></i>
//                                 </div>
//                             </div>
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default FsNavbar;