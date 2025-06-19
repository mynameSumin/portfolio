import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/MainPage";
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  return (
    <>
      <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
    </>
  );
}

export default App;
