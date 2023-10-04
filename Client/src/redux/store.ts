import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Reducer/CategorySlice";

const store = configureStore({
    reducer: {
        Category: CategorySlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;