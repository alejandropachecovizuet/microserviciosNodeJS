const sqlserver = require('mssql');

let execute= (callback)=>new Promise((resolve, reject)=>{
               let config = {user: 'sa', server: '172.17.0.2', port:1433 ,database: 'EMPLOYEES', password: '1qaz2wsx$1A',  stream: false,
               options: {
                 enableArithAbort: true,
                 encrypt: true
               }};               
               console.log('[SQL] conection:',config);
               sqlserver.connect(config).then(() => callback(sqlserver)).then(result => {
                    console.dir('[SQL]Result',result)
                    sqlserver.close();
                    resolve(result);
                }).catch(err => {
                    console.error('[SQL]Error',err);
                    sqlserver.close();
                    reject(err);
                });
            });

exports.execute=execute;