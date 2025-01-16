import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/organisms/Navbar';
import BudgetApp from './pages/BudgetApp';
import Home from './pages/Home';

import { Routes as RoutesURL } from './constants/routes';

import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path={RoutesURL.Home} element={<Home />} />
            <Route path={RoutesURL.Budget} element={<BudgetApp />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
