import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import ListItem from './listitem';

const List = styled.div`
    margin: 0px;
    padding: 0px;
    list-style-type: none;
`;

const Section = styled.div`
    width: 400px;
`;

const Main = ({ items }) =>
    <Section>
        <List>
            {items.map(({ heading, content }) => <ListItem key={heading} heading={heading} content={content} />)}
        </List>
    </Section>

Main.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        heading: PropTypes.string,
        content: PropTypes.string
    }))
};

export default Main;