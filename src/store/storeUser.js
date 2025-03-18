import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const storeUser = create(
	persist(
		(set) => ({
			currentUser: null,
			deletedUsers: [],
			logout: () => {
				set({ currentUser: null });
			},
			getGravatarUrl: (user, size) => {
				const uniqueId = user.id;
				const name = user.gender === "men" ? "Oliver" : "Eliza";
				const options = `seed=${name}&radius=20&size=${size}&backgroundColor=b6e3f4&clothing=collarAndSweater&eyes=closed,default,eyeRoll,happy,hearts,side,squint,surprised,wink,winkWacky,xDizzy`;
				const defaultImage = encodeURIComponent(
					`https://api.dicebear.com/9.x/avataaars/png/${encodeURIComponent(options)}`
				);

				const gravatarImage = `https://www.gravatar.com/avatar/${uniqueId}?d=${defaultImage}`;
				return gravatarImage;
			}
		}),
		{
			name: "user-storage",
			storage: createJSONStorage(() => localStorage)
		}
	)
);

export default storeUser;
