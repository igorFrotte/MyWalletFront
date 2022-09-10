import styled from "styled-components";

const Auth = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;

    svg {
        margin-bottom: 40px;
    }
    form {
        width: 300px;
    }
    input {
        margin-bottom: 12px;
    }
    p {
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 25px;
        font-weight: 700;
    }
    ${props => {
        if(props.disabled === true){
            return `
                input {
                    background: #F2F2F2;
                    color: #AFAFAF;
                }
                button {
                    opacity: 0.7;
                    cursor: initial;
                }
            `; 
        }
    }}
`;

const TemplateButton = styled.button`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: #A328D6;
    border-radius: 5px;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    font-weight: 700;

    svg {
        margin-top: 40px;
    }
`;

const TemplateInput = styled.input`
    width: 300px;
    height: 60px;
    background: #FFFFFF;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Raleway';
    color: #8C11BE;
    padding-left: 10px;

    &::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        font-family: 'Raleway';
    }
`;


export { Auth, TemplateButton, TemplateInput};