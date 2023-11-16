import { api } from "../apis";

const router = "/sessions"


export async function createSessions(customer) {
  const response = await api.post(router, customer);
  return response;
}

export const setAuthToken = (token) => {
  if (token) {
    // Se um token válido for fornecido, inclua-o no cabeçalho de todas as requisições
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // Se o token for nulo ou inválido, remova-o do cabeçalho
    delete api.defaults.headers.common["Authorization"];
  }
};