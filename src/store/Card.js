import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    card: [],
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCardToStore: (state , data) => {

            state.card.push(data.payload)
        },
        removeCardToStore: (state , data) => {
            state.card.splice(data.payload, 1)
        }
    },
})

export const { addCardToStore, removeCardToStore } = cardSlice.actions

export default cardSlice.reducer