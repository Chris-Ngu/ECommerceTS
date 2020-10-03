import Express from 'express';

const app = Express();
const port: number = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});