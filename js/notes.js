$(function() {
    $('#notes-form').on('submit', function() {
    	let noteText = $('#note-text').val();
    	if (noteText == undefined || noteText == '') {
    		return false
    	}
	    takeNote(noteText);
	    $('#note-text').val('');
	    return false;
	});

	$('#clearBtn').on('click', function() {
		clearNotes();
	})

	if (localStorage.notes != undefined) {
		$('#notes').html(localStorage.notes);
	}
});

function takeNote(text) {
	let timeStamp = getTimeStamp();
	let note = "<li><b>" + timeStamp + "</b> - " + text + "</li>";
	$('#notes').append(note);
	localStorage.notes = $('#notes').html();
}

function getTimeStamp() {
    return new Date().toLocaleTimeString();
}

function clearNotes() {
	let response = confirm("Are you sure you want to clear your notes?");
	if (response) {
    	localStorage.notes = '';
		$('#notes').html('');
	}
}