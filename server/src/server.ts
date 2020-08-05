import Express from 'express';

const app = Express();

app.use(Express.json());

// app.get('/users', (req, resp) => {
//     const users = [
//         { name: "Klever", age: 18 },
//         { name: "Rose", age: 16 }
//     ];

//     return resp.json(users);
// });

app.post('/users', (req, resp) => {
    

    const users = [
        { name: "Klever", age: 18 },
        { name: "Rose", age: 16 }
    ];

    return resp.json(users);
});

app.listen(3333);