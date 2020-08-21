function getArea(area) {
    return area/3600;
}

function formatArea(area, prec) {
    prec = typeof prec === 'undefined' ? 2 : prec;

    if(Settings.unitSystem === 'imperial') {
        return (area*10.76391).toFixed(prec) + " ft²";
    }
    else {
        return area.toFixed(prec) + " m²";
    }
}
