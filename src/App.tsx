import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
