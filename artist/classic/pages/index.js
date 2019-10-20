import App from '../components/App'
import Header from '../components/Header'
import { withApollo } from '../lib/apollo'
import Home from '../components/Home'

const IndexPage = props => (
  <App>
    <Header />
    <Home />
  </App>
)

export default withApollo(IndexPage)
