Object.prototype.prop_access = function (path) {
    if (path === null || path === "") {
        return this;
    }

    const segments = path.match(/[^.[\]]+/g);
    let current = this;

    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        if (current === null || current[segment] === undefined) {
            throw new Error(`${segments.slice(0, i + 1).join('.')} not exist.`);
        }
        current = current[segment];
    }

    return current;
};
