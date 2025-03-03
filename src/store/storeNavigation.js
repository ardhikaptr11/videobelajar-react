import { create } from "zustand";

const storeNavigation = create((set) => ({
	// isDropdownVisible: false,
	// toggleDropdown: () => set((state) => ({ isDropdownVisible: !state.isDropdownVisible })),
	// showDropdown: () => set({ isDropdownVisible: true }),
	// hideDropdown: () => set({ isDropdownVisible: false })
	location: "",
	setLocation: (location) => set({ location: location })
}));

export default storeNavigation;
