const express = require('express')
const router = express.Router()
const Task = require('../models/Task')


// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Crear una nueva tarea
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status
  })

  try {
    const newTask = await task.save()
    res.status(201).json(newTask)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Actualizar una tarea
router.patch('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' })
    }

    if (req.body.title != null) {
      task.title = req.body.title
    }
    if (req.body.description != null) {
      task.description = req.body.description
    }
    if (req.body.status != null) {
      task.status = req.body.status
    }
    task.updatedAt = Date.now()

    const updatedTask = await task.save()
    res.json(updatedTask)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: 'Task deleted successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error', error: err.message })
  }
})

module.exports = router
