(function(){
  //bringing in the express library to use, similar to bringing jquery into the browser
  let express = require("express");
  //app is equal to whatever express returns, all the functionality express has
  let app = express();

    app.get('/', function(req, res){
      res.send("<div>Hello world</div>");
    })

    app.get('/api/pets', function(req, res){

      res.send({
          "data": {
            "pets": [
              {
                "id": 1,
                "name": "Fluffy",
                "age": 5,
                "uri": "/api/pets/1"
              }, {
                "id": 2,
                "name": "Bob",
                "age": 6,
                "uri": "/api/pets/2"
              }
            ]
          }
        });
    })
    //http://localhost:4786/api/pets/1
    app.get('/api/pets/1', function(req, res){

      res.send({

                "id": 1,
                "name": "Fluffy",
                "age": 5,
                "uri": "/api/pets/1"
        });
    });

    //http://localhost:4786/api/pets/2
    app.get('/api/pets/2', function(req, res){

      res.send({

              "id": 2,
              "name": "Bob",
              "age": 6,
              "type": "cat"
        });
    });




    app.listen(4786, () => {
      console.log('Example app listening on port 4786!')
    })

})();
