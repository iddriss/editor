import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 1rem 0 0;
    padding: 0.5rem;
    border: 2px solid transparent;
    position: relative;

    &:focus {
        border: 2px solid gray;
        border-left: 10px solid gray;

        &:hover {
            border: 2px solid gray;
            border-left: 10px solid gray;
        }
 
    }

    &:hover {
        border-left: 3px solid gray;

        &:before {
            content: '${props => props.name}';
            background-color: #929191b3;
            font-weight: normal;
            color: #ffff;
            font-size: 12px;
            padding: 2px 4px;
            position: absolute;
            left: 0;
            top: 0;

        }
    }

    font-size: ${({fontSize}) => fontSize || '16px'};

    font-weight: ${({fontWeight})=> fontWeight || 'normal'};

    color: ${({color}) => color || '#191e23'};
`;


class Block extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        return (
            <Container
            className='block' 
            dataIndex={this.props.dataIndex}
            name={this.props.name} 
            fontSize={this.props.fontSize} 
            fontWeight={this.props.fontWeight}
            color={this.props.color}>{this.props.children}</Container>
        );
    }
}


export default Block;