
import { BrowserRouter as Router} from 'react-router';

import { AuthProvider } from './services/auth/AuthContext';
import AppContent from './AppContent';


function App() {

  return (

    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>

  );
};

export default App