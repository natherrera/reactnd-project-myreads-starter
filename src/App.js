import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Loader } from './components';
import Login from './components/layouts/LoginContainter';
// Lazy loaded components.
const RouteWithLayout = lazy(() => import('./components/layouts/RouteWithLayout'));
const AppLayout = lazy(() => import('./components/layouts/AppLayout'));
const LoginContainer = lazy(() => import('./components/layouts/LoginContainter'));
const MainContainer = lazy(() => import('./components/layouts/MainContainer'));

class App extends React.Component
{

    render()
    {
        return (
            <div className='app'>
                <Suspense fallback={ <Loader message='Cargando' /> }>
                    <Switch>
                        <Redirect exact from='/' to='/main' />

                        <Route exact path='/main/login'
                            component={ LoginContainer }
                        />

                        <RouteWithLayout exact path='/main'
                            layout={ AppLayout }
                            component={ MainContainer }
                        />

                        {/* <Route component={ NotFoundPage } /> */}
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

export default App;
