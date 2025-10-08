export function setAuthToken(token: string) {
  document.cookie = `admin_token=${token}; path=/; max-age=3600; secure; samesite=strict`;
}

export function removeAuthToken() {
  document.cookie = 'admin_token=; path=/; max-age=0; secure; samesite=strict';
}

export function getAuthToken() {
  const match = document.cookie.match(new RegExp('(^| )admin_token=([^;]+)'));
  return match ? match[2] : null;
}