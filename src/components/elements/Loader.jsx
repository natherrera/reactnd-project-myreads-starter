import React from 'react';
import { Dimmer, Loader as Loading } from 'semantic-ui-react';

/**
 * Loader component for React Suspense and lazy.
 *
 * @class Loader
 * @extends {React.PureComponent}
 */
class Loader extends React.PureComponent
{
    /**
     * Renders the loading component.
     * A spinner and a message.
     *
     * @returns {JSX} Loader component.
     * @memberof Loader
     */
    render()
    {
        const { message } = this.props;

        return (
            <Dimmer active inverted>
                <Loading inverted>{ message }</Loading>
            </Dimmer>
        );
    }
}

export default Loader;
