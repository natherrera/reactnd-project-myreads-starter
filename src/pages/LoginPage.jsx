import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Form, Message } from 'semantic-ui-react';
// import '../styles/pages/login-page.scss';
import { SessionAction } from './../store/actions';
import { loginInputs } from '../config/inputIds';


const dropdownUsers = (users = []) => {
    const drop = users ? Object.values(users) : []
    return drop
    .map(e => (
        {
            key: e.id,
            text: e.name,
            value: e.name
        }
    ))

}


class LoginPage extends React.PureComponent
{
  state = {
      values: {
          [loginInputs.userName]: process.env.REACT_APP_LOGIN_DEFAULT_USER || '',
      },
      hintIsVisible: false,
      validations: true
  };

  componentDidMount()
  {
        const { dispatch } = this.props;

        dispatch(
            SessionAction.Action(SessionAction.Types.GET_USERS),
        );

  }

  onInputChange = (e, { id, value }) =>
  {
      this.setState(prevState =>
      {
          const newValues = {
              ...prevState.values,
              [id]: value
          };

          return {
              values: newValues,
              validations: false
          };
      });
  };

  onLoginSubmit = () =>
  {

    const { validations } = this.state;

    if (validations)
      {
          this.setState({ hintIsVisible: true });

          return;
      }

      const { dispatch, history, users } = this.props;


      const userName = Object.values(users)
      .filter(e => e.name === this.state.values.userName)


      dispatch(
          SessionAction.Action(SessionAction.Types.LOGIN, {
              credentials: userName[0],
              history,
          })
      );

  };

  render()
  {
        const { hintIsVisible, validations } = this.state;

        const { authenticated, loading, users } = this.props;

        return !authenticated ? (
          <div className='page-container'>
              <Form id='login-form' onSubmit={ this.onLoginSubmit }>

                    <Form.Field
                      fluid
                      control={ Form.Select }
                      id={ loginInputs.userName }
                      label={ { children: 'User' } }
                      options={ dropdownUsers(users) || []}
                      placeholder='Please, choose your user'
                      onChange={ this.onInputChange }
                      value={ this.state.values.user }
                      required
                  />

                  <Form.Button
                      fluid
                      color='teal'
                      type='submit'
                  >
                      Log In
                  </Form.Button>
              </Form>
              {hintIsVisible && validations && (
                  <Message
                      warning
                      header='Please, choose a user'
                  />
              )}

          </div>
      ) : (
        <Redirect to='/main' />
    );
  }
}


function mapStateToProps({
    [SessionAction.Key]: { authenticated, loading, users },

})
{
    return { authenticated, loading, users: users};
}

export default connect(mapStateToProps)(withRouter(LoginPage));
