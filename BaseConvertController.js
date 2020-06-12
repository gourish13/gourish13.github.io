app.controller('basechangectrl', 
	function($scope){
		$scope.color;
		$scope.inbase = 10;
		$scope.outbase = 10;
		$scope.input = '';
		$scope.convertBase = function(){
			$scope.color = "orangered";
			if($scope.inbase === null || $scope.inbase === undefined)
				return 'Invalid Base for Input Value';
			if($scope.outbase === null || $scope.outbase === undefined)
				return 'Invalid Base for Output Value';
			if($scope.input === null || $scope.input == undefined)
				return null;
			let base = Number($scope.inbase)
			baseLim = base <= 10 ? base + 47 : base + 86;
			for(let i in $scope.input)
				if($scope.input.charCodeAt(i) > baseLim)
					return 'Invalid Input Value for base ' + base;
			$scope.color = "limegreen";
			let output;
			if($scope.inbase == 10)
				output =  parseInt($scope.input).toString($scope.outbase);
			else
				output = parseInt($scope.input, $scope.inbase).toString($scope.outbase);
			return output === 'NaN' ? '' : output;
		};
});