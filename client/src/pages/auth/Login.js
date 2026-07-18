import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import { Button, Input, Card } from "../../components/ui";
import { FaCompass, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, googleLogin: googleAuthLogin } = useAuth();
  const location = useLocation();

  const { values, errors, handleChange, handleBlur, isValid } = useFormValidation(
    {
      email: "",
      password: "",
      rememberMe: false,
    },
    {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minLength: 8,
      },
    }
  );

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsLoading(true);
    try {
      await login(values.email, values.password, from);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse?.credential) return;
    setIsLoading(true);
    try {
      await googleAuthLogin(credentialResponse.credential, from);
    } catch (error) {
      console.error("Google login error:", error);
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
              <FaCompass className="text-2xl text-[#8b5e3c]" />
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Welcome back</h2>
            <p className="mt-2 text-sm text-slate-600">Sign in and pick up where your adventure left off.</p>
          </div>
          <Card className="rounded-[28px] border border-[#efe2d3] bg-white/90 p-5 shadow-[0_20px_60px_-24px_rgba(85,56,20,0.25)] backdrop-blur sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="email" type="email" label="Email" placeholder="you@example.com" icon={FaEnvelope} value={values.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} required />
              <Input name="password" type={showPassword ? "text" : "password"} label="Password" placeholder="Enter password" icon={FaLock} value={values.password} onChange={handleChange} onBlur={handleBlur} error={errors.password} required rightElement={<button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="flex min-h-[44px] min-w-[44px] items-center justify-center text-slate-400 hover:text-slate-600">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>} />
              <label className="flex items-center text-sm text-slate-600">
                <input id="rememberMe" name="rememberMe" type="checkbox" checked={values.rememberMe} onChange={handleChange} className="mr-2 h-4 w-4 rounded border-slate-300 text-[#8b5e3c] focus:ring-[#8b5e3c]" />
                Keep me signed in
              </label>
              <Button type="submit" variant="primary" size="lg" className="w-full bg-[#8b5e3c] hover:bg-[#71442a]" disabled={!isValid || isLoading} loading={isLoading}>{isLoading ? "Signing in..." : "Continue"}</Button>
              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
                <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-slate-500"><span className="bg-white px-2">or</span></div>
              </div>
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.error("Google login failed")} useOneTap={false} text="continue_with" shape="pill" theme="filled_blue" locale="en" render={(renderProps) => (<button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled || isLoading} className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"><FaGoogle className="h-4 w-4 text-amber-700" />Continue with Google</button>)} />
              <div className="pt-2 text-center text-sm text-slate-600">
                New to Coco? <Link to="/register" className="font-semibold text-[#8b5e3c] hover:underline">Create an account</Link>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
