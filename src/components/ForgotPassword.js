import * as React from 'react';
import { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import './Signup.css'
import insta from '../Assets/LOGOFRONT.gif'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/compat/app';
//Component to add the forgot password function

export default function Signup() {
    const useStyles = makeStyles({
        text1: {
            color: 'grey',
            textAlign: 'center'
        },
        card2: {
            height: '5vh',
            marginTop: '2%'
        }
    })
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClick = async (e) => {
        // e.preventDefault();
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => alert("Link to reset your password has been emailed to you."))
            .catch(error => alert("No such user exists."));
    }

    return (
        <div className="signupWrapper">
            <div className="signupCard">
                <Card variant="outlined">
                    <div className="insta-logo">
                        <img src={insta} alt="" />
                    </div>
                    <CardContent>
                        <Typography className={classes.text1} variant="subtitle1">
                            Enter your email to get link to reset your password.
                        </Typography>


                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e) => setEmail(e.target.value)} />

                    </CardContent>
                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" onClick={handleClick} disabled={loading}>
                            Get Link
                        </Button>
                    </CardActions>

                </Card>
                <Card variant="outlined" className={classes.card2}>
                    <CardContent>
                        <Typography className={classes.text1} variant="subtitle1">
                            Having an account ? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>

    );
}
