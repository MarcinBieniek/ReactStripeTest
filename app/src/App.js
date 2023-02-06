import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pay from './components/pay';
import Success from './components/success';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
