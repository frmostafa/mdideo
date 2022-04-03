import React, { Component } from 'react';

const VideoDetail = ({video , onCollapse , videDetailCollapse}) => {
    return ( 
        <div className="underVideoDiv">
                    <div className="row" >
                      <div className="col-10 me-4"><p>{video.title}</p></div>
                      <div className="col-1">
                     
                      {!videDetailCollapse && <i className="pointer fa fa-chevron-down" onClick={onCollapse} aria-hidden="true"></i>}
                      {videDetailCollapse && <i className="pointer fa fa-chevron-up" onClick={onCollapse} aria-hidden="true"></i>}
                      </div>
                    </div>

                    <div className="row">
                      <div className="mt-2 col-9">
                      <i className="fa fa-flag me-4 fa-2x grayicon" aria-hidden="true"></i>
                      <i className="fa fa-share-alt me-4 fa-2x grayicon" aria-hidden="true"></i>
                      <button className="me-4 btn btn-success">دانلود</button>
                      </div>
                      <div className="mt-3 col-3">
                          <span>{video.views} <i className="fa fa-eye" aria-hidden="true"></i></span>
                          <img className="me-3" src="../youtube.svg" />
                      </div>
                    </div>

                     <hr/>

                    <div className="row">
                      <div className="col-1 me-2">
                        <img style={{width : "45px"}} src="../procircle.png" />
                      </div>
                      <div className="col-7">
                        <p style={{margin : "0"}}>{video.user.name}</p>
                        <span> {video.user.followers} دنبال کننده </span>
                      </div>
                      <div className="col-3">
                        <button className="btn btn-danger">
                          <i className="fa fa-plus" aria-hidden="true"></i>
                            دنبال کردن
                        </button>
                      </div>
                    </div>

                    <hr/>

                    {videDetailCollapse && 
                    <div className="videoDetailDiv">
                        <div className="row">
                          <div className="me-4 col-2">
                            <span> <i className="ms-3 fa fa-thumbs-down fa-lg" aria-hidden="true"></i>
                            <span style={{color : "#cc0000"}}> {video.dislike} </span>
                            </span>
                          </div>
                          <div className="col-2">
                            <span> <i className="ms-3 fa fa-thumbs-up fa-lg" aria-hidden="true"></i>
                                <span style={{color : "#3cc8ea"}}>{video.like}</span>
                            </span>
                          </div>
                              <p> Hallo semua, kali ini aku membuat makanan renyah dengan bahan dan alat sederhana, siapapun dapat membuatnya. 

                              *silahkan aktifkan subtitle supaya teksnya lebih jelas walau pakai penghemat kuota.

                              Kue ini punya banyak nama ada yang menyebut Kue sarang burung, di pulau Alor NTT disebut Kue Rambut, di Aceh/Melayu disebut Keukarah /Jala/Karas. Biasanya dibuat dengan menggunakan tempurung kelapa yang dilubangi atau cetakan kue jala, berhubung nggak ada, pakai botol bekas saja deh walau seratnya jadi rada beda dari yang asli, tapi tetap kriuk 😁

                              Oh ya aku termotivasi pengen bikin kue ini gara-gara nonton channelnya mas @Santo Sapi Anake Mbok Dirah 🤩, nyong dadi pingin gawe kiye nganggo botol bekas 😁

                              200 gram tepung beras 
                              40 gram tepung maizena
                              50-75 gram gula (aku pakai 50 gram tidak terlalu manis)
                              1 sendok teh garam
                              1/2 sendok teh vanili bubuk (pilihan)
                              165 gram air (tuang bertahap sampai mendapatkan adonan yang kental dan sedikit berat, jika saat digoreng adonan menyebar dan tidak bisa menyatu itu artinya adonan masih keenceran, bisa ditambahkan tepung lagi)

                              WASPADALAH!
                              Seseorang telah membuat halaman palsu di facebook, mencuri video-video Vinastar Channel, dan membuat e-mail palsu mengatasnamakan Vinastar Channel. Mohon direport ya teman teman, dan mohon untuk tidak melakukan kerjasama apapun https://www.facebook.com/vinastarfanspage/ </p>
                          </div>
                      </div>
                      }
               

              </div>
     );
}
 
export default VideoDetail;