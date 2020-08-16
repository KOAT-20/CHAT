import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
    background-color: #1A1A1D;
`;

export const ContainerInner = styled.div`
    width: 20%;
`;

export const Title = styled.h1`
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
`;

export const Input = styled.input`
    margin-top: 5px;
    border-radius: 10px;
    padding: 15px 20px;
    width: 100%;
`;

export const Button = styled.button`
    cursor: pointer;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979FF;
    padding: 20px;
    border-radius: 10px;
    display: inline-block;
    border: none;
    width: 100%;
    margin-top: 5px;
`;
