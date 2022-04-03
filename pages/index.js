
// import styles from '../styles/Home.module.css';
import React from 'react'
import { getMovies } from '../sevices/fakeMovie';
import MainVideoList from '../components/mainVideoList';
import SearchAutoComplete from '../components/searchAutoComplete';
import ChannelImageInHeader from '../components/channelImageInHeader';
import TopNavbar from '../components/topNavbar';
import mainTemplate, {sideBarCollapsed, toggleSideBarIS} from '../store/mainTemplate';
import StoreConfig from '../store/storeConfig';
import { connect } from 'react-redux';
import SideBar from '../components/sideBar';

class Home extends React.Component {
  
  state = {
    videos : [],
    pageScrolled : false,
    scroll : 0 ,
    suggest : [
      "Alligator",
      "Bask",
      "Crocodilian",
      "Death Roll",
      "Eggs",
      "Jaws",
      "Reptile",
      "Solitary",
      "Tail",
      "Wetlands"
    ],
  }
  componentDidMount = () => {
    const videos = [...getMovies()];
    this.setState({videos});
    window.addEventListener('scroll' , this.handleChangeNavOnScroll);
  }
 
  handleChangeNavOnScroll = () => {
    this.setState({scroll : window.scrollY});
    const pageScrolled = (window.scrollY > 150 ? true : false);
    this.setState({pageScrolled})
  }
 
  render() { 
    const MainContentClass = this.props.MainContentClass;
  
    return (
      <div className="rtl" >

        <TopNavbar isMainPage={true} suggest={this.state.suggest} pageScrolled={this.state.pageScrolled}  />

        
        <SideBar scroll={this.state.scroll} isMainPage={true}/>
          
        

          <div className="container-fluid " style={{padding : "0"}}>

            <div className="searchdiv">
              <img  variant="top" style={{marginTop : '15px', height : '50px' , width : '300px'}} src="logo.svg" />
              <div className="row justify-content-center">
                <div className="mt-4 col-7 p-0 align-self-center">
                    <SearchAutoComplete
                      suggestions={this.state.suggest}
                      placement="searchbar"
                    />
                </div>
              </div>
              <ChannelImageInHeader />
            </div>

            <div className={MainContentClass}>
              <MainVideoList videos={this.state.videos} headerLabel="پیشنهادات" />
              <MainVideoList videos={this.state.videos} headerLabel="انیمیشن" />
              <MainVideoList videos={this.state.videos} headerLabel="فیلم و سریال" />
            </div>
          </div>
    </div>
    );
  }
}
 
// const mapStateToProps = state => ({
//   sideBarCollapsedIS : state.mainTemplate.sideBarCollapsed,
//   MainContentClass : state.mainTemplate.MainContentClass
// });
// const mapDispatchToProps = dispatch => ({
//   sideBarCollapsed : () => dispatch(sideBarCollapsed()),


// })
// export default connect(mapStateToProps , mapDispatchToProps)(Home);
export default Home;
