import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// Global Stylesheet Import
import "./index.css"

// Redux imports
import { Provider } from 'react-redux';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the App component with the Redux Provider */}
      <Provider store={store}>
        <App />
      </Provider>
  </StrictMode>,
)
