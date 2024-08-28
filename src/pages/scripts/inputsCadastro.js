
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
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
  const extension = foto.split('.').pop();
  return validExtensions.includes(extension.toLowerCase());
}
