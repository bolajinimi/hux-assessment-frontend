import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './components/HomePage';
import LoginPage from './components/Login';
import SignupPage from './components/SignUp';
import CreateContactPage from './components/CreateContactPage';
import EditContactPage from './components/EditContactPage';
import ContactsListPage from './components/ContactListPage';
import ContactDetailsPage from './components/ContactDetailsPage';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create-contact" element={<CreateContactPage/>} />
          <Route path="/edit-contact/:id" element={<EditContactPage />} />
          <Route path="/contacts-list" element={<ContactsListPage />} />
          <Route path="/contact-details/:id" element={<ContactDetailsPage />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
