function getFruitsNameFromIndex(index) {
    if (index === -1) {
        return fruits[fruits.length - 1];
    } else if (index < 0 || index > 5) {
        return null;
    } else {
        return fruits[index];
    }
}