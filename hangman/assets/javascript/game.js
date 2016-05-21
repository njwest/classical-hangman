$(document).ready(function(){	
	var wins = 0;
	var guessCounter = 12;
	var lettersGuessed = undefined;

	var words = [['b','r','a','h','m','s'],['p','r','o','k','o','f','i','e','v'],['b','e','e','t','h','o','v','e','n']];

	//var words = ['brahms', 'prokofiev', 'beethoven'];


	var word = ['b','r','a','h','m','s'];

	letters = document.getElementById("wordspace");
	letters.innerHTML = 'Current word: <br>';

	var letter;
	for(var l = 0; l < word.length; l++){
		letter = '<li class="letter">' + word.charAt(l) + '</li>';	}

	//for(var l = 0; l <word.length; l++){
		//var characters = "_ ";
		//$('.wordspace').append(characters);
	//}

	//for(var w = 0; w < words.length; w++){
	//var curWord = words[(Math.floor(Math.random() * words.length))];

		//for(var l = 0; l < curWord.length; l++){
			//	var characters = "_ ";
				//$('.wordspace').append(characters);
			//}

	//}


})
