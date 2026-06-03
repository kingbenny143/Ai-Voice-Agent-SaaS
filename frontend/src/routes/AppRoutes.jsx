import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";

import DashboardLayout from "../layouts/DashboardLayout";

import DashboardPage from "../pages/dashboard/DashboardPage";
import CallsPage from "../pages/dashboard/CallsPage";
import BookingsPage from "../pages/dashboard/BookingsPage";
import KnowledgeBasePage from "../pages/dashboard/KnowledgeBasePage";
import AiSettingsPage from "../pages/dashboard/AISettingsPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import BillingPage from "../pages/dashboard/BillingPage";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/calls" element={<CallsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/ai-settings" element={<AiSettingsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/billing" element={<BillingPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;