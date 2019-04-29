import 'react-app-polyfill/ie9'
import ReactDOM from 'react-dom'
import './index.css'
import { makeMainRoutes } from './routes'
import './Settings/App.css'

const routes = makeMainRoutes()

ReactDOM.render(routes, document.getElementById('root'))
