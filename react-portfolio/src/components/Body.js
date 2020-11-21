import tabsData from '../assets/Contents';
import eva from '../assets/eva.png';
import './Body.scss';

function Body(props) {
    return (
        <div className="body-container">
            <img className="eva" src={eva} alt="Eva"/> 
            <div style={{flexGrow: 1, minWidth: '15vw'}}/> {/* Space to not overlap with eva.png */}
            <div style={{flexGrow: 4}}>
                <div className="tabs-title">{tabsData[props.selectedTab - 1].tabName}</div>
                <div className="tabs-content">{tabsData[props.selectedTab - 1].tabContent}</div>
            </div>
        </div>
    );
  }
  
  export default Body;