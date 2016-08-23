/**
 * Created by steven on 8/22/16.
 */

app.controller("menuController",function($scope){
    $scope.loadMenu = function(){
        $('#side-menu').metisMenu();
    }
});
