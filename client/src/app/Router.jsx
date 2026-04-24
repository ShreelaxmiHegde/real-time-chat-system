import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";
import AcceptInvite from "../features/auth/pages/AcceptInvite";

import CreateOrg from "../features/organization/pages/CreateOrg";

import DashboardPage from "../features/dashboard/pages/DashboardPage";

import DashboardLayout from "./layout/DashboardLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/invite/:token" element={<AcceptInvite />} />

        {/* Onboarding */}
        <Route path="/create-org" element={<CreateOrg />} />

        {/* App */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}