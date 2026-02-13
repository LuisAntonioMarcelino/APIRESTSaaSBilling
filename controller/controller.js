import * as service from "../services/service.js";

export async function login(req, res) {
  res.status(200).send("Rota de login ok");
}

export async function register(req, res) {
  res.status(200).send("Rota de registro ok");
}

export async function upgradeplan(req, res) {
  res.status(200).send("Rota de upgrade ok");
}

export async function deleteAccount(req, res) {
  res.status(200).send("Roda de exclusão de conta ok");
}
