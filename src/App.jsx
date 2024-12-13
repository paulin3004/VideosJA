//Importing Components from react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



//Importing other pages
import Home from './components/homepage/Home';
import Forms from './components/forms/Forms'



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Forms" element={<Forms/>}/>
        </Routes>
    </Router>
  );
}

export default App;
