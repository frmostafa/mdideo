import '../styles/globals.css'
import '../styles/autoCompleteSearch.css'
// import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';
import StoreConfig from '../store/storeConfig';
import { Provider } from 'react-redux'

const store = StoreConfig()

function MyApp({ Component, pageProps }) {
  return (
       <Provider store={store}>
          <Component {...pageProps} />
       </Provider>
      )
}
// const makestore = () => store

// return <Component {...pageProps} />

// }
export default MyApp
