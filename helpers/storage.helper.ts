export const store = (key: string, data: string) => {
    return localStorage.setItem(key, data);
}
export const get = (key: string) => {
    return localStorage.getItem(key);
}
export const clear = (key: string) => {
    return localStorage.removeItem(key);
}