import UserManager from "../daos/clases/mongo/userManager.js"

export default class UsersController {
    constructor() {
        this.usersManager = new UserManager()
    }

<<<<<<< HEAD
    async getUsersController(req, res, next) {
        const result = await this.usersManager.getUsers(req, res, next)
        return result
=======
    async getUsersController (req, res, next) {
        let limit = Number(req.query.limit) || 10
        let page = Number(req.query.page)
        let sort = Number(req.query.sort)
        let filter = req.query.filter
        let filterVal = req.query.filterVal
        const result = await this.usersManager.getUsers(
          limit,
          page,
          sort,
          filter,
          filterVal
        );
        res.send(result)
        return;
>>>>>>> 8721c279582fa38a04e87bc8a4bbb20dd1da1c2d
    }

    async getUserController(email) {
        const result = await this.usersManager.getUser(email)
        return result
    }
}