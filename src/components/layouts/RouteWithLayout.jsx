import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Allows to create a route with a layout.
 *
 * @class RouteWithLayout
 * @extends {React.Component}
 */
class RouteWithLayout extends React.Component
{
    /**
     * Renders a component with a route and layout defined.
     *
     * @returns {any} JSX route renderer with layout.
     * @memberof RouteWithLayout
     */
    render()
    {
        const {
            render,
            component: Component,
            layout: Layout,
            ...rest
        } = this.props;

        return (
            <Route { ...rest }
                render={ (props) => (
                    <Layout { ...props }>
                        {Component ? <Component { ...props } /> : render(props)}
                    </Layout>
                ) }
            />
        );
    }
}

export default RouteWithLayout;
