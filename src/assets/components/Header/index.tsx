// import LogoIfpr from "../../assets/images/LogoIfpr.png"
import LogoIfpr from "../../images/IfprCascavel.jpg"
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img className="logo" src={LogoIfpr} alt="AppFood"/>
                <div className="page-details">
                    <h1>Campus Cascavel</h1>
                </div>
            </Content>
        </Container>
    );
}