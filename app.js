var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers';
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
    {
    name:'The Book of Trees',
      price: 19,
      pubdate: new Date ('2014','03','08'),
      cover:'img/book-of-trees.jpg',
      likes: 0,
      dislikes: 0
    },
     {
    name:'Program or be Programmed',
      price: 8,
      pubdate: new Date ('2013','08','01'),
      cover:'img/program.jpg',
      likes: 0,
      dislikes: 0
    },
    	{
    name:'The Martian',
        price: 12.50,
        pubdate: new Date ('2014', '06', '02'),
        cover:'img/martian.jpeg',
        likes: 0,
        dislikes: 0
    },
    {
    name:'The Magicians',
        price: 10,
        pubdate: new Date ('2009', '11', '08'),
        cover:'img/magicians.jpg',
      	likes: 0,
      	dislikes: 0
    }
  ]

  $scope.plusOne = function(index) {
    $scope.products[index].likes +=1;
  };

	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes +=1;
  };

}]);
