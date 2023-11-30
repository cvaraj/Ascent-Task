import Header from "./Components/Header/Header";
import SuperConfig from "./Modules/Superconfiguration";
import SideBar from "./Components/SideBar/Sidebar";
// import { BrowserRouter as Router } from 'react-router-dom';

import './assets/Styles/styles.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="page-content">
          <SideBar />
          <SuperConfig />
        </div>
    </div>
  );
}

export default App;
