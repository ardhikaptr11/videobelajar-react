import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

const storeUser = create(
	persist(
		(set, get) => ({
			isLoggedIn: false,
			currentUser: null,
			users: [],
			register: (newUser) => {
				const foundUser = get().users.find((user) => user.email === newUser.email);
				const trimmedEmail = newUser.email.trim();
				const hashedEmail = sha256(trimmedEmail).toString(CryptoJS.enc.Hex);
				if (!foundUser) {
					set((state) => ({
						users: [...state.users, { ...newUser, phone: `0${newUser.phone}`, hashedEmail: hashedEmail }]
					}));
					return true;
				} else {
					return false;
				}
			},
			login: (email, password) => {
				const existingUser = get().users.find((user) => user.email === email && user.password === password);
				existingUser && set(() => ({ isLoggedIn: true, currentUser: existingUser.email }));
			},
			updateUserPassword: (email, newPassword) => {
				const foundUser = get().users.find((user) => user.email === email);
				foundUser &&
					set((state) => ({
						users: state.users.map((user) => ({ ...user, password: newPassword }))
					}));
			},
			findUser: (email) => {
				const foundUser = get().users.find((user) => user.email === email);
				return foundUser;
			},
			logout: () => {
				set(() => ({ isLoggedIn: false, currentUser: null }));
			},
			deleteUser: (email) => {
				const foundUser = get().findUser(email);
				foundUser &&
					set((state) => ({
						users: state.users.filter((user) => user.email !== email),
						isLoggedIn: false,
						currentUser: null
					}));
			},
			getGravatarUrl: (email, size) => {
				const foundUser = get().users.find((user) => user.email === email);

				const hash = foundUser.hashedEmail;
				const name = foundUser && foundUser.gender === "men" ? "Oliver" : "Eliza";
				const options = `seed=${name}&radius=20&size=${size}&backgroundColor=b6e3f4&clothing=collarAndSweater&eyes=closed,default,eyeRoll,happy,hearts,side,squint,surprised,wink,winkWacky,xDizzy`;
				const defaultImage = encodeURIComponent(
					`https://api.dicebear.com/9.x/avataaars/png/${encodeURIComponent(options)}`
				);

				const gravatarImage = `https://www.gravatar.com/avatar/${hash}?d=${defaultImage}`;
				return gravatarImage;
			},
			updateProfile: (email, updatedUser) => {
				const foundUser = get().findUser(email);
				foundUser &&
					set((state) => ({
						currentUser: updatedUser.email,
						users: state.users.map((user) => (user.email === email ? { ...user, ...updatedUser } : user))
					}));
			}
		}),
		{
			name: "user-storage",
			storage: createJSONStorage(() => localStorage)
		}
	)
);

export default storeUser;
