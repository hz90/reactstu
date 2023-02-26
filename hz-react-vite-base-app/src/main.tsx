/*
 * @FilePath: /vite-project/src/main.tsx
 * @Description: main
 *
 */
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/reset.css';
import '@/styles/common.less';
import '@/styles/reset.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
