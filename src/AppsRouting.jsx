import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { PrivateRoute } from "./Routes/PrivateRoute";

import HomePageLayout from "@components/Layouts/HomePageLayout";
import AuthPageLayout from "@components/Layouts/AuthPageLayout";
import LandingPage from "@pages/LandingPage/LandingPage";

const LoginPage = lazy(() => import("@pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("@pages/RegisterPage/RegisterPage"));
const CategoryPage = lazy(() => import("@pages/CategoryPage/CategoryPage"));
const CourseDetailsPage = lazy(() => import("@pages/CourseDetailsPage/CourseDetailPage"));
const PasswordRecovery = lazy(() => import("@pages/PasswordRecovery/PasswordRecovery"));
const ProfilePage = lazy(() => import("@pages/ProfilePage/ProfilePage"));
const NotFound = lazy(() => import("@pages/NotFound/NotFound"));

<<<<<<< HEAD
import storeUser from "@store/storeUser";

const AppsRouting = () => {
	const currentUser = storeUser((state) => state.currentUser);
	const isLoggedIn = !!currentUser;

	const origin = sessionStorage.getItem("origin");

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HomePageLayout />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/categories" element={<CategoryPage />} />
					<Route path="/course/:slug" element={<CourseDetailsPage />} />
					<Route path="*" element={<NotFound />} />
				</Route>
				<Route element={<AuthPageLayout />}>
					<Route path="/login" element={isLoggedIn && origin === "/login" ? <NotFound /> : <LoginPage />} />
					<Route path="/signup" element={isLoggedIn ? <NotFound /> : <RegisterPage />} />
					<Route path="/recovery" element={isLoggedIn ? <NotFound /> : <PasswordRecovery />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path="/profile" element={<ProfilePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppsRouting;
