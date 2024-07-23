document.addEventListener('DOMContentLoaded', () => {
    const startLocation = document.getElementById('start-location');
    const endLocation = document.getElementById('end-location');

    // Start Ride Section
    const residentialDetails = document.getElementById('residential-details');
    const hotelDetails = document.getElementById('hotel-details');
    const businessDetails = document.getElementById('business-details');
    const airportDetails = document.getElementById('airport-details');

    const hotelLocationType = document.getElementById('hotel-location-type');
    const hotelRoom = document.getElementById('hotel-room');
    const hotelLocationDetails = document.getElementById('hotel-location-details');

    const hotelEndLocationType = document.getElementById('hotel-end-location-type');
    const hotelEndRoom = document.getElementById('hotel-end-room');
    const hotelEndLocationDetails = document.getElementById('hotel-end-location-details');

    // End Ride Section
    const houseEndDetails = document.getElementById('house-end-details');
    const hotelEndDetails = document.getElementById('hotel-end-details');
    const specificLocationEndDetails = document.getElementById('specific-location-end-details');
    const endAirportDetails = document.getElementById('end-airport-details');

    const endAirport = document.getElementById('end-airport');
    const endTerminal = document.getElementById('end-terminal');
    const endTerminalDetails = document.getElementById('end-terminal-details');

    // Handle Start Location Change
    startLocation.addEventListener('change', function () {
        if (this.value === 'residential') {
            residentialDetails.classList.remove('hidden');
            hotelDetails.classList.add('hidden');
            businessDetails.classList.add('hidden');
            airportDetails.classList.add('hidden');
        } else if (this.value === 'hotel') {
            residentialDetails.classList.add('hidden');
            hotelDetails.classList.remove('hidden');
            businessDetails.classList.add('hidden');
            airportDetails.classList.add('hidden');
        } else if (this.value === 'business') {
            residentialDetails.classList.add('hidden');
            hotelDetails.classList.add('hidden');
            businessDetails.classList.remove('hidden');
            airportDetails.classList.add('hidden');
        } else if (this.value === 'airport') {
            residentialDetails.classList.add('hidden');
            hotelDetails.classList.add('hidden');
            businessDetails.classList.add('hidden');
            airportDetails.classList.remove('hidden');
        } else {
            residentialDetails.classList.add('hidden');
            hotelDetails.classList.add('hidden');
            businessDetails.classList.add('hidden');
            airportDetails.classList.add('hidden');
        }
    });

    // Handle Airport Change (Start Ride)
    const airportSelect = document.getElementById('airport');
    const terminalInput = document.getElementById('terminal');

    airportSelect.addEventListener('change', function () {
        if (this.value) {
            terminalInput.classList.remove('hidden');
        } else {
            terminalInput.classList.add('hidden');
        }
    });

    // Handle Hotel Location Type Change (Start Ride)
    hotelLocationType.addEventListener('change', function () {
        if (this.value === 'room') {
            hotelRoom.classList.remove('hidden');
            hotelLocationDetails.classList.add('hidden');
        } else if (this.value === 'common') {
            hotelRoom.classList.add('hidden');
            hotelLocationDetails.classList.remove('hidden');
        } else {
            hotelRoom.classList.add('hidden');
            hotelLocationDetails.classList.add('hidden');
        }
    });

    // Handle End Location Change
    endLocation.addEventListener('change', function () {
        if (this.value === 'house') {
            houseEndDetails.classList.remove('hidden');
            hotelEndDetails.classList.add('hidden');
            specificLocationEndDetails.classList.add('hidden');
            endAirportDetails.classList.add('hidden');
        } else if (this.value === 'hotel') {
            houseEndDetails.classList.add('hidden');
            hotelEndDetails.classList.remove('hidden');
            specificLocationEndDetails.classList.add('hidden');
            endAirportDetails.classList.add('hidden');
        } else if (this.value === 'specific-location') {
            houseEndDetails.classList.add('hidden');
            hotelEndDetails.classList.add('hidden');
            specificLocationEndDetails.classList.remove('hidden');
            endAirportDetails.classList.add('hidden');
        } else if (this.value === 'airport') {
            houseEndDetails.classList.add('hidden');
            hotelEndDetails.classList.add('hidden');
            specificLocationEndDetails.classList.add('hidden');
            endAirportDetails.classList.remove('hidden');
        } else {
            houseEndDetails.classList.add('hidden');
            hotelEndDetails.classList.add('hidden');
            specificLocationEndDetails.classList.add('hidden');
            endAirportDetails.classList.add('hidden');
        }
    });

    // Handle Airport Terminal Visibility (End Ride)

    const airportSelectEndRide = document.getElementById('end-airport');
    const terminalInputEndRide = document.getElementById('end-terminal-details');
    airportSelectEndRide.addEventListener('change', function () {
        if (this.value) {
            terminalInputEndRide.classList.remove('hidden');
            //endTerminal.classList.remove('hidden');
            //endTerminalDetails.classList.remove('hidden');
        } else {
            //endTerminal.classList.add('hidden');
            //endTerminalDetails.classList.add('hidden');

            terminalInput.classList.add('hidden');
        }
    });

    // // Handle Airport Change (Start Ride)
    // const airportSelect = document.getElementById('airport');
    // const terminalInput = document.getElementById('terminal');

    // airportSelect.addEventListener('change', function () {
    //     if (this.value) {
    //         terminalInput.classList.remove('hidden');
    //     } else {
    //         terminalInput.classList.add('hidden');
    //     }
    // });

    // Handle Hotel Location Type Change (End Ride)
    hotelEndLocationType.addEventListener('change', function () {
        if (this.value === 'room') {
            hotelEndRoom.classList.remove('hidden');
            hotelEndLocationDetails.classList.add('hidden');
        } else if (this.value === 'common') {
            hotelEndRoom.classList.add('hidden');
            hotelEndLocationDetails.classList.remove('hidden');
        } else {
            hotelEndRoom.classList.add('hidden');
            hotelEndLocationDetails.classList.add('hidden');
        }
    });
});
