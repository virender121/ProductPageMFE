import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useMfStore = create(persist((set, get)=>({
    user: null,
    cart: {
        cartItems: [],
        pricingDetails: {
            subtotal: 0,
            delivertCharges: 0,
            total: 0,
        }
    },
    loginUser: (user)=> set(state=>({ ...state, user}), true),
    logoutUser: (user)=> set((state)=>({ ...state, user: null})),
    addToCart: () => set(state=>({}))
}), {
    name: 'mfe-store',
    getStorage: () => localStorage,
}));

export default useMfStore;

