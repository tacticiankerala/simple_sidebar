angular.module('directive.sidebar', [])

.directive('sidebar',function($location){
	'use strict';
	return {
		templateUrl: 'directive/sidebar/sidebar.tpl.html',
		replace: true,
		scope: {
			options: '='
		},
		controller: function($scope){
			$scope.needToHide = function(){
				if($scope.options && $scope.options.hide && $scope.options.hide.indexOf($location.path())){
					return false;
				}
				return true;
			};
		}
	};
})

;