import React from "react";
import { styled } from "styled-components";
export const Text = ({className, ...resProps}) => (
    <p className={className} {...resProps}></p>
);
export const TextDefault = styled(Text)`
    display: block;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
    letter-spacing: .5px;
`;
export const TextName = styled(TextDefault)`
    font-size: 1.3em;
    color: #c69733;
`;
export const TextDMY = styled(TextDefault)`
    font-size: 1.5em;
    color: #191306;
`;