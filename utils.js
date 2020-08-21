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

function footInch(length, prec) {
    prec = typeof prec === 'undefined' ? 2 : prec;
    
    var feet = Math.floor(length);
    var inch = length-feet;
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
