import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "../redux/store";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useState } from "react";
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  const [stateIsSet, setStateIsSet] = useState(false)
  return(
    <Provider store={store}>
      <Component {...pageProps} setStateIsSet={setStateIsSet} stateIsSet={stateIsSet} />
    </Provider>
  )
}

export default MyApp;
