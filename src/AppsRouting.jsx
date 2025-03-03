import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

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

import storeUser from "./store/storeUser";
import ProtectedElement from "@components/ProtectedElement/ProtectedElement";

const AppsRouting = () => {
	const isLoggedIn = storeUser((state) => state.isLoggedIn);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HomePageLayout />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="/categories" element={<CategoryPage />} />
					<Route path="/course/:slug" element={<CourseDetailsPage />} />
				</Route>
				<Route element={isLoggedIn ? <Navigate to="/" /> : <AuthPageLayout />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<RegisterPage />} />
					<Route path="/recovery" element={<PasswordRecovery />} />
				</Route>
				<Route element={<ProtectedElement />}>
					<Route path="/profile" element={<ProfilePage />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppsRouting;
