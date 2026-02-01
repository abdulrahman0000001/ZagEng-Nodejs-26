function sameCase(str = "") {
    const lower = str === str.toLowerCase();

    const upper = str === str.toUpperCase();

    return lower || upper;
}
