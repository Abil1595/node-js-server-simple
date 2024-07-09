//const fs=require('fs')
const path=require('path')
const fsPromises=require('fs').promises    
const fileOps=async()=>{    
    try{
        const data= await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname,'files','subscribe.txt'),'new videos ')
            console.log('write complete') 
        await fsPromises.appendFile(path.join(__dirname,'files','subscribe.txt'),'\n\n Thank you all again ')
                console.log('append complete')  
        await fsPromises.rename(path.join(__dirname,'files','subscribe.txt'),path.join(__dirname,'files','thanks1.txt'))
                    console.log('append complete')   
        await fsPromises.unlink(path.join(__dirname,'files','start.txt'))
    }
    catch(err)  
    {
        console.error(err)               
    }
}
fileOps()

{/*fs.readFile(path.join(__dirname,'files','start.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)    
 })
 console.log("HIIIIIII")

 fs.writeFile(path.join(__dirname,'files','subscribe.txt'),'new videos ',(err)=>{
    if(err) throw err;
    console.log('write complete')    
    fs.appendFile(path.join(__dirname,'files','subscribe.txt'),'\n\n Thank you ',(err)=>{
        if(err) throw err;
        console.log('append complete')    
        fs.rename(path.join(__dirname,'files','subscribe.txt'),path.join(__dirname,'files','thanks.txt'),(err)=>{
            if(err) throw err;
            console.log('append complete')    
            
         })
        
     })
 }) 
     */}
  process.on('uncaughtException',err=>{
console.error(`There was an uncaught error :${err}`)
  process.exit(1)
 })