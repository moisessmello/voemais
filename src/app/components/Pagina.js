import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Voe Mais</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Ver Mais" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/aeroportos">
                                Aeroportos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/empresas">
                                Empresas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/voos">
                                Voos
                            </NavDropdown.Item>
                       
                        <NavDropdown.Divider />
                            <NavDropdown.Item href="/passagens">
                                Passagens
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/passageiros">
                                Passageiros
                            </NavDropdown.Item>
                            </NavDropdown>


                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>
        </>
    )
}