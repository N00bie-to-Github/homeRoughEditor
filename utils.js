function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        }
        else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function round(x, s) {
    s = typeof s === 'undefined' ? 14 : s;
    return Math.round(x * Math.pow(10, s)) / Math.pow(10, s);
}

function getArea(area) {
    return area / 3600;
}

function formatArea(area, prec, wrapper) {
    prec = typeof prec === 'undefined' ? 2 : prec;

    var wrap = function (area) {
        if (typeof wrapper === 'function') {
            area = wrapper(area);
        }
        return area;
    }

    if (Settings.unitSystem === IMPERIAL) {
        return wrap(round(area * 10.76391, prec)) + " ft²";
    }

    return wrap(round(area), prec) + " m²";

}

function roundInches(inch) {
    var fraction = Settings.imperial.fraction;
    return round(inch * fraction, 0) / fraction;
}

function formatSmallLength(value, includeUnit) {
    includeUnit = typeof includeUnit === 'undefined' ? true : includeUnit;

    if (Settings.unitSystem === IMPERIAL) {
        return roundInches(0.393701 * value) + (includeUnit ? ' inch' : '');
    }

    return value + (includeUnit ? ' cm' : '')
}

function getScale(ratioWidthZoom) {
    return 0.3048 * 500 * ratioWidthZoom + 'px';
}

function footInch(length, prec) {
    prec = typeof prec === 'undefined' ? Settings.imperial.decimalPlaces : prec;

    var feet = Math.floor(length);
    var inch = length - feet;

    // Round to the nearest 16 by default
    inch = roundInches(inch);
    return  {
        feet: feet,
        inch: round(inch * 12, prec)
    }
}

function formatLength(length) {
    if (Settings.unitSystem === IMPERIAL) {
        // Convert to feet
        var converted = footInch(3.280839895 * length);
        return `${converted.feet}' ${converted.inch}"`
    }

    // Return metric by default
    return length + ' m';
}
