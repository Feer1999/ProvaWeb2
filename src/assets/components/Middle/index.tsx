import { Board, Container, OrdersContainer } from "./styles"
export function Middle(){
    return (
        <Container>
        <Board>
        <header>
            <span>📰</span>
            <strong>Noticia</strong>
        </header>
        <OrdersContainer>
            <button type="button">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestiae.</span>
            </button>
        </OrdersContainer>
        </Board>
        <Board>
        <header>
            <span>🎙</span>
            <strong>Informações</strong>
        </header>
        <OrdersContainer>
            <button type="button">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, dolorem.</span>
            </button>
        </OrdersContainer>
        </Board>
        <Board>
        <header>
            <span>📺</span>
            <strong>Matérias</strong>
        </header>
        <OrdersContainer>
            <button type="button">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quae!</span>
            </button>
        </OrdersContainer>
        </Board>
        <Board>
        <header>
            <span>📢</span>
            <strong>Feed</strong>
        </header>
        <OrdersContainer>
            <button type="button">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quae!</span>
            </button>
        </OrdersContainer>
        </Board>
        </Container>
      
    )
}

