import { UserController } from "../Controllers/User.js";

const userConnect = new UserController();

export function connectUsersRoutes(router) {

    router.post('/singin', userConnect.createAccount );

    router.post('/login', userConnect.validateLogin );

    router.post('/logout', userConnect.logoutUser );

}