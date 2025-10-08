export async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
) {
  const url = `${process.env.NEXT_PUBLIC_API_URL || ''}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  
  return response.json();
}