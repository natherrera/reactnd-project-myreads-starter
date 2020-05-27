import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    Icon,
    Menu
} from 'semantic-ui-react';
import '../assets/styles/pages/main-page.css';
import { SessionAction } from './../store/actions';
import { Home, LoaderBoard, NewQuestion, UserMain } from '../components';



class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            views: [
                'None', 'Home', 'New Question', 'Loader Board'
            ],

            activeItem: 'None'
        };
    }

    componentDidMount = () => {
        const { dispatch, history } = this.props;



        const response = {
            author: 'John Doe',
            id: 'johndoe',
            optionOneText: 'fdfdf',
            optionTwoText: 'sdadas'
        }

        dispatch(
            SessionAction.Action(SessionAction.Types.FETCH_QUESTION, response)
        );
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    changeItem = (item) => this.setState({activeItem: item})

    logout = () => {

        const { dispatch, history } = this.props;

        dispatch(
            SessionAction.Action(SessionAction.Types.LOGOUT, history)
        );

    }


    render() {
        const { activeItem } = this.state;
        const { userName } = this.props;

        return (
            <div className='main-container'>
                <Menu stackable>
                    <Menu.Item>
                        <img src='https://react.semantic-ui.com/logo.png'/>
                        <p className='userName'>Hello <span>{ userName }</span></p>

                    </Menu.Item>

                    <Menu.Item name='Home'
                        active={ activeItem === 'Home' }
                        onClick={ this.handleItemClick }>
                        Home
                    </Menu.Item>

                    <Menu.Item name='New Question'
                        active={ activeItem === 'New Question'}
                        onClick={ this.handleItemClick}>
                        New Question
                    </Menu.Item>

                    <Menu.Item name='Loader Board'
                        active={activeItem === 'Loader Board'}
                        onClick={this.handleItemClick}>
                        Loader Board
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.logout}
                        />
                    </Menu.Menu>
                </Menu>
                    {
                        activeItem === 'Home' && (
                            <Home
                                changeItem={this.changeItem}
                            />
                        )
                    }{
                        activeItem === 'Loader Board' && (
                            <LoaderBoard />
                        )
                    }{
                        activeItem === 'New Question' && (
                            <NewQuestion />
                        )
                    }{
                        activeItem === 'None' && (
                            <UserMain />
                        )
                    }
            </div>

        );
    }
}

function mapStateToProps({
    [SessionAction.Key]: {
        authenticated,
        credentials
    }
}) {
    return {
        authenticated,
        credentials,
        userName: credentials.name,
    };
}

export default connect(mapStateToProps)(withRouter(MainPage));
