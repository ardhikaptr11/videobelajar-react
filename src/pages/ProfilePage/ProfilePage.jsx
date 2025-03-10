import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";

import Input from "@components/Atoms/Input/Input";
import Button from "@components/Atoms/Button/Button";
import storeUser from "@store/storeUser";

const ProfilePage = () => {
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);

	const getGravatarUrl = storeUser((state) => state.getGravatarUrl);
	const currentUser = storeUser((state) => state.currentUser);
	const findUser = storeUser((state) => state.findUser);
	const updateProfile = storeUser((state) => state.updateProfile);
	const deleteUser = storeUser((state) => state.deleteUser);
	const userData = findUser(currentUser);
	const userAvatar = getGravatarUrl(currentUser, 250);

	const [inputValues, setInputValues] = useState({
		fullName: userData.fullName,
		email: userData.email,
		phone: userData.phone
	});

	const [isEdit, setIsEdit] = useState({
		fullName: false,
		email: false,
		phone: false
	});

	const handleEdit = (e) => {
		const className = e.target.className;
		const firstClassName = className.split(" ")[0];

		setIsEdit({
			fullName: false,
			email: false,
			phone: false,
			[firstClassName]: true
		});
	};

	const [isError, setIsError] = useState({
		fullName: "",
		email: "",
		phone: ""
	});

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setInputValues({
			...inputValues,
			[id]: value
		});

		if (isEdit[id]) {
			setIsError({
				...isError,
				[id]:
					value === ""
						? `${id === "fullName" ? "Nama" : id === "phone" ? "No. Hp" : "Email"} tidak boleh kosong`
						: ""
			});
		}

		setInputValues((prev) => ({
			...prev,
			[id]: value
		}));
	};

	const isErrorOccurred = Object.values(isError).some((error) => error !== "");
	const isInEditState = Object.values(isEdit).some((edit) => edit === true);
	const hasNoChange = Object.keys(inputValues).every((key) => inputValues[key] === userData[key]);

	const doDelete = async () => {
		return MySwal.fire({
			title: "Apakah kamu yakin?",
			text: "Akunmu akan terhapus secara permanen.",
			icon: "error",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Ya, saya yakin!",
			cancelButtonText: "Batalkan"
		}).then((result) => {
			if (result.isConfirmed) {
				return MySwal.fire({
					title: "Sukses!",
					text: "Akunmu sudah terhapus.",
					icon: "success",
					showConfirmButton: false,
					timerProgressBar: true,
					timer: 3000
				});
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				MySwal.fire({
					title: "Dibatalkan",
					text: "Terima kasih konfirmasinya.",
					icon: "error"
				});
				return Promise.reject("Cancelled");
			}
		});
	};

	const handleDelete = async () => {
		try {
			await doDelete();
			await deleteUser(userData.email);
			navigate("/", { replace: true });
		} catch (error) {
			if (error === "Cancelled") {
				console.error("Delete cancelled");
			}
		}
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		setIsEdit({
			fullName: false,
			email: false,
			phone: false
		});

		MySwal.fire({
			title: "Sukses!",
			text: "Data berhasil diperbarui.",
			icon: "success"
		});
		updateProfile(currentUser, inputValues);
	};

	return (
		<section className="flex flex-col min-[992px]:flex-row min-[992px]:gap-x-15 gap-y-6 min-[992px]:min-h-[300px]">
			<aside className="flex justify-center min-[992px]:block min-[992px]:w-fit">
				<img
					src={userAvatar}
					alt="User Avatar"
					className="rounded-full min-[992px]:rounded-none max-[768px]:size-[200px]"
				/>
			</aside>
			<article className="w-full flex flex-col">
				{Object.keys(inputValues).map(
					(key) =>
						key !== "gender" && (
							<div
								key={key}
								className={`grid grid-cols-[4fr_auto] min-[992px]:grid-cols-[150px_4fr_auto] min-[992px]:grid-rows-1 items-center first:mt-0 mt-6 ${
									isError[key] ? "grid-rows-3" : "grid-rows-2"
								} `}>
								<h3 className="text-[1.125em] font-bold w-fit row-start-1 col-start-1">
									{key === "fullName" ? "Nama Lengkap" : key === "email" ? "E-mail" : "No. Hp"}
								</h3>
								<Input
									type={key === "email" ? "email" : key === "phone" ? "tel" : "text"}
									name={key}
									id={key}
									value={inputValues[key]}
									className={`${key} text-base p-1 h-[30px] border border-solid ${
										isEdit[key] && !isError[key]
											? "border-[#3ecf4c] focus:outline-[#3ecf4c]"
											: isEdit[key] || isError[key]
											? "border-[#ff0000] focus:outline-[#ff0000]"
											: "border-[#e1dfdf]"
									} rounded-[4px] mr-2.5 row-start-2 col-start-1 min-[992px]:row-start-1 min-[992px]:col-start-2`}
									onChange={handleInputChange}
									disabled={!isEdit[key]}
								/>
								<IonIcon
									icon={createOutline}
									className={`${key} text-[1.125em] text-[#222325] cursor-pointer row-start-2 col-start-2 min-[992px]:row-start-1 min-[992px]:col-start-3`}
									onClick={(e) => handleEdit(e)}
								/>
								{isError[key] && (
									<span className="text-[0.875em] text-[#ff0000] row-start-3 col-start-1 min-[992px]:col-start-2 min-[992px]:row-start-2">
										{isError[key]}
									</span>
								)}
							</div>
						)
				)}
				<div className="grid grid-cols-[4fr_auto] min-[992px]:grid-cols-[150px_4fr_auto] mt-6">
					<h3 className="text-[1.125em] font-bold w-fit">Jenis Kelamin</h3>
					<Input
						type="text"
						name="gender"
						value={userData.gender === "men" ? "Laki-laki" : "Perempuan"}
						id="gender"
						className="text-base p-1 h-[30px] border border-solid border-[#e1dfdf] rounded-[4px] mr-7 row-start-2 col-start-1 min-[992px]:row-start-1 min-[992px]:col-start-2"
						disabled
					/>
				</div>
				<div className="flex justify-center gap-x-6 mt-6 h-[36px] min-[992px]:justify-start">
					<Button
						type="submit"
						id="delete"
						text="Hapus Akun"
						style="w-fit h-[36px] mb-0 p-[7px_22px] bg-[#ff6347] hover:bg-[#ff0000] border-none"
						textStyle="font-bold font-button leading-none text-white"
						onClick={handleDelete}
					/>
					<Button
						type="submit"
						id="edit"
						text="Perbarui"
						style={`w-fit h-[36px] mb-0 p-[7px_22px]  border-none ${
							isErrorOccurred || !isInEditState || hasNoChange
								? "bg-[#e9fde2] pointer-events-none"
								: "bg-[#3ecf4c] pointer-events-auto hover:bg-[#36b343]"
						}`}
						textStyle={`font-bold leading-none ${
							isErrorOccurred || !isInEditState || hasNoChange ? "text-[#bebebe]" : "text-white"
						}`}
						onClick={(e) => handleUpdate(e)}
					/>
				</div>
			</article>
		</section>
	);
};
export default ProfilePage;
