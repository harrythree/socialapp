angular.module('app')
.controller('PostCtrl', function ($scope, PostsSrv) {
  $scope.addPost = function() {
    if ($scope.postBody) {
      PostsSrv.create({
        username: 'harrythree',
        body: $scope.postBody
      }).success(function (post) {
        $scope.posts.unshift(post);
        $scope.postBody = null;
      });
    }
  };

  PostsSrv.fetch().success(function (posts) {
    $scope.posts = posts;
  });
});