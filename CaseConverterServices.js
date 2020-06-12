app.service('tcase',
	function(){
		this.caseConvert = function(s){
			if(s === '')
				return '';
			s = s.toLowerCase();
			s = s.replace(s[0], s[0].toUpperCase());
			if(s.length == 1)
				return s;
			t = s[0];
			for(let i=1; i<s.length; i++){
				if(s[i-1] === '\n')
					if(s[i] === ' ' || s[i-1] === '.' || s[i-1] === '!' || s[i-1] === '?')
						t += s[i].toUpperCase();
				if(s[i-1] === ' ' || s[i-1] === '.' || s[i-1] === '!' || s[i-1] === '?')
					t += s[i].toUpperCase();
				else
					t += s[i];
			}
			return t;
		}
});

app.service('scase',
	function(){
		this.caseConvert = function(s){
			if(s === '')
				return '';
			s = s.toLowerCase()
			s = s.replace(s[0],s[0].toUpperCase());
			if(s.length == 1)
				return;
			t = s[0];
			for(let i=1; i<s.length; i++){
				if(s[i-1] === '\n')
					if(s[i-1] === '.' || s[i-1] === '!' || s[i-1] === '?')
						t += s[i].toUpperCase();	
				if(s[i-1] === '.' || s[i-1] === '!' || s[i-1] === '?')
					t += s[i].toUpperCase();
				else
					t += s[i];
			}
			return t;
		}
});

app.service('tgcase',
	function(){
		this.caseConvert = function(s){
			if(s === '')
				return '';
			s = s.toUpperCase();
			s = s.replace(s[0], s[0].toLowerCase());
			if(s.length == 1)
				return s;
			t = s[0];
			for(let i=1; i<s.length; i++){
				if(s[i-1] === '\n')
					if(s[i] === ' ' || s[i-1] === '.' || s[i-1] === '!' || s[i-1] === '?')
						t += s[i].toLowerCase();
				if(s[i-1] === ' ' || s[i-1] === '.' || s[i-1] === '!' || s[i-1] === '?')
					t += s[i].toLowerCase();
				else
					t += s[i];
			}
			return t;	
		}
});