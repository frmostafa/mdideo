import React from 'react';
import Link from 'next/link'


const SimilarVideos = ({videos}) => {
    const ROUTE_VIDEOS_ID = "/videos/[vid]";

    return ( 
        <div className="col-5 ">
       
         <div className="row mt-4">
             <div className="col-7">ویدئو‌ها‌ی مشابه</div>
         </div>    
           
        {videos.map(video => (
          <Link
          key={video._id}
          href={{
          pathname: ROUTE_VIDEOS_ID,
          query: { vid: video._id }
          }}
          >
          
          <div key={video._id} className="row pointer">


              <div  className="col-5 mt-4">
              <img src={video.videoPic} className="img-fluid" />

              </div>
            <div className="col-7 mt-4">
                  <p>{video.title} </p>
                    <p>{video.dateAdded}</p>
            </div>
          </div>

          </Link>
        ))}
        
    </div>
     );
}
 
export default SimilarVideos;