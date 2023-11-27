
angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-blog-0y4o.onrender.com/postagens').
      success(function(data) {
        data.forEach(data => {
          console.log(data.title);
        });
        console.log(data[0]);
          $scope.publicacoes = data;
      }
  );
});


angular.module('blogMax', []);
angular.module('blogMax').controller('RestMax', function ($scope, $http){

  function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
    }
    var ident = getParameter('ident');
    console.log(ident);
    urlink = "https://api-blog-0y4o.onrender.com/postagem/"+ident;
    console.log(urlink);

    $http.get(`${urlink}`).
    success(function(data) {
      console.log(data);
        $scope.postagem = data;
    }
);

});