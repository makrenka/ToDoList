export const debounce = (callback, ms) => {
    let timer;
    return (args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(args);
        }, ms)
    };
};