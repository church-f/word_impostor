import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    playerNames: ["cri", "leti", "flavio", "nicolas"],
    playerCounter: 4,
    impostorCounter: 1,
    impostorName: null,
    gameStarted: false,
    secretWord: "",
    selectedWordCategories: ["Geografia", "Tempo libero", "Sport", "Fantasia"],
    allWords: {},
    timerInMinutes: 2,
  },
  reducers: {
    incrementPlayer: (state) => {
      state.playerCounter += 1;
    },
    incremerntImpostor: (state) => {
      if (state.impostorCounter < state.playerNames.length) {
        state.impostorCounter += 1;
      }
    },
    decrementPlayer: (state) => {
      state.playerCounter -= 1;
    },
    decrementImpostor: (state) => {
      if (state.impostorCounter > 1) {
        state.impostorCounter -= 1;
      }
    },
    addPlayer: (state, action) => {
      state.playerNames.push(action.payload);
    },
    removePlayer: (state, action) => {
      let temp = state.playerNames;
      let nameToDelete = action.payload;
      state.playerNames = temp.filter((x) => {
        return x !== nameToDelete;
      });
      //toglie impostori alla rimozione di giocatori
      if (state.impostorCounter > 1) {
        state.impostorCounter -= 1;
      }
    },
    updatePlayers: (state, action) => {
      state.playerNames = action.payload;
    },
    updateImpostorName: (state, action) => {
      state.impostorName = action.payload;
    },
    updateGameState: (state, action) => {
      state.gameStarted = action.payload;
    },
    updateSecretWord: (state, action) => {
      state.secretWord = action.payload;
    },
    updateSelectedWordCategories: (state, action) => {
      state.selectedWordCategories = action.payload;
    },
    newGame: (state) => {
      let temp = [];
      let copyPlayers = [...state.playerNames];
      for (var i = 0; i < state.impostorCounter; i++) {
        let randomNumber = Math.floor(Math.random() * copyPlayers.length);
        temp.push(copyPlayers[randomNumber]);
        copyPlayers.splice(randomNumber, 1);
      }

      let finalList = [];
      Object.keys(state.allWords).forEach((category) => {
        if (state.selectedWordCategories.includes(category)) {
          finalList = finalList.concat(state.allWords[category]);
        }
      });
      let randomWord = finalList[Math.floor(Math.random() * finalList.length)];

      state.secretWord = randomWord;

      state.impostorName = temp;
    },
    updateAllWords: (state, action) => {
      state.allWords = action.payload;
    },
    incrementTimer: (state) => {
      state.timerInMinutes += 1;
    },
    decrementTimer: (state) => {
      if (state.timerInMinutes > 1) state.timerInMinutes -= 1;
    },
  },
});

export const {
  incrementPlayer,
  incremerntImpostor,
  decrementPlayer,
  decrementImpostor,
  addPlayer,
  removePlayer,
  updatePlayers,
  updateImpostorName,
  updateGameState,
  updateSecretWord,
  updateSelectedWordCategories,
  newGame,
  updateAllWords,
  incrementTimer,
  decrementTimer,
} = playerSlice.actions;
export default playerSlice.reducer;
