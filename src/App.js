import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import WelcomePage from './Pages/WelcomePage'
import ActivitiesPage from './Pages/ActivitiesPage';
import ActivityDetails from './Pages/ActivityDetails';
import LoginPage from './Pages/LoginPage';
import SearchPage from './Pages/SearchPage';
import CalendarDefaultPage from './Pages/CalendarDefaultPage'
import CalendarAdmin from './Pages/CalendarAdmin'

function App() {
  return (
    <Router>
      <div className="h-screen w-screen font-Ubuntu">
        <Routes>
          <Route path="*" element={ <WelcomePage />} />
          <Route path="/Activities" element={ <ActivitiesPage /> } />
          <Route path="/Activity/:id" element={<ActivityDetails /> } />
          <Route path="/Search" element={ <SearchPage /> } />
          <Route path="/Calender" element={ <CalendarDefaultPage />} />
          <Route path="/CalenderAdmin" element={ <CalendarAdmin /> } />
          <Route path="/Login" element={ <LoginPage /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
