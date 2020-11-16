const name = 'leo';

export const now = function() {
    return Date.now();
}

const fn = function() {
    return new Date().toLocaleString();
}

export {
    name,
    fn as dateLocaleStr
}