import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Reducer/CategorySlice";
import ProductSlice from "./Reducer/ProductSlice";
import authSlice from "./Reducer/authSlice";

import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartSlice from "./Reducer/CartSlice";

const persistConfig = {
    key: "user",
    storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    product: ProductSlice,
    category: CategorySlice,
    auth: authSlice,
    Cart: CartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default persistStore(store);