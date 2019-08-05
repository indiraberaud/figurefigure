const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

export const showMonthDate = d => `${monthNames[d.getUTCMonth()]} ${d.getFullYear()}`;
export const showDayDate = d => `${d.getDate()} ${monthNames[d.getUTCMonth()]} ${d.getFullYear()}`;
