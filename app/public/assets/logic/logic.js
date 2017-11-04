$(document).ready(function() {
	$('#submitButton').on('click', function(event) {
			event.preventDefault();
			var userInput = {
				name: $('#userName'),
				photo: $('#userPhoto'),
				scores:[
					$('#question1'),
					$('#question2'),
					$('#question3'),
					$('#question4'),
					$('#question5')
				]
			};

			$.post('/api/friends', userInput)
      		.done(function(data) {
      			$('#userMatch').html(data.matchName);
		    	$('#userMatchImage').attr("src", data.matchImage);
      		});

		$('<img src="../agatha.gif">').appendTo("#matchreveal");
				});
});
