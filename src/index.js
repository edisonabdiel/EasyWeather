import ReactDOM from 'react-dom';

import './index.css';

import App  from './components/App';

import { SWRConfig } from 'swr';
import { createToast, destoryAllToasts } from 'vercel-toast';
import 'vercel-toast/dist/vercel-toast.css';

import { ThemeProvider } from '../src/components/theme-context';

ReactDOM.render(
  <SWRConfig
    value={{
      onError: (error) => {
        if (error) {
          createToast(`Error: ${error.message}`, {
            type: 'error',
          });
        }
      },
      onSuccess: (data) => {
        if (data) {
          destoryAllToasts();
        }
      },
      shouldRetryOnError: false,
    }}
  >
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </SWRConfig>,
  document.getElementById('root'),
);
