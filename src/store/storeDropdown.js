import { create } from "zustand";

const storeDropdown = create((set) => ({
	isDropdownVisible: false,
	toggleDropdown: () => set((state) => ({ isDropdownVisible: !state.isDropdownVisible })),
	showDropdown: () => set({ isDropdownVisible: true }),
	hideDropdown: () => set({ isDropdownVisible: false })
}));

export default storeDropdown;
