import React from "react";
import { styled } from "styled-components";
export const Image = ({src,alt, ...resProps}) => (
    <img src={src} alt={alt} {...resProps}/>
);
export const ImageAvatar = styled(Image)`
    display: block;
    width: 100%;
    height: 470px;
`;