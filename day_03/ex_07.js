function getFruit(parameter) {
    if (typeof parameter === 'string') {
        return fruits.indexOf(parameter);
    }
    if (typeof parameter === 'number' && parameter >= 0 && parameter < fruits.length) {
        return fruits[parameter]
    }
    return null;
}