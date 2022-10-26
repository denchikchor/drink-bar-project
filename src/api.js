import { API_URL } from './config';

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'list.php?c=list');
    return await response.json();
};

const filterByCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return await response.json();
};

const getDrinkById = async (drinkId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + drinkId);
    return await response.json();
};

const getDrinkByName = async (drinkName) => {
    const response = await fetch(API_URL + 'search.php?s=' + drinkName);
    return await response.json();
};

export { filterByCategory, getDrinkById, getAllCategories, getDrinkByName };
