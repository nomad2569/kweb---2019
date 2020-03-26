import express from "express";
import app from "../app";
import routes from "../routes";
import { home } from "../controllers/globalController";

const globalRouter = express.Router();

//3 등록된 전체 앨범
globalRouter.get(routes.home, home);
//4 앨범 내 수록곡
globalRouter.get(routes.albumDetail());

//5 본인 재생 목록들
globalRouter.get(routes.myPlayLists);
//5+ 본인 재생 목록
globalRouter.get(`${routes.myPlayLists}${routes.myPlay()}`);

//6 앨범 추가
globalRouter.get(routes.addAlbum);

//7 공개된 재생 목록 확인 (필수 x)
//globalRouter.get(routes.publicPlayList);

export default globalRouter;
