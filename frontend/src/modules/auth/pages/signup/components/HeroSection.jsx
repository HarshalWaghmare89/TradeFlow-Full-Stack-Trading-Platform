import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import axios from "axios";

function HeroSection() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //--->>> Error states
  const [signupErrors, setSignupErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
    setSignupErrors({});
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    setLoginError("");
  };

  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignupErrors({});
    setIsSignupLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/api/auth/signup`,
        signupData,
        { headers: { "Content-Type": "application/json" } },
      );
      setIsLogin(true); //--->> switch to login
    } catch (error) {
      if (error.response) {
        const data = error.response.data;
        if (data.errors) {
          //--->> array of validation messages
          setSignupErrors({ general: data.errors.join(", ") });
        } else if (data.message) {
          //--->> duplicate email or other messages
          setSignupErrors({ email: data.message });
        } else {
          setSignupErrors({ general: "Something went wrong. Try again." });
        }
      } else {
        setSignupErrors({ general: "Network error. Please try again." });
      }
    } finally {
      setIsSignupLoading(false);
    }
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        loginData,
        { headers: { "Content-Type": "application/json" } },
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setLoginError(error.response.data.message || "Invalid credentials");
      } else {
        setLoginError("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="acop-head">
      <div className="container ">
        {/* Heading */}
        <div className="row text-center acop-subheading">
          <div className="col">
            <h1>Open a free demat and trading account online</h1>
            <p>
              Start investing brokerage free and join a community of 1.6+ crore
              investors and traders
            </p>
          </div>
        </div>

        {/* Main section */}
        <div className="account-open-sections">
          <div className="row acop-landing justify-content-evenly align-items-center">
            <div className="account-coin-img col-12 col-lg-6 text-center">
              <img
                src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1769281470/account_open_pyti6i.svg"
                alt="Open account"
                className="img-fluid"
              />
            </div>

            {/* signup */}
            <div
              className={`col-12 col-lg-5 signup-form ${isLogin ? "d-none" : ""}`}
            >
              <h1 className="show-on-mobile mobile-heading">
                Open a free demat & trading account online
              </h1>

              <h2 className="signup-head">Signup now</h2>
              <span className="d-block color-gray signup-help">
                Already have an account?{" "}
                <a
                  href="#"
                  className="fw-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(true);
                  }}
                >
                  Sign in here
                </a>
              </span>

              <hr />
              <form
                id="open_account_formmt"
                className="mt-3"
                onSubmit={handleSignUp}
              >
                {/* General error */}
                {signupErrors.general && (
                  <p className="text-danger text-12 mb-2">
                    {signupErrors.general}
                  </p>
                )}

                {/* --->> First & Last Name */}
                <div className="row mb-3 not-around">
                  <div className="col-sm-6 mobile-full">
                    <input
                      type="text"
                      name="firstName"
                      value={signupData.firstName}
                      onChange={handleSignupChange}
                      placeholder="first name"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="lastName"
                      value={signupData.lastName}
                      onChange={handleSignupChange}
                      placeholder="last name"
                      required
                    />
                  </div>
                </div>

                {/* ---->> Email */}
                <div className="row mb-3 not-around">
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      placeholder="email address"
                      required
                    />
                    {/* General error */}
                    {signupErrors.email && (
                      <p className="text-danger text-12">
                        {signupErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* ---->> Password */}
                <div className="row mb-2 not-around">
                  <div className="col-12">
                    <input
                      type="password"
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      placeholder="password"
                      required
                    />
                    <span className="text-12">
                      Password must be at least 6 characters.
                    </span>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-end mb-3 forget-pass-link">
                  <a href="#" className="text-decoration-none font-sm">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <div className="open-account-submit-container">
                  <button
                    type="submit"
                    id="open_account_proceed_form"
                    className="button w-100"
                    disabled={isSignupLoading}
                  >
                    {isSignupLoading ? "Signing up..." : "Sign Up"}
                  </button>
                </div>
              </form>

              <p className="text-12 mt-3">
                <span>
                  By proceeding, you agree to the TradeFlow{" "}
                  <a href="#"> terms </a> & <a href="#"> privacy policy</a>
                </span>
              </p>
              <hr />
              <span className="text-12">
                Looking to open NRI account? <a href="#"> Click here</a>
              </span>
            </div>

            {/* login */}
            <div
              className={`col-12 col-lg-5 signup-form ${isLogin ? "" : "d-none"}`}
            >
              <h1 className="show-on-mobile mobile-heading">
                Open a free demat & trading account online
              </h1>

              <h2 className="signup-head">Sign in</h2>
              <span className="d-block color-gray signup-help">
                Don't have an account yet?{" "}
                <a
                  href="#"
                  className="fw-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(false);
                  }}
                >
                  Sign up here
                </a>
              </span>

              <hr />
              <form
                id="open_account_formmt"
                className="mt-3"
                onSubmit={handlelogin}
              >
                {/* General login error */}
                {loginError && (
                  <p className="text-danger text-12 mb-2">{loginError}</p>
                )}

                <div className="row mb-3 not-around">
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      placeholder="Entre email address"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-2 not-around">
                  <div className="col-12">
                    <input
                      type="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="Entre password"
                      required
                    />
                  </div>
                </div>

                <div className="text-end mb-3 forget-pass-link">
                  <a href="#" className="text-decoration-none font-sm">
                    Forgot password?
                  </a>
                </div>

                <div className="open-account-submit-container">
                  <button
                    type="submit"
                    id="open_account_proceed_form"
                    className="button w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </button>
                </div>
              </form>

              <p className="text-12 mt-3">
                <span>
                  By proceeding, you agree to the TradeFlow{" "}
                  <a href="#"> terms </a> & <a href="#"> privacy policy</a>
                </span>
              </p>
              <hr />
              <span className="text-12">
                Looking to open NRI account? <a href="#"> Click here</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
