import * as service from "../services/service.js";
import { createClienteSupabase } from "../config/supabaseConnect.js";

export async function getuser(req, res) {
  try {
    const supabase = createClienteSupabase(req);
    const data = await service.getUserData(supabase);
    res.status(200).json(data);
  } catch (err) {
    // console.log("caiu aqui");
    // console.log("err.message:", err?.message);
    // console.log("err.stack:", err?.stack);
    // console.log("err:", err);
    return res.status(400).json(err);
  }
}

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

export function getResources(req, res) {
  res.status(200).send("Rota de resources ok");
}
