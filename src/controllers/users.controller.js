import UserManager from "../daos/clases/mongo/userManager.js"

export default class UsersController {
    constructor() {
        this.usersManager = new UserManager()
    }

    async getUsersController(req, res, next) {
        const result = await this.usersManager.getUsers(req, res, next)
        return result
    }

    async getUserController(email) {
        const result = await this.usersManager.getUser(email)
        return result
    }
}