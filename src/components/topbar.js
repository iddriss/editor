import React from 'react';
import styled from 'styled-components';
import addfile from '../img/svg/addfile.svg';
import undo from '../img/svg/undo.svg';
import redo from '../img/svg/redo.svg';


const Header = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    background-color: #ffffff;
    box-shadow: 0 5px 8px 3px #c3c3c35c;
    padding: 0 8rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
        display: flex;
        align-items: center;

        .redo_undo {
            margin-left: 1rem;

            img {
                margin-left: 1rem;
            }
        }
    }

    .center {
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: center;

        input {
            width: 100%;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 18px;
            border: 2px solid #ececec;
        }
    }
    .right {
        display: flex;
        align-items: center;
        width: 30%;
        justify-content: flex-end;
    }
`;

const Button = styled.button`
    margin-left: 2rem;
    padding: 0.8rem 2.5rem;
    border: 0;
    font-size: 16px;
    border-radius: 5px;
    color: #fff;
    box-shadow: 0 0 8px 0px #8e898987;

    &.save {
       background: #62c162;
    }

    &.export {
        background: #3bb4da;
    }
`;

const Icon = styled.img`
    width: 35px;
    height: 35px;
`;


class Topbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    addfile() {};

    undo() {
        document.execCommand('undo');
    };

    redo() {
        document.execCommand('redo');
    };

    save() {};

    render() {
        return (
            <Header>
                <div class="left">
                    <span class="icon"><Icon src={addfile} alt="add"></Icon></span>
                    <div class="redo_undo">
                        <span class="icon"><Icon onClick={this.undo} src={undo} alt="undo"></Icon></span>
                        <span class="icon"><Icon onClick={this.redo} src={redo} alt="redo"></Icon></span>
                    </div>

                </div>
                <div class="center">
                <input id="author" type="text" name="author" placeholder="Author's name"></input>
                </div>

                <div class="right">
                    <Button onClick={this.save} className="save">Save</Button>
                    <Button onClick={this.props.exportFunc} className="export">Export</Button>
                </div>
            </Header>
        );
    }
}


export default Topbar;