dbLABORATORIA = new PouchDB('d202c59d-27bf-4ab7-98b7-03899753eaa9-bluemix:5fea8080f6cfee942b194dd557861257e7d1e5af75d48c0d37450e74f6a0e5be@https://d202c59d-27bf-4ab7-98b7-03899753eaa9-bluemix:5fea8080f6cfee942b194dd557861257e7d1e5af75d48c0d37450e74f6a0e5be@d202c59d-27bf-4ab7-98b7-03899753eaa9-bluemix.cloudantnosqldb.appdomain.cloud/test2');

read = () => {
    dbLABORATORIA.find({
        selector: {_id: {$gt:0}},
        fields: ["Producto","Precio"],
        //sort: ['_id']
      }).then(result => {
        //document.getElementsByClassName("clase").innerHTML= result['docs'][1]['Producto'];
        document.getElementById("o1").innerHTML= result['docs'][0]['Producto'];
        document.getElementById("o2").innerHTML= result['docs'][1]['Producto'];
        document.getElementById("o3").innerHTML= result['docs'][2]['Producto'];
        document.getElementById("o4").innerHTML= result['docs'][3]['Producto'];
        document.getElementById("o5").innerHTML= result['docs'][4]['Producto'];
        document.getElementById("o6").innerHTML= result['docs'][5]['Producto'];
        document.getElementById("o7").innerHTML= result['docs'][6]['Producto'];
        document.getElementById("o8").innerHTML= result['docs'][7]['Producto'];
        document.getElementById("o8").innerHTML= result['docs'][8]['Producto'];
        for (let index = 0; index < 9; index++) {
          console.log(result['docs'][index]['Producto']);
          console.log(result['docs'][index]['Precio']);
        }
        
        // document.getElementById("cotizador").innerHTML= result['docs'][0]['Tema']
      });
    };
    
    //function (result)
    read();
    