import React from 'react'

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
                <Button color="primary" variant="contained" fullWidth>Create</Button>
            </Paper>
        </Grid>
    )
}

export default LoginPage