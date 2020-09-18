import express from 'express';
import createUser from './services/CreateUser';

const app = express();

app.get('/', (request, response) => {
    const user = createUser({
        email: 'pedroberorato@gmail.com',
        password: '12345',
        techs: [
            'Node.js', 
            'ReactJS',
            { title: 'JavaScript', experience: 100 },
        ]
    });

    console.log(user.email);

    return response.json({ message: 'Hello World'});
});



app.listen(3333);