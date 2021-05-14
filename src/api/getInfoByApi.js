
export const allCatsByApi = async() => {
    try {
        const url = "https://api.thecatapi.com/v1/breeds";
        const resp = await fetch(url);
        const data = await resp.json();
        return data
    } catch (error) {
        
    }
}