import {createSlice} from '@reduxjs/toolkit'

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        playerNames: ["cri", "leti", "flavionzolostronzo", "nicolas"],
        playerCounter: 4,
        impostorCounter: 1
    },
    reducers:{
        incrementPlayer: (state) =>{
            state.playerCounter += 1
        },
        incremerntImpostor: (state)=>{
            state.impostorCounter += 1
        },
        decrementPlayer: (state) =>{
            state.playerCounter -= 1
        },
        decrementImpostor: (state)=>{
            state.impostorCounter -= 1
        },
        addPlayer: (state, action)=>{
            state.playerNames.push(action.payload)
        },
        removePlayer: (state, action)=>{
            let index = state.playerNames.indexOf(action.payload)
            if(index >= 0){
                state.playerNames = state.playerNames.slice(index, 1)
            }
        }
    }
})

export const {incrementPlayer, incremerntImpostor, decrementPlayer, decrementImpostor, addPlayer, removePlayer} = playerSlice.actions
export default playerSlice.reducer