const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));


// Rutas
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const imagen = 'https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/03/que-se-necesita-estudiar-para-ser-programador-scaled-1200x900.jpg';
    
    res.render('index.pug', {
      imagen,
      userId, 
      nombre: 'Hola, Soy Luigui Lupacca y este es mi portafolio.',
    });
  });
  
    
  app.get('/user/skills/:id', (req, res) => {
    const userId = req.params.id;
    res.render('skills.pug', {
      userId,
      habilidad1: 'HTML',
      habilidad2: 'CSS',
      habilidad3: 'JavaScript',
      habilidad4: 'Node.js',
      habilidad5: 'Django',
      habilidad6: 'Laravel'
    });
  });
  

app.get('/user/contact/:id', (req, res) => {
  const userId = req.params.id;
  res.render('contact');
  res.render('skills.pug', {
    userId,});
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
