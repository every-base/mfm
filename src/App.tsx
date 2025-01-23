import { Route, Routes } from '@everybase/router';
import './App.css';

const routes: Route[] = [
  {
    index: true,
    lazy: () => import('./routes/Home')
  }
]

const App = () => {
  return (
    <Routes routes={routes} />
  );
};

export default App;
