const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let tasks = [
  {
    id: 1,
    task: "write the route to get all task"
  },

  {
    id: 2,
    task: "write the route to get one task by ID"
  },

  {
    id: 3,
    task: "write the route to create a new task"
  },

  {
    id: 4,
    task: "write the route to update a task"
  },
  {
    id: 5,
    task: "write the route to delete a task"
  }
]


// TEST ROUTE
app.get('/', (req, res) => {
  res.send('server running...')
})


// TASK ROUTES
// GET ALL TASKS
app.get('/tasks', (req, res) => {
  // res.status(200).json(tasks)
  res.send(tasks)
})

// GET ON TASK WITH ID
app.get('/:id/tasks', (req, res) => {
  const taskId = req.params.id
  // console.log(tasks[taskId].task)
    res.send(tasks[taskId].task)
})


// CREATE A TASK
app.post('/tasks', (req, res) => {
  const { id, task } = req.body
  // console.log('body', req.body)

  let newTask = {
      id: id,
      task: task
  }
  tasks.push(newTask)
  res.send(tasks)
})


// UPDATING A TAST
app.put('/:id/tasks', (req, res) => {
  const editTask = tasks.find(t => t.id == parseInt(req.params.id))
  editTask.task = req.body.task
  res.send(tasks)
})


// DELETING A TASK
app.delete('/:id/tasks', (req, res) => {
  const deleteTask = tasks.find(t => t.id == parseInt(req.params.id))
  
  const index = tasks.indexOf(deleteTask)
  tasks.splice(index, 1)
  res.send(tasks)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

