import React, { Component } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";



class MainVideoList extends React.Component {
    state = {
        seeMoreVideo : false
    }
     toggleseeMoreVideo = () => {
    const seeMoreVideo = !this.state.seeMoreVideo;
    this.setState({ seeMoreVideo });
     }
  
    render() { 
        const ROUTE_VIDEOS_ID = "videos/[vid]";

        let videos = this.props.videos;
        const mainVideoList = videos.slice(0, 5);
        let collapsedViseoList = videos.slice(5, 10);
        const showToggle = (this.state.seeMoreVideo) ? "show" : "" ;
        const {headerLabel} = this.props;
        return (<div className="ms-4 me-4 mt-4">
                <div className="row">
                    <div className="col-1">
                    <p>{headerLabel}</p>
                    </div>
                    <div className="col"><hr className="stylehrred"/></div>
                </div>


                <div className="row row-cols-5 mt-2">
                    {mainVideoList.map(video =>(
                        <Link
                            key={video._id}
                            href={{
                            pathname: ROUTE_VIDEOS_ID,
                            query: { vid: video._id }
                            }}
                        >
                            <div key={video._id} className=" mt-2 pointer">
                                <img src={video.videoPic} className="img-fluid" />
                                <p className="thumbtitle">{video.title}</p>
                                <p className="thumbtime">{video.dateAdded}</p>
                            </div>
                        </Link>
                    ))}
                ‍</div>
                
                
                    {!this.state.seeMoreVideo && <p  className="text-start pointer" style={{alignItems: 'end'}} onClick={this.toggleseeMoreVideo} >نمایش بیشتر<i aria-hidden="true" className="fa fa-plus"></i></p>}
              
                
                   
                    <div  className={" row row-cols-5 mt-2 collapse" + showToggle} >
                        {collapsedViseoList.map(video =>(
                            <Link
                                key={video._id}
                                href={{
                                pathname: ROUTE_VIDEOS_ID,
                                query: { vid: video._id }
                                }}
                            > 
                                <div   className=" mt-2 pointer">
                                    <img src="https://picsum.photos/350/200" className="img-fluid" />
                                    <p className="thumbtitle">{video.title}</p>
                                    <p className="thumbtime">{video.dateAdded}</p>
                                </div>
                            </Link>
                            ))}
                    </div>
                      
                
            
         </div>);
    }
}
 
export default MainVideoList;