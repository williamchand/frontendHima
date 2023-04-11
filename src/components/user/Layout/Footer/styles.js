import { Link } from "react-router-dom";
import styled from "styled-components";
import { b, v } from "../../../../styles/variables";

export const SFooterHeight = styled.div`
    background-color: blue;
    height: max-content;

    @media ${b.sm}{
    }
`;

export const SFooterFixed = styled.div`
    position: relative;
    background: rgba(173,47,29,0.6);
    bottom: 0;
    right: 0;
    width: 100%;
    
`;

export const SFooter = styled.footer`
    position: absolute;
    top: 0;
    height: 100px;
    width: 100%;
`;

export const SlogoLink = styled(Link)`
    width: 50vw;
    display: flex;
`;

export const Slogo = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    filter: contrast(200%);
`;