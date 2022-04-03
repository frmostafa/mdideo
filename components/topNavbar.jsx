import React from 'react';
import SearchAutoComplete from '../components/searchAutoComplete';
import { useDispatch , useSelector} from 'react-redux';
import {toggleSideBarIS} from '../store/mainTemplate';
import Link from 'next/link'



const TopNavbar = ({suggest ,pageScrolled , isMainPage}) => {
    const jwt = useSelector((state) => state.auth.jwt);
    const dispatch = useDispatch();
    const ROUTE_Login = "/auth/login";
    console.log(jwt);


    return ( 
        <nav className="topNavColor navbar navbar-expand-md navbar-light  fixed-top ">
        <div className="container-fluid">


            {!jwt && 
            <Link
               href={{
               pathname: ROUTE_Login,
               }}
             >
                 
                 <p className="navBarText pointer navbar-brand" ><i className="grayicon fa fa-user" aria-hidden="true"></i>
                    ورود</p>

           </Link>
            }
            {jwt && 
            <img style={{width : '40px'}} className="pointer " src="procircle.png" />
            }
        
            {pageScrolled && isMainPage &&
            <div className="row">
            <div className="col">
            <SearchAutoComplete
                    suggestions={suggest}
                    placement="navbar"
                />
            </div>
            </div>}


            
            {pageScrolled && isMainPage &&
            <div>
            <img  variant="top" style={{marginLeft : '15px', height : '17px' , width : 'auto'}} src="logo.svg" />
            </div>
            }

            {!isMainPage &&
                        <div className="row">
                        <div className="col">
                        <SearchAutoComplete
                                suggestions={suggest}
                                placement="navbar"
                            />
                        </div>
                        </div>}


            
            {!isMainPage &&
            <div>
            <img  variant="top" style={{marginLeft : '15px', height : '17px' , width : 'auto'}} src="logo.svg" />
            </div>
            }
            
            <i onClick={() => dispatch(toggleSideBarIS())} className="ms-2 fa fa-bars fa-lg"></i>


          
            
            
        </div>
    </nav>
     );
}
 
export default TopNavbar;

