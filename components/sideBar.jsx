import React , { useState , useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import mainTemplate, {sideBarCollapsed, increment} from '../store/mainTemplate';
import Link from 'next/link'

const SideBar = (props) => {
    const dispatch = useDispatch();
    const sideBarClass = useSelector((state) => state.mainTemplate.sidesideBarClass)
    const sideBarItemsTitleClass = useSelector((state) => state.mainTemplate.sideBarItemsTitleClass)
    const ROUTE_Home = "/";


    const ulMargin = () => {
      if(props.isMainPage){
        if(!props.scroll || props.scroll === 0){
          return 200;
        }
        if(props.scroll && props.scroll < 200){
          let margin = (200 - props.scroll)
          return margin;
        }
        if(props.scroll && props.scroll > 200){
          return 0;
        }
      }
      if(!props.isMainPage){
      return 0
      }
    }
    const [constantsideBarItems, setonce] = useState(
        [
            {id : "1" , name : "خانه" ,iconClass : "home"} ,
            {id : "2" , name : "حامام", iconClass : "bath"},
            {id : "3" , name : "تلگرام",iconClass : "telegram"},
            {id : "4" , name : "اتوبوس",iconClass : "bus"},
            {id : "5" , name : "فیسبوک",iconClass : "facebook"}
            ]
    );
    useEffect(() => {
        // Run! Like go get some data from an API.

      }, );
    return ( 
        <div className={sideBarClass} >
          <ul style={{marginTop: ulMargin() + "px"}} className={`p-0 sideBarUl nav nav-pills flex-column mb-auto me-4}`}>
            {constantsideBarItems.map(item => (
               <Link
               key={item.id}
               href={{
               pathname: ROUTE_Home,
               }}
           >
              <li className="sideBarItemsli"  key={item.id}>
                <div>
                  <i className={"pointer sidebarIcon fa-lg fa fa-" + item.iconClass}></i>
                  <div style={{display:'inline'}}>
                    <p  className={sideBarItemsTitleClass}>{item.name}</p>
                  </div>
                </div>
              </li>
           </Link>
             
            ))}
          </ul>
        </div>
     );
}
 
export default SideBar;


{/* <div className={sideBarClass} >
<ul style={{marginTop: ulMargin() + "px"}} className={`p-0 sideBarUl nav nav-pills flex-column mb-auto me-4}`}>
  {constantsideBarItems.map(item => (
    <li className="sideBarItemsli"  key={item.id}>
      <div>
        <i className={"sidebarIcon fa-lg fa fa-" + item.iconClass}></i>
        <div style={{display:'inline'}}>
          <p  className={sideBarItemsTitleClass}>{item.name}</p>
        </div>
      </div>
    </li>
  ))}
</ul>
</div> */}