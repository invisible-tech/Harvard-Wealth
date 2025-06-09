import { useQuery } from "@tanstack/react-query";

interface User {
  sub?: string;
  name?: string;
  email?: string;
  picture?: string;
  [key: string]: any;
}

export function useAuth() {
  const { data, isLoading } = useQuery<{ user: User }>({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  return {
    user: data?.user,
    isLoading,
    isAuthenticated: !!data?.user,
  };
}

export function login() {
  window.location.href = '/api/auth/login';
}

export function logout() {
  window.location.href = '/api/auth/logout';
}