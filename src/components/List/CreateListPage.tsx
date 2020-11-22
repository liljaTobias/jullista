import React, { useEffect, useState } from 'react'
import { Grid, Box, Container, List, ListItem, Paper, Typography, makeStyles, ListItemText, ListItemSecondaryAction, IconButton, TextField, Button } from '@material-ui/core'
import { TListItem } from './types'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em',
        width: '100%'
    }
}))

const LIST_ITEMS: Array<TListItem> = [
    { id: 0, name: 'Gurka', claimed: true},
    { id: 1, name: 'Salsa', claimed: true}
]

const CreateListPage = () => {
    const [list, setList] = useState<Array<TListItem>>([])
    const [newItem, setNewItem] = useState('')
    
    const classes = useStyles()

    useEffect(() => {
        setList(LIST_ITEMS)
    }, [])

    const addItemToList = (item: string) => {
        const newId = LIST_ITEMS.length
        setList([...list, {id: newId, name: item, claimed: true}])
        setNewItem('')
    }

    const removeItem = (id: number) => {
        const newList = list.filter(li => li.id !== id)
        setList(newList)
    }

    console.log(list)

    return (
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh'}}>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h5">List</Typography>
                    <List>
                        {list.map((l) => (
                            <ListItem button>
                                <ListItemText primary={l.name} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => removeItem(l.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                        <ListItem>
                            <TextField placeholder="Add new item..." value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" onClick={() => addItemToList(newItem)}>
                                    <AddIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Container>
    )
}

export default CreateListPage