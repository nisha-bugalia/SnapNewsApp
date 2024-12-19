import { useState, useEffect } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const initialMode = localStorage.getItem('mode') || 'light';
  const [mode, setMode] = useState(initialMode);
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#041226';
    } else {
      document.body.style.backgroundColor = 'white';
    }
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode is enabled","success")
    } else {
      setMode('light');
      showAlert("Light mode is enabled","success")

    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div classNameName="container">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
