app.filter('titlecase',['tcase',
	function(tcase){
		return function(s){
			return tcase.caseConvert(s);
		};
}]);

app.filter('sentencecase',['scase',
	function(scase){
		return function(s){
			return scase.caseConvert(s);
		};
}]);

app.filter('togglecase',['tgcase',
	function(tgcase){
		return function(s){
			return tgcase.caseConvert(s);
		};
}]);