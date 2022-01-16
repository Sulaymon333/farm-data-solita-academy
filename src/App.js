import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import FarmInfo from './pages/FarmInfo';
import FarmDetail from './pages/FarmDetail';
import FarmStats from './pages/FarmStats';
import Error from './pages/Error';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<FarmInfo />} />
                <Route exact path='/v1/farms/:id' element={<FarmDetail />} />
                <Route exact path='/v1/farms/:id/stats' element={<FarmStats />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
