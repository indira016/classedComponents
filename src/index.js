import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import UserContextProvider from './store/UseerFinderContext';

ReactDOM.render(
    <UserContextProvider>
<App />
    </UserContextProvider>


, document.getElementById('root'));
