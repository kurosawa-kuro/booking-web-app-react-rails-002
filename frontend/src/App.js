import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import RoomScreen from './screens/RoomScreen';
import BookingsScreen from './screens/BookingsScreen';
import AdminRoomFormScreen from './screens/admin/RoomFormScreen';
import AdminRoomsScreen from './screens/admin/RoomsScreen';
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
          <Route path="/bookings" element={<BookingsScreen />} />
          <Route path="/admin/rooms/new" element={<AdminRoomFormScreen />} />
          <Route path="/admin/rooms" element={<AdminRoomsScreen />} />
          {/* <Route path="/login" element={<Loginscreen />} />
        <Route path="/register" element={<Registerscreen />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
