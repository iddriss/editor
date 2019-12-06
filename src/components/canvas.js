import React from 'react';
import styled from 'styled-components';
import Block from './blocks';

const Container = styled.div`
  width: 70%;
  height: 100%;

  background-color: #fff;
  margin-top: 100px;
  box-shadow: 0 0 4px 3px #eaeaea7d;

  padding: 0 2.5rem;
`;


const Title = styled.h1`
  text-transform: capitalize;
  margin: 0;
`;



class Canvas extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }



  render() {
    return (
      <Container>
        <Block name="main title" fontSize="29px" fontWeight="600">
          <Title contentEditable={true}>Title... </Title>
        </Block>

        {
          this.props.blocks.map(({name, fontSize, fontWeight, dataIndex, color, Element}) => {

            return (
              <Block name={name} fontSize={fontSize} color={color} data-index={dataIndex} fontWeight={fontWeight}>
                <Element />
              </Block>
            );
          })
        }

      </Container>
    );
  }
}


export default Canvas;