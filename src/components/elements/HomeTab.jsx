
import PropTypes from 'prop-types';
import React from 'react';
import { Menu, Tab } from 'semantic-ui-react';

/**
 * Renders a tab pane for HomePage.
 *
 * @param {*} key Id.
 * @param {*} title Text for show in tab.
 * @param {*} loading If content data is loading.
 * @param {*} render Content for render.
 *
 * @returns {JSX} Tab (from semantic UI).
 */
const HomeTab = ({ key, title, loading = false, render: Content }) => ({
    // Tab.
    menuItem: (
        <Menu.Item key={ key } className='tab'>
            <span className={ key }>{title}</span>
        </Menu.Item>
    ),
    // Tab content.
    render: () => (
        <Tab.Pane className='tab-content' attached={ false } loading={ loading }>
            <Content />
        </Tab.Pane>
    )
});

HomeTab.propTypes = {
    color: PropTypes.string.isRequired,
    counter: PropTypes.number,
    key: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    render: PropTypes.objectOf(PropTypes.any).isRequired,
    title: PropTypes.string.isRequired
};

export default HomeTab;
