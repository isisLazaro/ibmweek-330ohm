dbLABORATORIA = new PouchDB('d202c59d-27bf-4ab7-98b7-03899753eaa9-bluemix:5fea8080f6cfee942b194dd557861257e7d1e5af75d48c0d37450e74f6a0e5be@https://d202c59d-27bf-4ab7-98b7-03899753eaa9-bluemix:5fea8080f6cfee942b194dd557861257e7d1e5af75d48c0d37450e74f6a0e5be@d202c59d-27bf-4ab7-98b7-03899753eaa9-bluemix.cloudantnosqldb.appdomain.cloud/test2');

function read(){
    dbLABORATORIA.find({
        selector: {_id: {$gt:0}},
        sort: ['_id']
        /* selector: {_index: {$gt:0}},
        sort: ['_index'] */
      }).then(function (result) {
        console.log(result['docs']);
        // document.getElementById("cotizador").innerHTML= result['docs'][0]['Tema']
      });
    };
   
    console.log(read());
    //{"index":}
    
    