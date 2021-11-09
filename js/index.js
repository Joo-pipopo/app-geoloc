var app = {

    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function () {
        alert("onDeviceReady: function{...");
        this.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(
            this.onGeolocationSucess,
            this.onGeolocationError,
            { timeout: 120000 });
    },

    receivedEvent: function (id) {
        //qq faz?
    },

    onGeolocationSucess: function (position) {
        alert("onGeolocationSucess: function(position) {...");
        alert('Latitude:   ' + position.coords.latitude + '\n' +
            'Longitude:   ' + position.coords.longitude + '\n' +
            'Altitude:   ' + position.coords.altitude + '\n' +
            'Accuracy:   ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.alitudeAccuracy + '\n' +
            'Heading:   ' + position.coords.heading + '\n' +
            'speed:   ' + position.coords.speed + '\n' +
            'Timestamp:   ' + position.coords.timestamp + '\n'
        )

        document.getElementById("lat").value = position.coords.latitude;
        document.getElementById("lng").value = position.coords.longitude;
    },

    onGeolocationError: function (err) {
        alert("onGeolocationError:function (position){...");
        alert(err.code + "" + err.message);
    }
};
app.initialize();