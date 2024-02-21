import { todosService } from "../services/TodosService.js";
import BaseController from "../utils/BaseController.js";

export class TodosController extends BaseController {
  constructor () {
    super('api/todos')
    this.router
      .get('', this.getTodos)
      .post('', this.createTodo)
      .put('/:todoId', this.updateTodo)
      .delete('/:todoId', this.destroyTodo)
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
  /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */

  async updateTodo(request, response, next) {
    try {
      const todoData = request.body
      const todoId = request.params.todoId
      const todo = await todosService.updateTodo(todoId, todoData)
      response.send(todo)
    } catch (error) {
      next(error)
    }
  }
  /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */

  async destroyTodo(request, response, next) {
    try {
      const todoId = request.params.todoId
      const message = await todosService.destroyTodo(todoId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }
}

