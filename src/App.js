import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MergePDF from './components/MergePDF';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import MergeDox from './components/MergeDox';
import MergeImg from './components/MergeImg';

function App() {
  return (
  
    <div className="App">

<Router basename='/merger-frontend'>
<Navbar/>
<Routes>
<Route exact path='/merger-frontend' element={<MergePDF/>} />
<Route exact path='/merger-frontend/mergDox' element={<MergeDox/>} />
<Route exact path='/merger-frontend/mergImg' element={<MergeImg/>} />

</Routes>

</Router>
   
   
    </div>
  );
}

export default App;
