import React from "react";
import { styled } from "styled-components";
export const Div = ({className, children, ...resProps}) => (
    <div className={className} {...resProps}>
        {children}
    </div>
);
export const StyleDivList = styled(Div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 70%;
    margin: 50px auto 0;
    background-color: #efe0c0;
`;
export const StyleDivCard = styled(Div)`
    display: block;
    width: 100%;
    border: 1px solid #d0a548;
    border-radius: 10px;
`;
export const StyleDivImage = styled(Div)`
    display: block;
    width: 80%;
    margin: 10px auto;
`;
export const StyleDivTitle = styled(Div)`
    display: block;
    margin-bottom: 15px;
`;