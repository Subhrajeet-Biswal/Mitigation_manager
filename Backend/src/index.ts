require('dotenv').config();
const connection = require('./db/connection.ts');
const PORT = require('./constant.ts');
const {app} = require('./app.ts')


connection.connectdb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server listening at port ${PORT}`);
    })
})
.catch((err:any)=>{
    console.log("DB connection failed! ",err);
})




// console.log(`server listening at port ${PORT}`);