import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import RoomScreen from './screens/RoomScreen';
import BookingsScreen from './screens/BookingsScreen';
import AdminRoomFormScreen from './screens/admin/RoomFormScreen';
import AdminRoomsScreen from './screens/admin/RoomsScreen';
import AdminTagFormScreen from './screens/admin/TagFormScreen.js';
import AdminTagsScreen from './screens/admin/TagsScreen.js';
import Navbar from './components/Navbar';
import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';

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
          <Route path="/admin/tags/new" element={<AdminTagFormScreen />} />
          <Route path="/admin/tags" element={<AdminTagsScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          {/* <Route path="/register" element={<RegisterScreen />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
