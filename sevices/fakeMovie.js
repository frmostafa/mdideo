// import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "یه اسنک خوشمزه با برنج!",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "سه روز پیش",
    channel: {_id : "ads43r333333wd" , name: "youtube"},
    user : {_id : "hfvbdfvsfsdw33sjd43skc" , name : "melodifa" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :87,
    dislike : 767 ,
    views :8700
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "مهارت 0 درصد، شانس 100 درصد",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "سه روز پیش",
    channel: {_id : "ads4wfef3rwd" , name :"youtube"},
    user : {_id : "hfvbdfdsffvsjd43skc" , name : "melodifa" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :2000,
    dislike : 2344 ,
    views :2344

  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "طراحی دوباره لباس‌هایی که قرار بود دور بریزید!",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "۱ ماه پیش",
    channel: {_id : "ads43rwd" , name :"youtube"},
    user : {_id : "hfvbdfvsjd43skc" , name : "corona virus" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :270,
    dislike : 12332 ,
    views :4234

  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "خدمتکار رو سرکار گذاشت",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "۱ هفته پیش",
    channel: {_id : "ads43uytfsrerwd" , name :"youtube"},
    user : {_id : "hfvbdjhgferfvsjd43skc" , name : "vira channel" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :789,
    dislike : 7654 ,
    views :654

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "هرکس دیگه ای بود میترسید",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "۱ ماه پیش",
    channel: {_id : "ads43lok87rwd" , name :"youtube"},
    user : {_id : "hfvbdfgdgvhyvsjd43skc" , name : "melodifa" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :23423,
    dislike : 2345 ,
    views :3466
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "تریلر انیمیشن Lamp Life 2020",
    genre: { _id: "5b21cas3eeb7f6fbccd471814", name: "Comedy" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "۱ ماه پیش",
    channel: {_id : "ads4sfdc3rwd" , name: "youtube"},
    user : {_id : "hfvbddghfvsjd43skc" , name : "chetobeto" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :234,
    dislike : 4234, 
    views :24234

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "اسب سوار BoJack | تریلر نهایی فصل 6 | نتفلیکس",
    genre: { _id: "5b21cwa3eeb7f6fbccd471820", name: "Thriller" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "۱ ماه پیش",
    channel: {_id : "ads43werdrwd" , name :"youtube"},
    user : {_id : "hfvbdfvsdfsjd43skc" , name : "mooosik" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :34423,
    dislike : 2434 ,
    views :344

  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "پوست تخم مرغ ها را دور نریزید",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "۱ هفته پیش",
    channel: {_id : "adssdvf4dg3rwd" , name :"youtube"},
    user : {_id : "hfvbdfscxsdgfvsjd43skc" , name : "amirabbass" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :1321342,
    dislike : 2342 ,
    views :35454
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "آموزش کباب کوبیده مصری متفاوت ترین تجربه من در کباب",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "۱ هفته پیش",
    channel: {_id : "ads4rwf3rwd" , name :"youtube"},
    user : {_id : "hfvgdfbdfvsjd43skc" , name : "loren" ,followers :2345},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :3534,
    dislike : 5654 ,
    views :3453

  } ,
   {
    _id: "5b21c31a3eeb7f6sfdfbccd471821",
    title: "آموزش کباب کوبیده مصری متفاوت ترین تجربه من در کباب",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    text : "this video is about blaa blaa blaa",
    videoPic : "https://picsum.photos/350/200",
    dateAdded: "۱ هفته پیش",
    channel: {_id : "ads4rasdawf3rwd" , name :"youtube"},
    user : {_id : "hfvgdfsdasdbdfvsjd43skc" , name : "vinstar" ,followers :2342},
    publishDate: "2018-01-03T19:04:28.809Z",
    like :23893,
    dislike : 243423 ,
    views :342

  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

