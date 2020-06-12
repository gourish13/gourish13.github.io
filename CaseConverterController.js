app.controller('casectrl',
	function($scope){
		$scope.text = '';
		$scope.case = 'select';
		$scope.cases = [
			{key:'uppercase', value:'Upper case'},
			{key:'lowercase', value:'Lower case'},
			{key:'titlecase',value:'Title case'},
			{key:'sentencecase',value:'Sentence case'},
			{key:'togglecase',value:'Toggle case'}
		];
});