import './App.css';
import Layout from 'components/UI/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/Home/Home'
import About from 'components/About/About'
import Sermon from 'components/Sermon/Sermon'
import Contact from 'components/Contact/Contact'


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/Contact" element={ <Contact /> }/>
          <Route path="/Sermon" element={ <Sermon /> }/>
          <Route path="/About" element={ <About /> }/>
          <Route path="/" element={ <Home /> }/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
