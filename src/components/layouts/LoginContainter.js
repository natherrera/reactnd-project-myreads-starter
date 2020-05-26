import React from 'react';
import LoginPage from '../../pages/LoginPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Logo, Wallpaper } from '../../assets/images';
import { Card, Icon } from 'semantic-ui-react';
// import '../styles/pages/login-page.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: `url(${Wallpaper})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
)

export default function Login()
{
    const classes = useStyles();

    return  (
        <Grid container component='main' className={ classes.root }>
            <CssBaseline />
            <Grid item xs={ 12 } sm={ 8 } md={ 12 } component={ Paper } elevation={ 6 } square>
                <div className={ classes.paper }>
                    <div className="ui card">
                     <div className="image"><img src="data:image/jpeg;base64,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" /></div>
                     <div className="content">
                         <div className="header">Hello Friend!</div>
                         <div className="meta">________________</div>
                         <div className="description">
                         Please choose your user, and enjoy the game!
                         </div>
                     </div>
                     <div className="extra content">
                     <LoginPage />
                     </div>
                     </div>
                </div>
            </Grid>
        </Grid>
    );
}
