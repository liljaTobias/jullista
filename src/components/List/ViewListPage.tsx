import React, { useEffect, useState } from 'react'
import { Grid, Container, List, ListItem, Paper, Typography, makeStyles, ListItemText, ListItemSecondaryAction, IconButton, TextField, Button, ListItemIcon, Checkbox } from '@material-ui/core'
import { TListItem, TViewListItem } from './types'
import DeleteIcon from '@material-ui/icons/Delete';
import { RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em',
    },
    list: {
        width: '500px',
        maxWidth: 360,
    }
}))

const LIST_ITEMS: Array<TListItem> = [
    { id: 0, name: 'Gurka', claimed: true},
    { id: 1, name: 'Salsa', claimed: false}
]

const LISTS = [LIST_ITEMS, LIST_ITEMS]

type MatchParams = {
    id: string
}

interface TProps extends RouteComponentProps<MatchParams> {}

const ViewListPage: React.FC<TProps> = (props) => {
    const [list, setList] = useState<Array<TViewListItem>>([])
    
    const classes = useStyles()

    useEffect(() => {
        const { match: {params: { id }}} = props

        // TODO: FETCH FROM API
        const newList = LISTS[parseInt(id)].map(li => {
            return { ...li, checked: li.claimed}
        })
        setList(newList)
    }, [])

    const toggleItem = (itemId: number) => {
        const newList = list.map(li => {
            return li.id === itemId ? { ...li, checked: !li.checked } : li
        })
        setList(newList) 
    }

    const handleSave = () => {
        console.log(list)
        const newList = list.map(li => {
            return { ...li, claimed: li.checked}
        })
        // TODO: API CALL
        setList(newList)
    }

    return (
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh'}}>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h5">List</Typography>
                    <List className={classes.list}>
                        {list.map((l) => (
                            <ListItem key={l.id} button disabled={l.claimed}>
                                <ListItemText primary={l.name} />
                                <ListItemSecondaryAction>
                                    <Checkbox 
                                        edge="start"
                                        checked={l.claimed ? true : l.checked}
                                        disabled={l.claimed}
                                        onClick={() => toggleItem(l.id)}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSave}>Save</Button>
                </Paper>
            </Grid>
        </Container>
    )
}

export default ViewListPage