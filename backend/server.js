const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet'); // Importamos helmet
require('dotenv').config(); // Agrega esto para cargar el archivo .env

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet()); // Usamos helmet para aplicar encabezados de seguridad

const cspDirectives = {
  defaultSrc: ["'self'"], // Solo permitir recursos del mismo origen
  scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Permitir scripts locales y dinámicos
  styleSrc: ["'self'", "'unsafe-inline'"], // Permitir estilos locales y embebidos
  imgSrc: ["'self'", "data:", "https:"], // Permitir imágenes locales y seguras
  connectSrc: ["'self'", "https://cluster0-shard-00-01.cdbug.mongodb.net", "http://localhost:3001"], // Conexión a MongoDB Atlas y tu servidor backend- cambiar por el de tu cluster
  fontSrc: ["'self'", "https://fonts.gstatic.com"], // Permitir fuentes externas si se usan
  objectSrc: ["'none'"], // Deshabilitar objetos
  formAction: ["'self'"], // Solo permitir formularios hacia el propio servidor
  upgradeInsecureRequests: [], // Forzar solicitudes HTTPS (opcional)
};

app.use(
  helmet.contentSecurityPolicy({
    directives: cspDirectives,
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  
// Middleware para cachear las tareas
const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl; // clave unica basada en la url de la solicitud

  if (cachedResponse) {
    console.log('Respuesta cacheada para:', key);
    return res.json(cachedResponse);
  }

  console.log('No hay respuesta cacheada para:', key);
  res.sendResponse = res.json;
  res.json = (body) => {
    res.sendResponse(body);
  };

  next();
};

// Routes
app.use('/api/tasks', require('./routes/tasks'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
