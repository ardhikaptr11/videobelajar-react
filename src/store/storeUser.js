import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

const storeUser = create(
	persist(
		(set, get) => ({
			users: {},
			deletedUsers: [],
			currentUser: null,
			findUser: (email) => {
				const trimmedEmail = email.trim();
				const foundUser = Object.values(get().users).find((user) => user.email === trimmedEmail);
				return foundUser;
			},
			getLoginStatus: (currentUser) => {
				const foundUser = Object.values(get().users).find((user) => user.email === currentUser);
				const isLoggedIn = foundUser && foundUser.isLoggedIn;
				return isLoggedIn;
			},
			register: (newUser) => {
				const trimmedEmail = newUser.email.trim();
				const hashedEmail = sha256(trimmedEmail).toString(CryptoJS.enc.Hex);

				const existingUser = Object.values(get().users).find((user) => user.email === trimmedEmail);

				if (existingUser) return false;

				let index = 1;
				while (get().users[`user${index}`]) {
					index++;
				}

					set((state) => ({
					users: {
						...state.users,
						[`user${index}`]: {
							fullName: newUser.fullName,
							email: trimmedEmail,
							gender: newUser.gender,
							phone: `0${newUser.phone}`,
							hashedEmail: hashedEmail,
							password: newUser.password,
							isLoggedIn: false
						}
					}
					}));

					return true;
			},
			login: (email, password) => {
				const trimmedEmail = email.trim();
				const foundUser = Object.values(get().users).find(
					(user) => user.email === trimmedEmail && user.password === password
				);

				if (!foundUser) return;

				const userKey = Object.keys(get().users).find((key) => get().users[key].email === foundUser.email);

				set((state) => ({
					users: {
						...state.users,
						[userKey]: {
							...foundUser,
							isLoggedIn: true
						}
					},
					currentUser: foundUser.email
				}));

				return true;
			},
			logout: () => {
				const foundUser = get().findUser(get().currentUser);

				if (!foundUser) return;

				const userKey = Object.keys(get().users).find((key) => get().users[key].email === foundUser.email);

				set((state) => ({
					users: {
						...state.users,
						[userKey]: {
							...foundUser,
							isLoggedIn: false
						}
					},
					currentUser: null
				}));
			},
			updateUserPassword: (email, newPassword) => {
				const trimmedEmail = email.trim();
				const foundUser = get().findUser(trimmedEmail);

				if (!foundUser) return;

				const userKey = Object.keys(get().users).find((key) => get().users[key].email === foundUser.email);

					set((state) => ({
					users: {
						...state.users,
						[userKey]: {
							...foundUser,
							password: newPassword
						}
					}
					}));
			},
			deleteUser: (email) => {
				const foundUser = get().findUser(email);

				if (!foundUser) return;

				const userKey = Object.keys(get().users).find((key) => get().users[key].email === foundUser.email);

				delete get().users[userKey];
				
					set((state) => ({
					currentUser: null,
					deletedUsers: [...state.deletedUsers, foundUser.email]
					}));
			},
			getGravatarUrl: (email, size) => {
				const foundUser = get().findUser(email);

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

				if (!foundUser) return;

				const userKey = Object.keys(get().users).find((key) => get().users[key].email === foundUser.email);

					set((state) => ({
						currentUser: updatedUser.email,
					users: {
						...state.users,
						[userKey]: {
							...foundUser,
							...updatedUser
						}
					}
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
