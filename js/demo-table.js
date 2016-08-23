/* http://www.mocky.io/v2/5790a35926000085167ee533
   URL generada con datos aleatorios
*/

var app = angular.module("myapp", ["ngTable"]);
app.controller("tableController",tableController);

tableController.$inject = ["NgTableParams","$http"];
function tableController(NgTableParams,$http){
  console.log("hello!");
  var self = this;
  var url = "http://www.mocky.io/v2/5790a35926000085167ee533/?callback=JSON_CALLBACK";
  self.tableParams = new NgTableParams({
    count: 5 // initial page size
  });

  self.tableParams.settings({
    counts: [5,10,20] // initial page size
  });

  self.cols = [
    { field: "age", title: "Edad", filter: { age: "number"}, sortable: "age", show: true},
    { field: "company", title: "Empresa", filter: { company: "text"}, sortable: "company",show: true},
    { field: "email", title: "Correo", filter: { email: "text"}, sortable:"email",show: true}
  ];

  $http.jsonp(url).then(function(response){
    console.log(response.data);
    self.tableParams.settings(
      {
        dataset: response.data
      }

    );
  });


}
