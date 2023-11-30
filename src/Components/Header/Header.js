import logo from '../../assets/Images/Flipkart_logo-700x185.png';
import help from '../../assets/Images/help_outline-24px (3).svg';
import notify from '../../assets/Images/Group 8570.svg';
import arrow from '../../assets/Images/arrow_drop_down_black_24dp.svg';

function App() {
    return (
      <>
        <header className="App-header">
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="header-right">
                <div className="header-info">
                    <span>Pay Cycle: 31-May-2021 to 31-June-2021</span>
                    <h5>Amazon India Pvt Ltd <i><img src={arrow} alt='' /></i></h5>
                </div>
                <div className="header-links">
                    <ul>
                        <li><a href="https://xample.com"><i><img src={help} alt='' /></i>Support</a></li>
                        <li className='notification-icon'><a href="https://xample.com"><i><img src={notify} alt='' /></i>Notification</a></li>
                        <li><a href="https://xample.com"><i className='account-icon'>R</i></a></li>
                    </ul>
                </div>
            </div>
        </header>
      </>
    );
  }
  
  export default App;