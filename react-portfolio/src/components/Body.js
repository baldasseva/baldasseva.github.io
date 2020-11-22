import tabsData from '../assets/Contents';
import eva from '../assets/eva.png';
import './Body.scss';

import Home from './tabs/Home';
import Games from './tabs/Games';
import Design from './tabs/Design';
import Coding from './tabs/Coding';

function Body(props) {

    let content = <Home/>;
    switch(props.selectedTab){
        case 0: content = <Home/>; break;
        case 1: content = <Coding/>; break;
        case 2: content = <Design/>; break;
        case 3: content = <Games/>; break;
        default: content = <Home/>; break;
    }

    return (
        <div>
            <img className="eva" src={eva} alt="Eva"/> 
            <div className="tabs-container">
                <div className="tabs-title">{props.selectedTab !== 0? tabsData[props.selectedTab].tabName : null}</div>
                <div className="tabs-content">
                    {props.selectedTab !== 0? tabsData[props.selectedTab].tabContent : null}
                    {content}
                </div>
            </div>
        </div>
    );
  }
  
  export default Body;