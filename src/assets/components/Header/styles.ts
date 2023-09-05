import { styled } from "styled-components";


export const Container = styled.header`
    background: black;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div `
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h1{
            color: #fff;
            font-size: 32px;
      
        }
    }
    .logo {
        max-width:200px;
        max-height:150px;
        width: auto;
        height: auto; 
        margin-top: 6px;
    }
`