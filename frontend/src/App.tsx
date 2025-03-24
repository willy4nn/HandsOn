import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <p>nav</p>
        <Outlet /> {/* Renders matched route component */}
        <p>footer</p>
      </div>
    </>
  );
}

export default App;
