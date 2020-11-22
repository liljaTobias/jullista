import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import { Container } from '@material-ui/core'
import { LoginPage } from '../Login'
import { CreateListPage, ViewListPage } from '../List'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create">
                    <CreateListPage />
                </Route>
                <Route path="/list/:id"  component={ViewListPage} />
                <Route path="/">
                    <Container maxWidth="sm">
                        <LoginPage />
                    </Container>
                </Route>
            </Switch>
        </Router>
    )
}

export default App