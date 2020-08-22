function round(x, s) {
    s = typeof s === 'undefined' ? 14 : s;
    return Math.round(x * Math.pow(10, s)) / Math.pow(10, s);
}

function getArea(area) {
    return area/3600;
}

function formatArea(area, prec, wrapper) {
    prec = typeof prec === 'undefined' ? 2 : prec;

    var wrap = function(area) {
        if(typeof wrapper === 'function') {
            area = wrapper(area);
        }
        return area;
    }

    if(Settings.unitSystem === 'imperial') {
        return wrap(round(area*10.76391, prec)) + " ft²";
    }

    return wrap(round(area),prec) + " m²";

}

function roundInches(inch) {
    var fraction = Settings.imperial.fraction;
    return round(inch * fraction, 0) / fraction;
}

function formatSmallLength(value, includeUnit) {
    includeUnit = typeof includeUnit === 'undefined' ? true : includeUnit;

    if(Settings.unitSystem === 'imperial') {
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
    var inch = length-feet;

    // Round to the nearest 16 by default
    inch = roundInches(inch);
    return  {
        feet: feet,
        inch: round(inch*12, prec)
    }
}

function formatLength(length) {
    if(Settings.unitSystem === 'imperial') {
        // Convert to feet
        var converted = footInch(3.280839895 * length);
        return `${converted.feet}' ${converted.inch}"`
    }

    // Return metric by default
    return length+' m';
}
