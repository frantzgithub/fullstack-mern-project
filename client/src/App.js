import { Routes, Route, useLocation } from 'react-router-dom';

import { Home, Landing, Form, Detail } from './views';
import { Navbar } from './components/Navbar/Navbar';
import "./styles/flexContainer.scss";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
