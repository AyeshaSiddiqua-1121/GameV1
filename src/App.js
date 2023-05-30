import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Editor from './pages/Editor';

function App() {
  return (
    <div className=" h-screen w-screen flex flex-col ">
      <div className=''>
        <Home />
      </div>
      <div className=''>
        <Editor />
      </div>
    </div>
  );
}

export default App;
