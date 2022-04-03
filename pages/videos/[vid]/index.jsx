import React from 'react';
import ReactPlayer from 'react-player'
import { useRouter } from "next/router";
import {useEffect , useState} from 'react';
import { getMovie , getMovies} from '../../../sevices/fakeMovie';
import SideBar from '../../../components/sideBar';
// import { useDispatch , useSelector} from 'react-redux';
import TopNavbar from '../../../components/topNavbar';
import VideoDetail from '../../../components/videoDetail';
import SimilarVideos from '../../../components/similarVideos';



const PlayVideos = () => {
  // const MainContentClass = useSelector((state) => state.MainContentClass)


    const router = useRouter();
    const video = getMovie(router.query.vid);
    const [videDetailCollapse , collapseDetail] = useState(false);
    let [videos, setVideos] = useState([]);
    const [suggest, setSuggest] = useState(
      [
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
      ]
    );
    const handleCollapse = () => {
      collapseDetail(!videDetailCollapse);
    }

    useEffect(() => {
      setVideos(getMovies());
    }, []);

   
  return   (
     <div className="rtl" >
       <TopNavbar isMainPage={false} suggest={suggest} pageScrolled={false}  />

       <SideBar isMainPage={false} />
       
        <div className="container-fluid " style={{padding : "0" , marginTop : "55px"}}>
  
          <div className="row ">
            <div className="col-7 mt-4">
              <div className="player-wrapper">

              <ReactPlayer width="100%" height="100%"
              controls={true} url='/sample-10s.mp4' />
              </div>

              <VideoDetail 
                video={video} 
                onCollapse={handleCollapse}
                videDetailCollapse={videDetailCollapse}
              />

            </div>
         
            <SimilarVideos videos={videos} />

          </div>
        </div>

    </div>
  )};
 
export default PlayVideos;