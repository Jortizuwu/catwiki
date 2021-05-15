export const allCatsByApi = async () => {
  try {
    const url = "https://api.thecatapi.com/v1/breeds";
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {}
};
export const allCatsByBreedName = async (name) => {
  try {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${name}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {}
};
