const filters = {
    capitalize: value => {
        if (!value) return "";
        value = value.toString().replace(/\s*/g, "");
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
export default (Vue) => {
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    })
}