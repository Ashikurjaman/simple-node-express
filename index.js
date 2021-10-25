const express = require('express');
const app = express();
const cors = require('cors')



app.use(cors())
app.use(express.json())

const port = 4000; 
app.get('/', (req, res) => {
    res.send('Hello My World!')
  });

  const user = [
    {
        id:0,
        name: 'John',
        Email: 'john@example.com',
        phone: '123-456'
    },
    {
        id:1,
        name: 'maya',
        Email: 'john@example.com',
        phone: '123-456'
    },
    {
        id:2,
        name: 'sagor',
        Email: 'john@example.com',
        phone: '123-456'
    },
    {
        id:3,
        name: 'paki',
        Email: 'john@example.com',
        phone: '123-456'
    },
  ]

 

  app.get('/users', (req, res) => {
      const search= (req.query.search);
      if (search){
        const searchRuselt = user.filter(usr => 
            usr.name.toLocaleLowerCase().includes(search)) 
            res.send(searchRuselt)
      }
      else{
        res.send(user)
      }
      
  });

  app.post ('/users', (req,res) => {
    const newUser = req.body;
    newUser.id = user.length;
    user.push(newUser);
    console.log('ruselt hitting world ', req.body)
    // res.send('ruselt hitting world')
    res.json(newUser);
})

  app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const users = user[id]
    res.send(users);
})



  app.get('/fruit/mango/fazli', (req, res) =>{
      res.send('Yammy Yammy food')
  })

  app.get('/fruit', (req, res) =>{
      res.send(['mango', 'banna', 'orange'])
      
  })

app.listen(port, () => {
    console.log('frist node', port )
  }) ; 