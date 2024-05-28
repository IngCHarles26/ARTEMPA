import express from "express"
import cors from 'cors'
import dataBase from "./dataBase";


const PORT = process.env.SERVER_PORT || 3001;
const server = express()

async function DBconection(){
  try{
    await dataBase.authenticate();
    dataBase.sync()
    console.log('data base conected')
  }catch(err){
    console.log(err)
  }
}
DBconection()

server.use(express.json())
//cors
server.use(cors({
  origin:['http://localhost:5173']
}))



server.listen(PORT,()=>{
  console.log('Server on...')
})
