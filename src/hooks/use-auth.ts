'use client';

import { useState, useEffect } from 'react';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/admin', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setIsAuthenticated(response.ok);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated, isLoading };
}