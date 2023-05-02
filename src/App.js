import logo from './logo.svg';
import './App.css';
import AppRouter from './config/approuter';
import { Provider } from 'react-redux';
import store from './config/redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
