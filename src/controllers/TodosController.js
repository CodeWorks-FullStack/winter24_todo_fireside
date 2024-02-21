import { todosService } from "../services/TodosService.js";
import BaseController from "../utils/BaseController.js";

export class TodosController extends BaseController {
  constructor () {
    super('api/todos')
    this.router
      .get('', this.getTodos)
  }

  /**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */
  async getTodos(request, response, next) {
    try {
      const todos = await todosService.getTodos()
      response.send(todos)
    } catch (error) {
      next(error)
    }
  }
}