import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import authSlice from "./authSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    ])
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
