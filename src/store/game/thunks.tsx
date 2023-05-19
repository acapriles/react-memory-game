import { createAsyncThunk } from "@reduxjs/toolkit";

import memoryGameApi from "../../api/memoryGameApi";
import { Characters } from "../../interfaces/appInterfaces";
import { setCharacters, setLoading } from "./gameSlice";

 
export const getCharacters = createAsyncThunk(
    'game/getCharacters',
    async (_, { dispatch }) => {

        try {
            dispatch( setLoading( true ) );
            const { data } = await memoryGameApi.get<Characters>('/character');
            dispatch( setCharacters( data.results ) );

        } catch ( error ) {
            console.log( error );
            dispatch( setLoading( false ) );
        }
        dispatch( setLoading( false ) );
    }
);