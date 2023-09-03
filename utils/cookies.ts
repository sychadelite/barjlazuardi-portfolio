export function setCookie(name: any, value: string | number | boolean, expires: { toUTCString: () => any }) {
  let cookie = `${name}=${encodeURIComponent(value)}`
  if (expires) {
    cookie += `;expires=${expires.toUTCString()}`
  }
  cookie += ';path=/'; // Set the path to the root path so can be available globally
  document.cookie = cookie
}

export function getCookie(name: string) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)') as any
  return cookieValue ? decodeURIComponent(cookieValue.pop()) : null
}

export function clearCookie(name: string) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

export function getAccessTokenExpiration(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    // Check if the cookie starts with the name
    if (cookie.startsWith(name)) {
      // Extract the value of the cookie
      const cookieParts = cookie.split('=');
      const cookieName = cookieParts[0].trim();
      const cookieValue = cookieParts[1].trim();

      // Check if the cookie name is
      if (cookieName === name) {
        // Retrieve the expiration time
        const expiresIndex = cookie.indexOf('expires=');
        if (expiresIndex > -1) {
          const expiresString = cookie.substring(expiresIndex + 8).trim();
          const expires = new Date(expiresString);
          return expires;
        }
      }
    }
  }

  // Default value 1 year
  const expires = new Date()
  const hours = 8760
  expires.setHours(expires.getTime() + hours * 60 * 60 * 1000)

  // Return "null" if the cookie is not found or doesn't have an expiration
  return expires;
}