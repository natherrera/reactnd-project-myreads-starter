import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { SessionAction } from '../../store/actions';
import { Navbar, Sidebar } from '../../components';

class AppLayout extends React.PureComponent
{
    render()
    {
        const { authenticated, location: {
            pathname
        } } = this.props;

        return authenticated || pathname === '/main/login' ?
            <>
                {/* <Navbar /> */}
                <Grid stackable centered padded className='app-container' columns='equal'>

                    <Grid.Row> {
                        this.props.children
                    }
                    </Grid.Row>
                </Grid>
            </>
            : <Redirect to='/main/login' />;
    }
}

function mapStateToProps({ [SessionAction.Key]: {
    authenticated
} })
{
    return { authenticated };
}

export default connect(mapStateToProps)(AppLayout);
