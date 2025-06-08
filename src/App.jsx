import { ToastContainer } from 'react-toastify';
import { notifyMissingFields, notifySuccessAdd } from './pages/notification/notification';

import { BrowserRouter as Router} from 'react-router';

import { AuthProvider } from './services/auth/AuthContext';
import AppContent from './AppContent';


function App() {

  return (

    <AuthProvider>
      <ToastContainer/>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>

  );
};

export default App