import type {RequestsState} from "../../ entities/model/request-type.ts";

const STORAGE_KEY = "requestState";

export const getState = (reserve: RequestsState) => {
    const state = localStorage.getItem(STORAGE_KEY);
    return state? JSON.parse(state) : reserve;
};

export const saveState = (value: RequestsState) => (localStorage.setItem(STORAGE_KEY, JSON.stringify(value)));