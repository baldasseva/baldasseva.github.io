import tabsData from '../assets/Contents';
import './Header.scss';
import Curriculum from './Curriculum';

function Header(props) {

    return (
        <div className="header-container">
            <div className="tabs-header">
                {tabsData.map((tab, index) => (
                    <div
                    key={index}
                    data-tab={tab.id}
                    className={`tabs ${props.selectedTab === tab.id ? "active" : ""}`}
                    onClick={e => props.setSelectedTab(tab.id)}
                    >
                    {tab.tabName}
                    </div>
                ))}
            </div>
            <Curriculum />
        </div>
    );
  }
  
  export default Header;