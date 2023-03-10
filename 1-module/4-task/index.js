function checkSpam(str) {
  const mes = str.toLowerCase();
  return mes.includes('1xBet'.toLowerCase()) || mes.includes('XXX'.toLowerCase());
}
