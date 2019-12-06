import React from 'react';
import styled from 'styled-components';
import left from '../img/svg/alignleft.svg';
import center from '../img/svg/aligncenter.svg';
import right from '../img/svg/alignright.svg';
import justify from '../img/svg/justify.svg';
import bold from '../img/svg/bold.svg';
import italic from '../img/svg/italic.svg';
import underline from '../img/svg/underline.svg';
import h1 from '../img/svg/h1.svg';
import h2 from '../img/svg/h2.svg';
import h3 from '../img/svg/h3.svg';




const Container = styled.div`
    display: flex;
`;


const IconSpan = styled.div`
    padding: 0.5rem;
    border-radius: 10px;
    margin: 0.2rem 0;
    border: 2px solid transparent;
    position: relative;
    transition: all 0.2s ease;

    

    &:hover {
        .tooltip {
            visibility: visible;
        }
    }

    .tooltip {
        visibility: hidden;
        position: absolute;
        right: -107px;
        width: 243%;
        padding: 0.5rem;
        background-color: #b5b5b5;
        border-radius: 1rem;
        color: #fff;
        font-weight: bold;
        transition: all 0.1s ease;
    }

    &:hover {
        border: 2px solid #cccaca;
    }
`;

const Icon = styled.img`

    height: 20px;
    width: 20px;
`;


export const Alignment = (props) => {

    const align = (where) => {
        props.onChange(where);
    };

    return (

        <Container>
            <IconSpan onClick={()=>align('left')}><Icon src={left} alt="left"></Icon></IconSpan>
            <IconSpan onClick={()=>align('center')}><Icon src={center} alt="center"></Icon></IconSpan>
            <IconSpan onClick={()=>align('right')}><Icon src={right} alt="right"></Icon></IconSpan>
            <IconSpan onClick={()=>align('justify')}><Icon src={justify} alt="justify"></Icon></IconSpan>
        </Container>
    );
}

export const Format = (props) => {

    const format = (type) => {
        props.onChange(type);
    };

    return (

        <Container>
            <IconSpan onClick={()=>format('bold')}><Icon src={bold} alt="left"></Icon></IconSpan>
            <IconSpan onClick={()=>format('italic')}><Icon src={italic} alt="center"></Icon></IconSpan>
            <IconSpan onClick={()=>format('underline')}><Icon src={underline} alt="right"></Icon></IconSpan>

        </Container>
    );
}

export const HeadingType = (props) => {

    const format = (type) => {
        props.onChange(type);
    };

    return (

        <Container>
            <IconSpan onClick={()=>format('main')}><Icon src={h1} alt="left"></Icon></IconSpan>
            <IconSpan onClick={()=>format('sub1')}><Icon src={h2} alt="center"></Icon></IconSpan>
            <IconSpan onClick={()=>format('sub2')}><Icon src={h3} alt="right"></Icon></IconSpan>

        </Container>
    );
}