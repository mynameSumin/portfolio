import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/MainPage";
import ProjectPage from './pages/ProjectPage';
import './index.css';

function App() {
  return (
    <>
      <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage/>} />
    </Routes>
    </>
  );
}

export default App;
