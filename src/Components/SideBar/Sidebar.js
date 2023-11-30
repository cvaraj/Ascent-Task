import React from 'react';

import DashboardIcon from "../../assets/Images/dashboard_black_24dp.svg";
import WorkHistoryIcon from "../../assets/Images/work_history_black_24dp.svg";
import SuperConfigIcon from "../../assets/Images/tune_black_24dp.svg";
import MasterReportIcon from "../../assets/Images/auto_graph_black_24dp.svg";
import MoreIcon from "../../assets/Images/read_more_black_24dp.svg";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li><a href='https://example.com'><i><img src={DashboardIcon} alt='' /></i>DashBoard</a></li>
        <li><a href='https://example.com'><i><img src={WorkHistoryIcon} alt='' /></i>Monthly Process</a></li>
        <li><a className='active' href='https://example.com'><i><img src={SuperConfigIcon} alt='' /></i>Super Configura..</a></li>
        <li><a href='https://example.com'><i><img src={MasterReportIcon} alt='' /></i>Super Configura..</a></li>
        <li><a href='https://example.com'><i><img src={MoreIcon} alt='' /></i>More</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;