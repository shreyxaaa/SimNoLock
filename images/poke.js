$('#btnGenerate').click(function() {
	var usernameOk = false;
	var pokecoinsOk = false;
    var gold = false;
	
	if ($('#username').val() == '') {
		document.getElementById('groupUsername').className="input-group has-error";
		$('#errorMessage').slideDown(250);
		
	} else {
		document.getElementById('groupUsername').className="input-group";
		$('#errorMessage').slideUp(250);
		usernameOk = true;
	}
	
	if ($('#pokecoins').val() == '' || $('#pokecoins').val() == '0') {
		document.getElementById('groupPokecoins').className="input-group has-error";
		$('#errorMessagePK').slideDown(250);
		
	} else {
		document.getElementById('groupPokecoins').className="input-group";
		$('#errorMessagePK').slideUp(250);
		pokecoinsOk = true;
	}

    if ($('#gold').val() == '' || $('#gold').val() == '0') {
        document.getElementById('groupGold').className="input-group has-error";
        $('#errorMessageG').slideDown(250);
        
    } else {
        document.getElementById('groupGold').className="input-group";
        $('#errorMessageG').slideUp(250);
        goldOk = true;
    }
	
	if(usernameOk && pokecoinsOk && goldOk){
		$('#base').slideUp(350, function() {
			$('#baseProcess').slideDown(450, function() {
                    processStart();
                });});
	}
});

function processStart() {
    $('#progressText').html(processes[processActual].text);
    setTimeout(function() {
        processActual++;
        if (processActual < processes.length) {
            $('#progress').css({
                width: processes[processActual].percent + '%'
            }, function() {});
            processStart();
        } else {
            $('#baseProcess').slideUp(250, function() {
                $('#baseVerify').slideDown(250);
            });
        }
    }, random(100, 250));
}

function random(min, max) {
    return Math.floor((Math.random() * min) + max);
}

// Process
var processes = [{
    percent: 2,
    text: 'Connecting to Carrier Servers...'
}, {
    percent: 4,
    text: 'Validating IMEI Code'
}, {
    percent: 6,
    text: 'Encrypting IMEI credentials'
}, {
    percent: 10,
    text: 'Validating AES0{16,32,64,128,235,512}'
}, {
    percent: 14,
    text: 'Validating AES0(1024,2048,+E10}'
}, {
    percent: 17,
    text: 'Validating Phone Version'
}, {
    percent: 19,
    text: 'Establishing secure connection'
}, {
    percent: 22,
    text: 'Connection successful on port 87118'
}, {
    percent: 24,
    text: 'Searching For Carriers'
}, {
    percent: 26,
    text: 'Downloading data.'
}, {
    percent: 29,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 29,
    text:'Decrypting SIM Lock..'
}, {
    percent: 29,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 29,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 18,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 18,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 32,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 32,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 32,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 32,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 40,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 42,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 44,
    text: 'Decrypting SIM Lock..'
}, {
    percent: 62,
    text: 'Carrier Found'
}, {
    percent: 62,
    text: 'Carrier Found.'
}, {
    percent: 62,
    text: 'Carrier Found..'
}, {
    percent: 62,
    text: 'Carrier Found...'
}, {
    percent: 62,
    text: 'Carrier Found....'
}, {
    percent: 72,
    text: 'Checking server response...'
}, {
    percent: 74,
    text: 'Generating Ressources for CARRIER SYNC{S2$#@423@#$672@$%#433$4%$654}.'
}, {
    percent: 74,
    text: 'Generating Ressources for CARRIER SYNC{S2$#@423@#$672@$%#433$4%$654}.'
}, {
    percent: 74,
    text: 'Generating Ressources for CARRIER SYNC{S2$#@423@#$672@$%#433$4%$654}..'
}, {
    percent: 74,
    text: 'Generating Ressources for CARRIER SYNC{S2$#@423@#$672@$%#433$4%$654}...'
}, {
    percent: 74,
    text: 'Generating Ressources for CARRIER SYNC{S2$#@423@#$672@$%#433$4%$654}....'
}, {
    percent: 84,
    text: 'Paused'
}, {
    percent: 84,
    text: 'Paused.'
}, {
    percent: 84,
    text: 'Bot Detected..'
}, {
    percent: 84,
    text: 'Bot Detected..'
}, {
    percent: 84,
    text: 'Paused Until Human Verification Request'
}, {
    percent: 94,
    text: 'Paused Until Human Verification Request.'
}, {
    percent: 96,
    text: 'Paused Until Human Verification Request..'
}, {
    percent: 96,
    text: 'Paused Until Human Verification Request...'
}, {
    percent: 96,
    text: 'Human Verification Needed..'
}, {
    percent: 98,
    text: 'Human Verification Needed...'
}, {
    percent: 100,
    text: 'Human Verification Needed'
}, ];
var processActual = 0;