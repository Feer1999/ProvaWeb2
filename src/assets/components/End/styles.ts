import { styled } from "styled-components";


export const Container = styled.header`
    background: white;
    display: flex;
    justify-content: center; 
    height: 100%;
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
            color: black;
            font-size: 32px;
      
        }
        h2 {
            color:black;
            font-weight: 400;
            font-size: 20px;
            margin-top: 6px;
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