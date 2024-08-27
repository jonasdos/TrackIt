export default function formatarDataAtual() {
  const dataAtual = new Date();

  const opcoes = {
    weekday: 'long', // Dia da semana por extenso
    day: '2-digit',  // Dia do mês com dois dígitos
    month: '2-digit' // Mês com dois dígitos
  };

  const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);
  // 'pt-BR' para formato em português

  // Ajuste a formatação final para combinar o dia da semana com a data
  const [diaSemana, data] = dataFormatada.split(' de ');
  // Separa a string obtida da data

  const dataFinal = `${diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)}`;
  // Coloca a primeira letra do dia da semana em maiúsculo e monta a data final

  return dataFinal;
}
