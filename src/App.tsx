import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import TeacherLogin from './components/teacher_login';
import StudentLogin from "./components/students_login";
import TeacherDashboard from "./pages/teacher_dashboard";


document.documentElement.classList.remove("dark");

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;