import routes from "routes";

export const localMiddle = (req,res){
    res.locals.routes = routes;
}