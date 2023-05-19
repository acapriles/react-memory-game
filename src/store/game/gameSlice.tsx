import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Card, Character } from '../../interfaces/appInterfaces';

export interface GameState {
    isLoading: boolean;
    characters: Character[];
    hits: number;
    turns: number;
    cards: Card[];
    selectedTemp: number[];
    currentCardId: number;
}

const initialState: GameState = {
    isLoading: false,
    characters: [],
    hits: 0,
    turns: 0,
    cards: [],
    selectedTemp: [],
    currentCardId: 0
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setCharacters: ( state, action: PayloadAction<Character[]> ) => {
			state.characters = action.payload;
		},
        setLoading: ( state, action: PayloadAction<boolean> ) => {
			state.isLoading = action.payload;
		},
        resetGame: ( state  ) => {
            state.hits = 0;
            state.turns = 0;
            state.selectedTemp = [];
        },
        setCards: ( state, action: PayloadAction<Card[]> ) => {
			state.cards = action.payload;
		},
        setCardsActive: ( state ) => {
			state.cards.forEach( ( item ) => {
                if ( item.id === state.currentCardId && item.active  ) {
                    item.active = false;
                }
            });
		},
        setCurrentCardId: ( state, action: PayloadAction<number> ) => {
			state.currentCardId = action.payload;
		},
        checkSeletedTemp: ( state, action: PayloadAction<number> ) => {
            if ( state.selectedTemp.length === 1 && state.selectedTemp[0] === action.payload ) {

                state.hits += 1;
                state.turns += 1;
                state.selectedTemp = [];
                
                return;
            }

            if ( state.selectedTemp.length === 1 && state.selectedTemp[0] !== action.payload ) {
                state.turns += 1;
                state.selectedTemp = [];
                
                return;
            }

            state.selectedTemp.push( action.payload );
        }
        
    }
});

export const {
    checkSeletedTemp,
    resetGame,
    setCards,
    setCharacters,
    setLoading,
    setCardsActive,
    setCurrentCardId,
} = gameSlice.actions;