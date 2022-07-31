import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        sportname: 'Sport Name',
        genders: 'Genders',
        games: 'Games',
        season: 'Season',
        ages: 'Ages'
    },
    reducers: {
        chooseSportName: (state, action) => { state.sportname = action.payload},
        chooseGenders: (state, action) => { state.genders = action.payload},
        chooseGames: (state, action) => { state.games = action.payload},
        chooseSeason: (state, action) => { state.season = action.payload},
        chooseAges: (state, action) => { state.ages = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseSportName, chooseGenders, chooseGames, chooseSeason, chooseAges } = rootSlice.actions;