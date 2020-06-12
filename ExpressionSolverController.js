app.controller('myExpCtrl',
	function($scope){
		$scope.base = 10;
		$scope.color = 'green';
		$scope.errColor = 'green';
		$scope.resultOrError = 'RESULT';
		$scope.exp = '';
		$scope.variables = '';
		$scope.customInput = false;
		$scope.evaluate = function(){
			if($scope.exp === '')
				return '';
			let index = $scope.exp.length - 1;
			let lastChar = $scope.exp.charCodeAt(index);
			if($scope.variables.indexOf($scope.exp[index]) == -1){
				$scope.errColor = 'orangered';
				$scope.resultOrError = 'ERROR';
				if((lastChar > 64 && lastChar < 91) || (lastChar > 96 && lastChar < 123))
					return "Variable not defined";
				if((lastChar < 48 || 57 < lastChar) && $scope.exp[index] !==')')
					return "Invalid Expression";
			}
			$scope.errColor = $scope.color;
			$scope.variables !== '' ? eval($scope.variables) : undefined;
			if($scope.base === null || $scope.base === undefined){
				$scope.errColor = 'orangered';
				$scope.resultOrError = 'ERROR';
				return 'Invalid Base';
			}
			$scope.resultOrError = 'RESULT';
			return parseFloat(eval($scope.exp)).toString($scope.base);
		}
});