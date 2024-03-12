import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from 'compression'
import userRoute from './routes/userRouter';

require('dotenv').config();


const port = process.env.PORT || 5000;
const app = express()

app.use(cookieParser())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials: true,
origin: "http://localhost:5173"}))



app.use('/api/register',userRoute)

app.listen(port, () => {
  
  console.log(`Listening: http://localhost:${port}`);

});