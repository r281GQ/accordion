import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Center = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Container = ({ children }) => <Center>{children}</Center>

Container.propTypes = {
    children: PropTypes.node
}

export default Container;