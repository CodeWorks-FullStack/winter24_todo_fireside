import { todosService } from "../services/TodosService.js";
import BaseController from "../utils/BaseController.js";

export class TodosController extends BaseController {
  constructor () {
    super('api/todos')
    this.router
      .get('', this.getTodos)
      .post('', this.createTodo)
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

  /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async createTodo(request, response, next) {
    try {
      const todoData = request.body
      const todo = await todosService.createTodo(todoData)
      response.send(todo)
    } catch (error) {
      next(error)
    }
  }
}