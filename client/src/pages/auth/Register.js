import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import { Button, Input, Card } from "../../components/ui";
import {
  FaCompass,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaUser,
  FaCheckCircle,
  FaCircle,
  FaMobile,
  FaGoogle,
} from "react-icons/fa";

const PASSWORD_REGEX = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /\d/,
  special: /[!@#$%^&*(),.?":{}|<>]/,
};

const getPasswordChecks = (password = "") => ({
  minLength: password.length >= 8,
  hasUppercase: PASSWORD_REGEX.uppercase.test(password),
  hasLowercase: PASSWORD_REGEX.lowercase.test(password),
  hasNumber: PASSWORD_REGEX.number.test(password),
  hasSpecial: PASSWORD_REGEX.special.test(password),
});

const getPasswordStrength = (checks) => {
  const passedCount = Object.values(checks).filter(Boolean).length;

  if (passedCount <= 2) {
    return { label: "Weak", level: 1 };
  }

  if (passedCount === 3) {
    return { label: "Fair", level: 2 };
  }

  if (passedCount === 4) {
    return { label: "Strong", level: 3 };
  }

  return { label: "Excellent", level: 4 };
};

const PasswordRequirement = ({ valid, children }) => {
  return (
    <div className={`flex items-center gap-2 text-xs transition-colors ${valid ? "text-emerald-600" : "text-slate-500"}`}>
      {valid ? <FaCheckCircle className="h-3.5 w-3.5 flex-shrink-0" /> : <FaCircle className="h-3.5 w-3.5 flex-shrink-0" />}
      <span>{children}</span>
    </div>
  );
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register: registerUser, googleLogin: googleAuthLogin } = useAuth();

  const { values, errors, handleChange, handleBlur, isValid, setValues, setErrors } = useFormValidation(
    {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      phone: { required: true, pattern: /^\+?[1-9]\d{1,14}$/, message: "Please enter a valid international phone number" },
      password: {
        required: true,
        minLength: 8,
        validate: (value) => {
          if (!PASSWORD_REGEX.uppercase.test(value)) return "Use at least one uppercase letter";
          if (!PASSWORD_REGEX.lowercase.test(value)) return "Use at least one lowercase letter";
          if (!PASSWORD_REGEX.number.test(value)) return "Use at least one number";
          if (!PASSWORD_REGEX.special.test(value)) return "Use at least one special character";
          return null;
        },
      },
      confirmPassword: {
        required: true,
        validate: (value, allValues) => (allValues && allValues.password && value === allValues.password ? null : "Passwords do not match"),
      },
    }
  );

  const passwordChecks = getPasswordChecks(values.password);
  const passwordStrength = getPasswordStrength(passwordChecks);
  const isPasswordStrong = Object.values(passwordChecks).every(Boolean);
  const passwordsMatch = values.confirmPassword.length > 0 && values.password === values.confirmPassword;
  const canSubmit = !isLoading && isValid && isPasswordStrong && passwordsMatch;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsLoading(true);
    try {
      await registerUser({
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
      });
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse?.credential) return;

    setIsLoading(true);
    try {
      await googleAuthLogin(credentialResponse.credential);
    } catch (error) {
      console.error("Google registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestPassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*(),.?\":{}|<>";
    const allCharacters = `${upper}${lower}${numbers}${special}`;

    const randomValues = new Uint32Array(24 + 14);
    window.crypto.getRandomValues(randomValues);

    const requiredCharacters = [
      upper[randomValues[0] % upper.length],
      lower[randomValues[1] % lower.length],
      numbers[randomValues[2] % numbers.length],
      special[randomValues[3] % special.length],
    ];

    const remainingLength = 14 - requiredCharacters.length;
    const generatedCharacters = Array.from({ length: remainingLength }, (_, index) => allCharacters[randomValues[4 + index] % allCharacters.length]);

    const passwordCharacters = [...requiredCharacters, ...generatedCharacters];

    for (let index = passwordCharacters.length - 1; index > 0; index -= 1) {
      const swapIndex = randomValues[20 + index] % (index + 1);
      const temporaryValue = passwordCharacters[index];
      passwordCharacters[index] = passwordCharacters[swapIndex];
      passwordCharacters[swapIndex] = temporaryValue;
    }

    const generatedPassword = passwordCharacters.join("");

    setValues((prevValues) => ({ ...prevValues, password: generatedPassword, confirmPassword: generatedPassword }));
    setErrors((prevErrors) => ({ ...prevErrors, password: null, confirmPassword: null }));
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
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Create your account</h2>
            <p className="mt-2 text-sm text-slate-600">A calm start for your next chapter.</p>
          </div>

          <Card className="rounded-[28px] border border-[#efe2d3] bg-white/90 p-5 shadow-[0_20px_60px_-24px_rgba(85,56,20,0.25)] backdrop-blur sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" type="text" label="Full name" placeholder="Alex Morgan" icon={FaUser} value={values.name} onChange={handleChange} onBlur={handleBlur} error={errors.name} required />
              <Input name="email" type="email" label="Email" placeholder="you@example.com" icon={FaEnvelope} value={values.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} required />
              <Input name="phone" type="tel" label="Mobile number" placeholder="+1 555 123 4567" icon={FaMobile} value={values.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} required />
              <Input name="password" type={showPassword ? "text" : "password"} label="Password" placeholder="Create a strong password" icon={FaLock} value={values.password} onChange={handleChange} onBlur={handleBlur} error={errors.password} required rightElement={<button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="flex min-h-[44px] min-w-[44px] items-center justify-center text-slate-400 hover:text-slate-600">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>} />
              <Input name="confirmPassword" type={showConfirmPassword ? "text" : "password"} label="Confirm password" placeholder="Repeat password" icon={FaLock} value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} error={errors.confirmPassword} required rightElement={<button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? "Hide password" : "Show password"} className="flex min-h-[44px] min-w-[44px] items-center justify-center text-slate-400 hover:text-slate-600">{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</button>} />
              <div className="rounded-2xl bg-[#fbf4eb] p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-700">Password strength: {passwordStrength.label}</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((step) => <div key={step} className={`h-2 w-5 rounded-full transition ${step <= passwordStrength.level ? "bg-[#8b5e3c]" : "bg-[#e9dbca]"}`} />)}
                  </div>
                </div>
                <div className="mt-3 grid gap-2 text-xs text-slate-600">
                  <PasswordRequirement valid={passwordChecks.minLength}>At least 8 characters</PasswordRequirement>
                  <PasswordRequirement valid={passwordChecks.hasUppercase}>One uppercase letter</PasswordRequirement>
                  <PasswordRequirement valid={passwordChecks.hasLowercase}>One lowercase letter</PasswordRequirement>
                  <PasswordRequirement valid={passwordChecks.hasNumber}>One number</PasswordRequirement>
                  <PasswordRequirement valid={passwordChecks.hasSpecial}>One special character</PasswordRequirement>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-[#efe2d3] bg-white px-3 py-2 text-xs text-slate-600">
                <span>Need a stronger one? We can generate one.</span>
                <button type="button" onClick={handleSuggestPassword} className="font-semibold text-[#8b5e3c]">Suggest</button>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full bg-[#8b5e3c] hover:bg-[#71442a]" disabled={!canSubmit} loading={isLoading}>{isLoading ? "Creating account..." : "Create account"}</Button>
              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
                <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-slate-500"><span className="bg-white px-2">or</span></div>
              </div>
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.error("Google sign-up failed")} useOneTap={false} text="continue_with" shape="pill" theme="filled_blue" locale="en" render={(renderProps) => <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled || isLoading} className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"><FaGoogle className="h-4 w-4 text-amber-700" />Continue with Google</button>} />
              <div className="pt-2 text-center text-sm text-slate-600">Already have an account? <Link to="/login" className="font-semibold text-[#8b5e3c] hover:underline">Sign in</Link></div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
