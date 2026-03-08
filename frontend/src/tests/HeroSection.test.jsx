// Import testing utilities from Vitest
import { describe, test, expect, vi } from "vitest";

// Import React Testing Library helpers to render components and simulate user interaction
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Adds custom DOM matchers such as toBeInTheDocument()
import "@testing-library/jest-dom";

// MemoryRouter is used because the component may depend on React Router
// It provides routing context during tests without using a real browser router
import { MemoryRouter } from "react-router-dom";

// Axios is mocked to prevent real API calls during testing
import axios from "axios";

// Component under test
import HeroSection from "../modules/auth/pages/signup/components/HeroSection";

// Mock axios so API calls can be controlled in tests
vi.mock("axios");

// Test suite for HeroSection Signup functionality
describe("HeroSection Signup Form", () => {
  // Verify that clicking "Sign up here" switches the UI to the signup form
  test("shows signup form when 'Sign up here' is clicked", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    // Simulate user clicking the signup link
    fireEvent.click(screen.getByText(/sign up here/i));

    // Confirm the signup form heading appears
    expect(screen.getByText(/signup now/i)).toBeInTheDocument();
  });

  // Ensure that all required signup input fields are rendered
  test("renders signup input fields", () => {
    const { container } = render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText(/sign up here/i));

    // Verify each input field exists in the DOM
    expect(
      container.querySelector('input[name="firstName"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('input[name="lastName"]'),
    ).toBeInTheDocument();
    expect(container.querySelector('input[name="email"]')).toBeInTheDocument();
    expect(
      container.querySelector('input[name="password"]'),
    ).toBeInTheDocument();
  });

  // Validate that users can enter values into the signup form fields
  test("allows user to type in signup fields", () => {
    const { container } = render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText(/sign up here/i));

    // Get references to form inputs
    const firstName = container.querySelector('input[name="firstName"]');
    const lastName = container.querySelector('input[name="lastName"]');
    const email = container.querySelector('input[name="email"]');
    const password = container.querySelector('input[name="password"]');

    // Simulate user typing into fields
    fireEvent.change(firstName, { target: { value: "John" } });
    fireEvent.change(lastName, { target: { value: "Doe" } });
    fireEvent.change(email, { target: { value: "john@example.com" } });
    fireEvent.change(password, { target: { value: "123456" } });

    // Ensure the input values were updated correctly
    expect(firstName.value).toBe("John");
    expect(lastName.value).toBe("Doe");
    expect(email.value).toBe("john@example.com");
    expect(password.value).toBe("123456");
  });

  // Verify that the signup button is visible and accessible
  test("signup button exists", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText(/sign up here/i));

    // Check for the signup button using role-based query (recommended practice)
    expect(
      screen.getByRole("button", { name: /sign up/i }),
    ).toBeInTheDocument();
  });

  // Ensure the signup form triggers an API request when submitted
  test("calls API when signup form is submitted", async () => {
    // Mock successful API response
    axios.post.mockResolvedValue({
      data: { message: "User created successfully" },
    });

    const { container } = render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText(/sign up here/i));

    // Fill in the signup form fields
    fireEvent.change(container.querySelector('input[name="firstName"]'), {
      target: { value: "Demo" },
    });

    fireEvent.change(container.querySelector('input[name="lastName"]'), {
      target: { value: "User" },
    });

    fireEvent.change(container.querySelector('input[name="email"]'), {
      target: { value: "demo@example.com" },
    });

    fireEvent.change(container.querySelector('input[name="password"]'), {
      target: { value: "123456" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    // Wait for async API call and verify it was executed
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });
  });

  // Ensure that the UI shows an error message if the signup API fails
  test("shows error message if signup fails", async () => {
    // Mock failed API response
    axios.post.mockRejectedValue({
      response: {
        data: {
          message: "Email already exists",
        },
      },
    });

    const { container } = render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText(/sign up here/i));

    // Fill in form fields
    fireEvent.change(container.querySelector('input[name="firstName"]'), {
      target: { value: "Demo" },
    });

    fireEvent.change(container.querySelector('input[name="lastName"]'), {
      target: { value: "User" },
    });

    fireEvent.change(container.querySelector('input[name="email"]'), {
      target: { value: "test@gmail.com" },
    });

    fireEvent.change(container.querySelector('input[name="password"]'), {
      target: { value: "123456" },
    });

    // Submit signup form
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    // Wait for the error message to appear in the UI
    const error = await screen.findByText(/email already exists/i);

    expect(error).toBeInTheDocument();
  });
});
