import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
        </Switch>
    )
}