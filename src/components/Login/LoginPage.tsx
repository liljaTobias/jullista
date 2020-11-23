import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em'
    }
}))

const LoginPage = () => {
   const classes = useStyles()
    return (
        <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh'}}>
            <Paper elevation={3} className={classes.paper}>
                <Typography gutterBottom variant="h3">Create a new list</Typography>
                <Button color="primary" variant="contained" fullWidth component={RouterLink} to="/create">Create</Button>
                <Typography gutterBottom variant="h3">View a existing list</Typography>
                <Button color="primary" variant="contained" fullWidth component={RouterLink} to="/list/1">Goto</Button>
            </Paper>
        </Grid>
    )
}

export default LoginPage