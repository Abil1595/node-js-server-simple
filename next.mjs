 console.log('hello abilash')
// console.log(global)
 //const os= require('os') 
 import os from 'os'
 console.log(os.type())
 console.log(os.version()) 
 //const math=require('./math.js')       
 //const {add,mul,sub}=require('./math')
 import {add,sub,mul} from './math.js'
import { readFile } from 'fs'
 
 console.log(add(3,7))
 console.log(sub(21,7))
 console.log(mul(3,7))

 readFile('./files/start.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)    
 })
 console.log("HIIIIIII")
 process.on('uncaughtException',err=>{
console.error(`There was an uncaught error :${err}`)
  process.exit(1)
 })
