import { useQuery } from "@tanstack/react-query";

interface User {
  sub?: string;
  name?: string;
  email?: string;
  picture?: string;
  [key: string]: any;
}

export function useAuth() {
  // Auth disabled for testing - return mock authenticated state
  return {
    user: { name: "Test User", email: "test@example.com" },
    isLoading: false,
    isAuthenticated: true,
  };
}

export function login() {
  window.location.href = '/api/auth/login';
}

export function logout() {
  window.location.href = '/api/auth/logout';
}