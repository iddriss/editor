import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
    justify-content: center;
    background: #fff;
    padding: 2rem 0;
    margin: 2rem 0;
    border-radius: 10rem;
    box-shadow: 0 0 4px 3px #eaeaea7d;
`;


class Toolbubble extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }


    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }
}


export default Toolbubble;