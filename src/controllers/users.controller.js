import UserManager from "../daos/clases/mongo/userManager.js"

export default class UsersController {
    constructor() {
        this.usersManager = new UserManager()
    }

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
    }

    async getUserController(email) {
        const result = await this.usersManager.getUser(email)
        return result
    }
}