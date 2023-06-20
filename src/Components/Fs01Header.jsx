import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Fs01Header.scss';

function FsHeader() {
    const [isUsdDropdownOpen, setUsdDropdownOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

    const handleUsdDropdownToggle = () => {
        setUsdDropdownOpen(!isUsdDropdownOpen);
    };

    const handleLanguageDropdownToggle = () => {
        setLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    const handleAccountDropdownToggle = () => {
        setAccountDropdownOpen(!isAccountDropdownOpen);
    };

    const handleDropdownClose = () => {
        setUsdDropdownOpen(false);
        setLanguageDropdownOpen(false);
        setAccountDropdownOpen(false);
    };

    return (
        <Navbar
            onMouseLeave={handleDropdownClose}
            collapseOnSelect
            expand="lg"
            className="navbar-dark bg-dark dropdown-zindex"
        >
            <Container>
                <Navbar.Brand href="#home">FREE SHIPPING ON ALL U.S ODERS OVER $50</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown
                            title="USD"
                            id="collasible-nav-dropdown"
                            show={isUsdDropdownOpen}
                            onMouseEnter={handleUsdDropdownToggle}
                            onMouseLeave={handleDropdownClose}
                        >
                            <NavDropdown.Item href="#">CAD</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">AUD</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">EUR</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">GBP</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="English"
                            id="collasible-nav-dropdown"
                            show={isLanguageDropdownOpen}
                            onMouseEnter={handleLanguageDropdownToggle}
                            onMouseLeave={handleDropdownClose}
                        >
                            <NavDropdown.Item href="#">French</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Italian</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">German</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="My Account"
                            id="collasible-nav-dropdown"
                            show={isAccountDropdownOpen}
                            onMouseEnter={handleAccountDropdownToggle}
                            onMouseLeave={handleDropdownClose}
                        >
                            <NavDropdown.Item href="#">
                                <i className="fa-solid fa-right-to-bracket"></i> Sign In
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                <i className="fa-solid fa-user-plus"></i> Register
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default FsHeader;



// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Fs01Header.scss';

// function FsHeader() {
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const handleDropdownToggle = () => {
//         setDropdownOpen(!isDropdownOpen);
//     };

//     const handleDropdownClose = () => {
//         setDropdownOpen(false);
//     };

//     return (
//         <Navbar
//             onMouseLeave={handleDropdownClose}
//             collapseOnSelect
//             expand="lg"
//             className="navbar-dark bg-dark dropdown-zindex"
//         >
//             <Container>
//                 <Navbar.Brand href="#home">FREE SHIPPING ON ALL U.S ODERS OVER $50</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ms-auto">
//                         <NavDropdown
//                             title="USD"
//                             id="collasible-nav-dropdown"
//                             show={isDropdownOpen}
//                             onMouseEnter={handleDropdownToggle}
//                         >
//                             <NavDropdown.Item href="#">CAD</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">AUD</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">EUR</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">GBP</NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown
//                             title="English"
//                             id="collasible-nav-dropdown"
//                             show={isDropdownOpen}
//                             onMouseEnter={handleDropdownToggle}
//                         >
//                             <NavDropdown.Item href="#">French</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">Italian</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">German</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown
//                             title="My Account"
//                             id="collasible-nav-dropdown"
//                             show={isDropdownOpen}
//                             onMouseEnter={handleDropdownToggle}
//                         >
//                             <NavDropdown.Item href="#">
//                                 <i className="fa-solid fa-right-to-bracket"></i> Sign In
//                             </NavDropdown.Item>
//                             <NavDropdown.Item href="#">
//                                 <i className="fa-solid fa-user-plus"></i> Register
//                             </NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default FsHeader;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Fs01Header.scss'

// function FsHeader() {
//     return (
//         <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark dropdown-zindex">
//             <Container>
//                 <Navbar.Brand href="#home">FREE SHIPPING ON ALL U.S ODERS OVER $50</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ms-auto" >
//                         <NavDropdown title="USD" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#">CAD</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">AUD</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">EUR</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">GBP</NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown title="English" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#">French</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">Italian</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">German</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
//                         </NavDropdown>
//                         <NavDropdown title="My Account" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#"><i class="fa-solid fa-right-to-bracket"></i>           Sign In</NavDropdown.Item>
//                             <NavDropdown.Item href="#"><i class="fa-solid fa-user-plus"></i>Register</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default FsHeader;