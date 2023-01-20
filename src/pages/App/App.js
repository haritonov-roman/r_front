import './App.css';
import SideBar from '../../components/SideBar/SideBar'

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className='container'>
        <div className='page'>
          Контент
        </div>
      </div>
    </div>
  );
}

export default App;
