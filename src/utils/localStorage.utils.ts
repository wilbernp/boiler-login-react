export default {
    getItem(key:string){
        const data = localStorage.getItem(key)
        if (!data) return data
        return JSON.parse(data)
    },
    setItem<T>(key:string, value:T){
        localStorage.setItem(key,JSON.stringify(value))
    }
}