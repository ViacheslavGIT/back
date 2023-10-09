import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/sid', (req, res) => {
  res.send('Hello !!!!111111!')
})

app.post('/sid', (req, res) => {
  res.send('created World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})