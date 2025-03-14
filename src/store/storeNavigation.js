import { create } from "zustand";

const storeNavigation = create((set) => ({
	location: "",
	setLocation: (location) => set({ location: location })
}));

export default storeNavigation;
