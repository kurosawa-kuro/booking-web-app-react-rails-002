import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import RoomScreen from './screens/RoomScreen';
import Navbar from './components/Navbar';
// import Loginscreen from './Loginscreen';
// import Registerscreen from './Registerscreen';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/room/:id" element={<RoomScreen />} />
          {/* <Route path="/login" element={<Loginscreen />} />
        <Route path="/register" element={<Registerscreen />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
