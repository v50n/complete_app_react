import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebaseConfig from './config/firebaseConfig'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase,firebaseConfig)
  )
);
  // create a store with data in rootReducer and use the Middleware thunk in order to connect with the firebase db

const rrfProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };
  

ReactDOM.render(
  <React.StrictMode>
  <ReactReduxFirebaseProvider {...rrfProps}>
  <Provider store={store}>
    <App />
  </Provider>
  </ReactReduxFirebaseProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
