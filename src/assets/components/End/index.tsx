import logo from "../../images/redesocial.png"
import { Container, Content } from "./styles";
export function End() {
    return (
        <Container>
            <Content>
            <div className="page-details">
                    <h1>Aluna</h1>
                    <h2>Fernanda Rodrigues da Rosa</h2>
                </div>

                <img className= "logo" src={logo} alt="AppFood"/>
            </Content>
        </Container>
    );
}