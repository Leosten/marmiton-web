angular
	.module('marmiton').directive("userComments", function(){
    return {
        restrict: "E",
        scope: false,
        templateUrl: 'app/components/user_comments/user_comments.html',
    };
});