const mongoose =require('mongoose');

const connectDb=async()=>{
    try {
        // const conn=await mongoose.connect('mongodb://localhost:27017/mynewdb')/* by local host */
        const conn=await mongoose.connect('mongodb+srv://mehuljob1234:1234@cluster0.j1wyxxi.mongodb.net/mynewdb')
        /* :1234 in this 12344 is password for mongodb atlas */
        console.log(conn.connection.host);
    }
    catch(error){
        console.log(error);
        /* to remove from node environment */
        process.exit(1)
    }
}

module.exports=connectDb