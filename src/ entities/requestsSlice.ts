import {createSlice} from "@reduxjs/toolkit";
import type {RequestType} from "./model/request-type.ts";
import {getState, saveState} from "../shared/lib/local-storage.ts";

// Поверяем LocalStorage есть ли заявки
const initialState = getState({ requests: [] }) ;

const createId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addRequest(state, action) {
            // Подтягивается заголовок, описание, категория
            // Генерируется айди, время
            const newRequest : RequestType = {
                ...action.payload,
                id: createId(),
                dateCreation: new Date().toLocaleDateString("ru"),
            };
            state.requests.unshift(newRequest);
        //     Сохраняем в LocalStorage+
            saveState(state)
        },
        updateRequest(state, action) {
            const { id, changes } = action.payload
            // Меняется заголовок, описание, категория
            // Найти нужную заявку
            const index = state.requests.findIndex((item) => item.id === id);
            // С помощью деструкт изменяем нужную заявку
            state.requests[index] = {...state.requests[index], ...changes};
            // Сохраняем в LocalStorage
            saveState(state)
        },
        deleteRequests(state, action) {
            // Удаляет заявку по айди с помощью фильтра массива
            const { id } = action.payload;
            state.requests = state.requests.filter((req) => req.id !== id)
            // Сохраняем в LocalStorage
            saveState(state);
        }
    }
});

export const { addRequest, updateRequest, deleteRequests } = requestsSlice.actions;
export const requestsReducer = requestsSlice.reducer;