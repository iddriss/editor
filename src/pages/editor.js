import React from 'react';
import styled from 'styled-components';
import Canvas from '../components/canvas';
import { Heading, Paragraph, List, Table, Image, Figure, Quote, Code, Space,  } from '../utils/addBlock';
import logo from '../logo.svg';
import Toolbubble from '../components/toolbubble';
import heading from '../img/svg/header.svg';
import paragraph from '../img/svg/paragraph.svg';
import spacer from '../img/svg/spacer.svg';
import list from '../img/svg/list.svg';
import image from '../img/svg/img.svg';
import figure from '../img/svg/figure.svg';
import code from '../img/svg/code.svg';
import table from '../img/svg/table.svg';
import quote from '../img/svg/quote.svg';


const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #f1f1f15c;

    display: flex;
    display: flex;
    // align-items: center;
    justify-content: center;

    padding-bottom: 100px;

    
`;


const LeftSide = styled.div`
    width: 15%;
    height: 100%;

    margin-top: 100px;
    align-self: flex-start;
    position: sticky;
    top: 100px;

    display: flex; 
    flex-direction: column;
    align-items: center;
}
`;

const RightSide = styled.div`
    width: 15%;
    height: 100%;

    margin-top: 100px;
    align-self: flex-start;
    position: sticky;
    top: 100px;

    display: flex; 
    flex-direction: column;
    align-items: center;

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

    height: 25px;
    width: 25px;
`;


class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nextIndex: 0,
            blocks: [],
            ids: [],
        };
    }

    createBlock = (name, el) => {

        const lenght = this.state.blocks.length +1;
        this.setState({nextIndex: lenght+1});

        const id = `${name}_${this.state.nextIndex}`;

        this.setState({ids: [...this.state.ids, id]});

        const block = {
            name: name,
            dataIndex: this.state.nextIndex, 
            Element: () => (el)
        }

        this.setState({nextIndex: this.state.nextIndex+1});

        return block;
    };


    addHeading = () => {
        let name = "head";

        const handleCreate = e => name = e;

        const el = <Heading onCreate={handleCreate} type={name} index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
    };

    addParagraph = () =>{ 
        const name = "paragraph";
        const el = <Paragraph name={name} index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
    };

    addSpacer = () => { 

        const name = "spacer";

        const el = <Space name={name} index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
    };

    addList = () => {
        const name = 'list';
        const el = <List name={name} type="ol" index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
     };

    addImage = () =>{ 
        const name = 'image';
        const el = <Image name={name} caption={true} index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
    };

    addFigure = () => { 
        const name = 'figure'
        const el = <Figure name={name} index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
    };

    addCode = () => { 
        const name = 'code';
        const el = <Code name={name} index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
    };

    addTable = () =>{ 
        const name = 'table';
        const el = <Table name={name} index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
    };

    addQuote = () => {

        const name = 'quote'
        const el = <Quote name={name} index={this.state.nextIndex}/>;

        const block = this.createBlock(name, el);

        this.setState({
            blocks: [...this.state.blocks, block]
        })
     };

     componentDidUpdate = (prevState) => {
         if (prevState.ids !== this.state.ids) {
             this.sendIds();
             console.log(this.state.ids);
         }
     }

     sendIds = () => {
        this.props.onUpdateIds(this.state.ids);
     };


    render() {
        console.log(this.state);
        return (
            <Container>
                <LeftSide>
                    <Toolbubble>
                        <IconSpan onClick={this.addHeading}><Icon src={heading} alt="heading" /><span className="tooltip">Heading</span></IconSpan>
                        <IconSpan onClick={this.addParagraph}><Icon src={paragraph} alt="paragraph" /><span className="tooltip">Paragraph</span></IconSpan>
                        <IconSpan onClick={this.addSpacer}><Icon src={spacer} alt="spacer" /><span className="tooltip">Spacer</span></IconSpan>
                    </Toolbubble>
                    <Toolbubble>
                        <IconSpan onClick={this.addList}><Icon src={list} alt="list" /><span className="tooltip">List</span></IconSpan>
                        <IconSpan onClick={this.addImage}><Icon src={image} alt="image" /><span className="tooltip">Image</span></IconSpan>
                        <IconSpan onClick={this.addFigure}><Icon src={figure} alt="figure" /><span className="tooltip">Figure</span></IconSpan>
                        <IconSpan onClick={this.addCode}><Icon src={code} alt="code" /><span className="tooltip">Code</span></IconSpan>
                        <IconSpan onClick={this.addTable}><Icon src={table} alt="table" /><span className="tooltip">Table</span></IconSpan>
                        <IconSpan onClick={this.addQuote}><Icon src={quote} alt="quote" /><span className="tooltip">Quote</span></IconSpan>
                    </Toolbubble>
                </LeftSide>

                <Canvas blocks={this.state.blocks} ></Canvas>

                <RightSide></RightSide>
            </Container>
        );
    }
}


export default Editor;