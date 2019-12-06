import React, { useState } from 'react';
import styled from 'styled-components';
import bullet from '../img/svg/bullet.svg';
import numbered from '../img/svg/numbered.svg';
import { Alignment, Format, HeadingType } from '../components/format';

const P = styled.p`
    text-align: ${({ alignment }) => alignment};
`;

const PContainer = styled.div`
    position: relative;

    &:hover {
        .toolbar {
            visibility: visible;
        }
    }
`;

const Img = styled.img`

width: ${({ size }) => size === "small" ? "25%" : size === "medium" ? "50%" : "100%"};

text-align: ${({ alignment }) => alignment};
`;

const ImgContainer = styled.div`

    &:hover {
        .footer {
            display: flex;
        }
        .toolbar {
            visibility: visible;
        }
        }

    .footer {
        animation: open 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
        display: none;
        // visibility: hidden;
        // display: flex;
        flex-direction: column;
        padding: 1rem;
        background: #dedede91;

        .inputs {
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
        
            input {
                padding: 0.5rem;
                border: 0;
                border-radius: 0.4rem;
                color: grey;
                width: 48%;
            }
        }
      
    
    label {
        width: 145px;
        .size {
            display: flex;
        }
    }
}
`;


const H2 = styled.h2`
text-align: ${({ alignment }) => alignment};
font-size: ${({ type }) => type === "sub1" ? "25px" : type === "sub2" ? "20px" : "30px"}
`;


const HContainer = styled.div`
    position: relative;

    &:hover {
        .toolbar {
            visibility: visible;
        }
    }
`;

const Ul = styled.ul`
    list-style: ${({ listStyle }) => listStyle};
    text-align: ${({ alignment }) => alignment};
`;

const ListContainer = styled.div`
    position: relative;

    &:hover {
        .toolbar {
            visibility: visible;
        }
    }
`;

const FigureEl = styled.figure`

    img {
        
    }

    figcaption {
        font-size: 13px;
        color: gray;
        padding: 1rem 0;
    }
`;

const Q = styled.q`
  
        font-style: italic;
    
`;

const QutoeContainer = styled.div`
    position: relative;

    &:hover {
        .toolbar {
            visibility: visible;
        }
    }
`;

const Pre = styled.pre`
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0;
    color: rgb(255, 255, 255);
    tab-size: 1.5em;
    background: rgb(40, 44, 52);
    border-radius: 10px;
    overflow: auto;
    padding: 1rem 1.5rem;
`;

const TableEl = styled.table`

    border-collapse: collapse;
    width: 100%;

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
`;

const PromptBox = styled.div`
      width: 100%;
      height: 100%;
`;

const Spacer = styled.div`
      margin: 2rem;
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
    QutoeContainer
    &:hover {
        border: 2px solid #cccaca;
    }
`;

const Icon = styled.img`

    height: 20px;
    width: 20px;
`;


export const Paragraph = (props) => {

    const stateData = {
        align: 'left',
    };

    const [state, setState] = useState(stateData);


    const handleChange = e => {
        setState({ ...state, align: e })
    }

    const handleFormat = e => {
        document.execCommand(e);
    }

    return (
        <PContainer>
            <div class="toolbar">
                <Alignment onChange={handleChange}></Alignment>
                <Format onChange={handleFormat}></Format>
            </div>
            <P alignment={state.align} id={props.name + '_' + props.index} contentEditable={true}>Edit paragraph...</P>
        </PContainer>

    );
};

export const Heading = (props) => {

    const { type } = props;

    const stateData = {
        type: '',
        align: 'left',

    };

    const [state, setState] = useState(stateData);

    const handleChange = e => {
        setState({ ...state, align: e })
    }

    const handleFormat = e => {
        document.execCommand(e);
    }

    const handleHead = e => {
        setState({ ...state, type: e })
    }
    return (
        <HContainer>
            <div class="toolbar">
                <Alignment onChange={handleChange}></Alignment>
                <Format onChange={handleFormat}></Format>
                <HeadingType onChange={handleHead}></HeadingType>
            </div>
            <H2 id={state.type + '_' + props.index} contentEditable={true} alignment={state.align} type={state.type}>Write heading...</H2>
        </HContainer>
    );
};

export const List = (props) => {

    const { type } = props;

    const stateData = {
        align: 'left',
        style: 'disk',
    };

    const [state, setState] = useState(stateData);

    const setBullet = e => {
        setState({ ...state, style: 'disk' });

    };

    const setNumbered = e => {
        setState({ ...state, style: 'decimal' });
    };

    const handleChange = e => {
        setState({ ...state, align: e })
    }

    const handleFormat = e => {
        document.execCommand(e);
    }

    return (
        <ListContainer>

            <div class="toolbar">
                <IconSpan onClick={setBullet}><Icon src={bullet} alt="bullet"></Icon></IconSpan>
                <IconSpan onClick={setNumbered}><Icon src={numbered} alt="numbered"></Icon></IconSpan>
                <Alignment onChange={handleChange}></Alignment>
                <Format onChange={handleFormat}></Format>
            </div>

            <Ul alignment={state.align} listStyle={state.style} id={props.name + '_' + props.index} contentEditable={true}>
                <li>Write list item...</li>
            </Ul>

        </ListContainer>

    );



};

export const Image = (props) => {

    const [state, setState] = useState({ src: '', align: 'left', caption: '', size: 'small' });

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    return (
        <ImgContainer id={props.name + '_' + props.index}>

            <Figure caption={props.caption} captionEdit={false} captionText={state.caption}>
                <Img size={state.size} src={state.src} alt={props.alt}></Img>

            </Figure>

            <div className="footer">
                <div className="inputs">
                    <input class="imgUrl" type="text" onChange={handleChange} value={state.src} placeholder="image url" name="src"></input>
                    <input class="imgUrl" type="text" onChange={handleChange} value={state.caption} name="caption" placeholder="Write image caption..."></input>
                </div>
                <div className="size">
                    <label><input type="radio" checked={state.size === "small"} onChange={handleChange} name="size" value="small"></input> Small</label>
                    <label><input type="radio" checked={state.size === "medium"} onChange={handleChange} name="size" value="medium"></input> Medium</label>
                    <label><input type="radio" checked={state.size === "large"} onChange={handleChange} name="size" value="large"></input> Large</label>
                </div>
            </div>

        </ImgContainer>
    );

};

export const Figure = (props) => {

    return (
        <FigureEl id={props.name + '_' + props.index} contentEditable={true}>
            {
                props.children
            }

            {
                props.caption &&
                <figcaption contentEditable={props.captionEdit}>{props.captionText}</figcaption>
            }
        </FigureEl>
    );
};

export const Quote = (props) => {

    const stateData = {
        aling: 'left',
    };

    const [state, setState] = useState(stateData);

    const handleChange = e => {
        setState({ ...state, align: e })
    }


    const handleFormat = e => {
        document.execCommand(e);
    }

    return (
        <QutoeContainer>

            <div class="toolbar">
                <Format onChange={handleFormat}></Format>
            </div>
            <Figure caption={props.caption} captionText="Write citation...">
                <Q alignment={state.align} id={props.name + '_' + props.index} >Write quote...</Q>
            </Figure>
        </QutoeContainer>
    );
};

export const Code = (props) => {

    return (
        <Pre id={props.name + '_' + props.index} contentEditable={true}>&#65279;</Pre>
    );
};

export const Table = (props) => {

    const tableData = {
        rows: 0,
        columns: 0,
        table: "",
    };

    const [table, setTable] = useState(tableData);

    const handleChange = e => {

        setTable({ ...table, [e.target.name]: e.target.value })
    };

    const createTable = e => {
        e.preventDefault();

        const genTable = (
            <TableEl id={props.name + '_' + props.index}>
                <tbody>
                    {
                        table.rows.map(rows => {
                            return <tr>
                                {
                                    table.columns.map(cols => {
                                        return <td></td>;
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </TableEl>
        );

        setTable({ ...table, table: genTable });
    };

    if (table.columns === 0 && table.rows === 0) {
        return (

            <PromptBox>
                <input type="text" onChange={handleChange} class="promptInput" name="rows" value={table.rows} />
                <input type="text" onChange={handleChange} class="promptInput" name="colums" value={table.rows} />
                <button onClick={createTable}>Create Table</button>
            </PromptBox>


        );
    } else {
        return table.table;
    }

};

export const Space = (props) => {

    return (
        <Spacer id={props.name + '_' + props.index}></Spacer>
    );
};

export const Referrence = (props) => {

    return (
        <p id={props.name + '_' + props.index}></p>
    );
};