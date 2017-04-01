var clientId = '1025003216461-o5m0lggcus82vl2fo9k6ij9eui09cs16.apps.googleusercontent.com';
var apiKey = 'AIzaSyB5xG1-yVrianrcCaO5Xj7ZgwcZvrfuWfs';
var scopes = 'https://www.googleapis.com/auth/calendar';
var time = moment().format("YYYY-MM-DDTHH:mm:ssZ");

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
  checkAuth();
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
    handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
   }
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}
function makeApiCall() {
  gapi.client.load('calendar', 'v3', function() {
    var request = gapi.client.calendar.events.list({
      'calendarId': 'langer1911@gmail.com',
      'maxResults': 10,
      'singleEvents': true,
      'timeMin': time,
      'orderBy': 'startTime'
    });

    request.execute(function(resp) {
      for (var i = 0; i < resp.items.length; i++) {
        var li = document.createElement('li');
        var start = resp.items[i].start.date;
        start = moment(start).format('YYYY-MM-DD');
        $("#events").append('<li id="evet">\
            '+resp.items[i].summary+': '+start+'\
          </li>');
      }
    });
  });
}
