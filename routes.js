//메인 페이지
const home = "/";
const albumDetail = id => {
  if (id) {
    return `/${id}`;
  } else {
    return "/:id";
  }
};

//본인 재생 목록을 확인 몇 번 째인지 알 수 있음.
const myPlayLists = "/my-play-list";
const myPlay = num => {
  if (num) {
    return `/${num}`;
  } else {
    return "/:num";
  }
};

//앨범을 추가
const addAlbum = "/add-album";
//공개된 재생 목록을 확인하는 페이지
const publicPlayList = "/public-play-lists";

const join = "/join";
const login = "/login";

const routes = {
  home,
  albumDetail,
  myPlay,
  myPlayLists,
  addAlbum,
  publicPlayList,
  join,
  login
};

export default routes;
