import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Item = styled.div`
    margin-bottom: 5px;
`;

const Header = styled.div`
    color: white;
    font-weight: bold;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 1em;
    background-color: ${props => props.visible ? '#6844b7' : 'rgb(158,56,176)'};
    transition: all 500ms ease-in-out;

    &:after {
        padding: 0px;
        display: block;
        position: absolute;
        top: 45px;
        left: 0px;
        content: "";
        width: 100%;
        height: 5px;
        background-color: ${props => props.visible ? '#4c3185' : 'rgb(111,39,125)'};
    }
`;

const HeaderText = styled.div`
    margin-bottom: 5px;
`;

const Button = styled.div`
    font-size: 200%;
    font-style: normal;
    cursor: pointer;
    position: absolute;
    top: 0.5em;
    right: 1em;
`;

const Content = styled.div`
    max-height:  ${props => props.visible ? '400px' : '0px'};
    overflow:  ${props => props.visible ? 'inherit' : 'hidden'};
    color: #9e9e9e;
    height: auto;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    width: 100%;
    opacity: ${props => props.visible ? 1 : 0};
    transition: all 600ms ease-in-out;
`;

const ContentText = styled.div`
    margin: 1em;
`;

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this._handleToggle = this._handleToggle.bind(this);
    }

    _handleToggle() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const { heading, content } = this.props;
        const { visible } = this.state;
        return (<Item>
            <Header visible={visible}>
                <HeaderText>{heading}</HeaderText>
                <Button onClick={this._handleToggle}>ˇ</Button>
            </Header>
            <Content visible={visible}>
                <ContentText>{content}</ContentText>
            </Content>
        </Item>);
    }
}

ListItem.propTypes = {
    heading: PropTypes.string,
    content: PropTypes.string,
    visible: PropTypes.bool
};

export default ListItem;