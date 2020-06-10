const database= require('../db/sqlserver')

exports.add=(req, res)=>{
    let {firstName, lastName, emailId}=req.body;
    database.execute((sqlserver)=>{
        let query =`INSERT INTO EMPLOYEES(email_address,first_name ,last_name) VALUES('${firstName}', '${lastName}','${emailId}')`;
        return sqlserver.query(query);
    }).then(result=>{
        //console.log(result);
        res.status(200).send({firstName,lastName,emailId});
    })
}

exports.getAll=(req, res)=>{
    let {firstName, lastName, emailId}=req.body;
    database.execute((sqlserver)=>{
        let query ="SELECT * FROM EMPLOYEES";
        return sqlserver.query(query);
    }).then(result=>{
        //console.log(result);
        res.status(200).send(result.recordsets[0]);
    })
}


exports.findById=(req, res)=>res.status(200).send({result:'findById'});

exports.update=(req, res)=>{
    let {firstName, lastName, emailId}=req.body;
    database.execute((sqlserver)=>{
        let query =`UPDATE EMPLOYEES SET email_address='${firstName}', first_name='${lastName}', last_name='${emailId}'`;
        console.log(query);
        return sqlserver.query(query);
    }).then(result=>{
        //console.log(result);
        res.status(200).send({firstName,lastName,emailId});
    })
}

exports.delete=(req, res)=>{
    let {id}=req.params;
    database.execute((sqlserver)=>{
        let query =`DELETE EMPLOYEES WHERE id= ${id}`;
        console.log(query);
        return sqlserver.query(query);
    }).then(result=>{
        //console.log(result);
        if(result.rowsAffected!=0){
            res.status(200).send({deleted:'true'});
        }else{
            res.status(200).send({deleted:'false'});
        }
    })
}
