import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Main from './components/main/main';
import Detail from './components/movieDetails/detail';
import { AppProvider } from './context';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
    <AppProvider>
     <Router>
     <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/details' element={<Detail />} />
      </Routes>
     </Router>
    </AppProvider>
     
    </div>
  );
}

export default App;
