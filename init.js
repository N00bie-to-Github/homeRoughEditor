$(function () {
    // Set the scale text
    var scaleContainer = $('#scaleVal');
    if (Settings.unitSystem === IMPERIAL) {
        scaleContainer.html('5 ft');
    }
    else {
        scaleContainer.html('1 m');
    }
});
