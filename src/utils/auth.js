const authenticate = (username, password) => {
  // Verifica se é administrador
  return username === "admin" && password === "admin";
};

export default authenticate;