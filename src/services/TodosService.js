import { dbContext } from "../db/DbContext.js"

class TodosService {
  async getTodos() {
    const todos = await dbContext.Todos.find()
    return todos
  }
}

export const todosService = new TodosService()