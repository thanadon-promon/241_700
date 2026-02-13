const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const app = express();
app.use(bodyParser.json());

const port = 8000;
let users = [];
let counter = 1;

// path: = /
app.get('/users', (req, res) => {
    res.json(users);
});

// path: = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    
    users.push(user);
    res.json({ message: 'User added successfully', user: user });
});

app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;

    let selectedIndex = users.findIndex((user) => user.id == id);

    users[selectedIndex].firstname = updatedUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updatedUser.lastname || users[selectedIndex].lastname;

    if(updatedUser.firstname){
        users[selectedIndex].firstname = updatedUser.firstname;
    }
    if(updatedUser.lastname){
        users[selectedIndex].lastname = updatedUser.lastname;
    }

    res.json({ 
        message: 'User updated successfully', 
        data: { user: updatedUser , indexUpdated: selectedIndex }
    });
});

app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex((user) => user.id == id);
    
    
    
    users.splice(selectedIndex, 1);
    res.json({ 
        message: 'User deleted successfully', 
        indexDeleted: selectedIndex 

    });
})


app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});
