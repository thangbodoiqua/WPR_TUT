(function() {
	var inputCode = "";

	function connectHandlers() {
		$('#selector').keyup(updateHighlighting);
		$('#htmlcodeenter').keyup(baseCode);
		baseCode.call($('#htmlcodeenter'));
	}

	function baseCode() {
		inputCode = $(this).val();
		$('#htmlcode').html(convertInput(inputCode));
	}

	function convertInput(input) {
		var colors = ["red", "blue", "green", "purple", "orange", "yellow"];
		var currentColor = 0;
		var colored = false;
		var converted = input.split('\n').map(function(a) {
			var starting = a.indexOf('&SELS;') != -1;
			var ending = a.indexOf('&SELE;') != -1;
			if(starting) {
				colored = true;
			}
			a = a.replace('&SELS;','').replace('&SELE;', '');
			return (starting ? '<span class="selected ' + colors[currentColor++ % colors.length] + '">' : '')
					+ '<div>' + htmlEncode(a) + '</div>' + (ending ? '</span>' : '');
		}).join('\n');
		if(colored) {
			converted = '<span class="selected grey">' + converted + '</span>';
		}
		return converted;
	}

	function updateHighlighting() {
		var search = $(this).val();
		var searchable = $('<div>' + inputCode + '</div>');
		var codes = inputCode;
		try {
			var matches = searchable.find(search);
			for(var i = 0; i < matches.length; i++) {
				var torep = $(matches[i]).html();
				codes = codes.replace(torep, '&SELS;' + torep + '&SELE;');
			}
			$('#htmlcode').html(convertInput(codes));
		} catch(err) {
			// for partial css jquery will crash, so we need to catch it
		}
	}

	function htmlEncode(value) {
		return $('<div/>').text(value).html().replace(/ /g, '&nbsp;');
	}

	function htmlDecode(value) {
		return $('<div/>').html(value.replace(/&nbsp;/g, ' ')).text();
	}

	$(window).load(connectHandlers);
})();
