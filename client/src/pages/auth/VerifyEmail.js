import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Card } from "../../components/ui";
import { FaEnvelopeOpenText, FaArrowRight } from "react-icons/fa";
import api from "../../services/api";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { user, refreshUserData, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const handleSendCode = async () => {
    try {
      setIsSending(true);
      const response = await api.post("/auth/send-verification");
      toast.success(response.data.message || "Verification code sent.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to resend code.");
    } finally {
      setIsSending(false);
    }
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    if (!code.trim()) {
      toast.error("Enter the 6-digit code.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await api.post("/auth/verify-email", { code: code.trim() });
      toast.success(response.data.message || "Email verified.");
      await refreshUserData();
      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#fff8f0_0%,#f7efe9_55%,#f1e9de_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-8 top-10 h-48 w-48 rounded-full bg-[#f2c693]/40 blur-3xl" />
        <div className="absolute bottom-12 right-10 h-56 w-56 rounded-full bg-[#d2b8a0]/40 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <div className="mb-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-[#8b5e3c]/10">
              <FaEnvelopeOpenText className="text-2xl text-[#8b5e3c]" />
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Verify your email</h2>
            <p className="mt-2 text-sm text-slate-600">
              We sent a 6-digit code to {user?.email || "your inbox"}. Enter it below to continue.
            </p>
          </div>

          <Card className="rounded-[28px] border border-[#efe2d3] bg-white/90 p-5 shadow-[0_20px_60px_-24px_rgba(85,56,20,0.25)] backdrop-blur sm:p-8">
            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Verification code</label>
                <input
                  type="text"
                  value={code}
                  onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="block min-h-[44px] w-full rounded-xl border border-[#e8d9ca] bg-[#fffdf9] px-4 text-center text-lg font-semibold tracking-[0.35em] text-slate-800 shadow-sm outline-none focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/20"
                  placeholder="000000"
                  autoComplete="one-time-code"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full bg-[#8b5e3c] hover:bg-[#71442a]" loading={isLoading}>
                {isLoading ? "Verifying..." : "Verify email"}
              </Button>

              <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <button type="button" onClick={handleSendCode} disabled={isSending} className="font-semibold text-[#8b5e3c] disabled:opacity-60">
                  {isSending ? "Sending..." : "Resend code"}
                </button>
                <button type="button" onClick={() => logout()} className="font-semibold text-slate-600">
                  Sign out
                </button>
              </div>

              <div className="pt-2 text-center text-sm text-slate-600">
                <Link to="/dashboard" className="font-semibold text-[#8b5e3c] hover:underline">
                  Skip for now <FaArrowRight className="ml-1 inline" />
                </Link>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyEmail;
