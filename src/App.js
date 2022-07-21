import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/main-page';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
