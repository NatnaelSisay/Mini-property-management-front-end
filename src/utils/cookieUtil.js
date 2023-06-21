export const setCookie = (name, value) => {
  const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};path=/`;
  document.cookie = cookieValue;
};

export const deleteCookie = (name) => {
  document.cookie = `${encodeURIComponent(
    name
  )}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

export const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      const cookieValue = cookie.substring(name.length + 1);
      return decodeURIComponent(cookieValue);
    }
  }

  return null; // Cookie not found
};
