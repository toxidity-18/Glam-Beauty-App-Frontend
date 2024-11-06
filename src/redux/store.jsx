import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import reducer from './reducer';

// Create the Redux store with thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

// Export the Redux provider for wrapping the application
export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);