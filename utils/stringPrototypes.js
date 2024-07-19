String.prototype.interpolate = function (params) {
    return this.replace(/{{(.*?)}}/g, (match, key) => {
        const keys = key.split('.').map(k => k.trim());
        let value = params;
        keys.forEach(k => {
            value = value && value[k] !== undefined ? value[k] : `{{${key}}}`;
        });
        return value;
    });
};
