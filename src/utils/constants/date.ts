const dayNow = new Date().getDate();
const monthNow = new Date().getMonth() + 1;
const yearNow = new Date().getFullYear();
export const dateNow = `${yearNow}-${monthNow < 10 ? `0${monthNow}` : monthNow}-${dayNow}`;
