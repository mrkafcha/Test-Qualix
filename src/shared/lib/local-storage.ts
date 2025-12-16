const STORAGE_KEY = "requestState";

export const getState = (reserve) => {
    const state = localStorage.getItem(STORAGE_KEY);
    return state? JSON.parse(state) : reserve;
};

export const saveState = (value) => (localStorage.setItem(STORAGE_KEY, JSON.stringify(value)));