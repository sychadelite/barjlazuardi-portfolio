export function setCookie(
  name: string,
  value: string | number | boolean,
  expires?: Date
): void {
  let cookie = `${name}=${encodeURIComponent(value)}`

  if (expires) {
    cookie += `;expires=${expires.toUTCString()}`
  }

  cookie += ';path=/' // Make cookie available globally
  document.cookie = cookie
}

export function getCookie(name: string): string | null {
  const regex = new RegExp('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')
  const match = document.cookie.match(regex)

  if (match && match[2]) {
    return decodeURIComponent(match[2])
  }

  return null
}

export function clearCookie(name: string): void {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/'
}

export function getAccessTokenExpiration(name: string): Date {
  const cookieString = document.cookie
  const cookies = cookieString.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]?.trim() // <-- safe access

    if (!cookie) continue // skip if undefined or empty

    // Check if the cookie starts with the name
    if (cookie.startsWith(name)) {
      // Extract the value of the cookie
      const cookieParts = cookie.split('=')
      const cookieName = cookieParts[0]?.trim()
      // const cookieValue = cookieParts[1]?.trim()

      // Check if the cookie name is
      if (cookieName === name) {
        // Retrieve the expiration time
        const expiresIndex = cookie.indexOf('expires=')
        if (expiresIndex > -1) {
          const expiresString = cookie.substring(expiresIndex + 8).trim()
          const expires = new Date(expiresString)
          return expires
        }
      }
    }
  }

  // Default value 1 year
  const expires = new Date()
  const hours = 8760
  expires.setHours(expires.getTime() + hours * 60 * 60 * 1000)

  // Return "null" if the cookie is not found or doesn't have an expiration
  return expires
}