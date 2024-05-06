import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  {AuthProvider}  from './AuthenticWrapper';
import Homepage from './components/HomePage';
import LoginPage from './components/Login';
import SignupPage from './components/SignUp';
import CreateContactPage from './components/CreateContactPage';
import EditContactPage from './components/EditContactPage';
import ContactsListPage from './components/ContactListPage';
import ContactDetailsPage from './components/ContactDetailsPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/create-contact" element={<ProtectedRoute><CreateContactPage /></ProtectedRoute>} />
            <Route path="/edit-contact/:id" element={<ProtectedRoute><EditContactPage /></ProtectedRoute>} />
            <Route path="/contacts-list" element={<ProtectedRoute><ContactsListPage /></ProtectedRoute>} />
            <Route path="/contact-details/:id" element={<ProtectedRoute><ContactDetailsPage /></ProtectedRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  //   <AuthProvider>
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Homepage />} />
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/signup" element={<SignupPage />} />
  //       <ProtectedRoute
  //         path="/create-contact"
  //         element={<CreateContactPage />}
  //       />
  //       {/* Other routes */}
  //     </Routes>
  //   </Router>
  // </AuthProvider>
  );
}

export default App;
