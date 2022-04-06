export const checkLogin = async () => {
  const response = await fetch(`http://localhost:8000/auth/login/check`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      Accept: "application/json",
    },
  });
  const result = await response.json();
  return { result };
};
