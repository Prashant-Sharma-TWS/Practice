/**
 * A function to get value for a key from localStorage
 * @param {string} key
 * @returns JSON value from localStorage
 */

export const getFromLocal = (key) => {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    return undefined;
  }
};

/**
 * A function to set value of key in localStorage
 * @param {string} key
 * @param {string} value
 */
export const setInLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
