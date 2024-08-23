import axios from "axios";

export function verificaEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email)
}

export function verificaSenha(senha) {
  return !!senha && senha.length >= 6
}

export function verificaNome(nome) {
  return !!nome && nome.length >= 3
}

export async function verificaFoto(foto) {
  try {
    const response = await fetch(foto, { method: 'HEAD' })

    if (response.ok && response.headers.get('Content-Type').startsWith('image/')) {
      return true
    } else { return false }
  } catch (error) {
    return false
  }
}