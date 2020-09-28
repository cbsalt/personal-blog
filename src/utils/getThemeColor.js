/* eslint no-underscore-dangle: 0 */
const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') return '#fff';
  if (theme === 'dark') return '#16202c';
  return false;
};

export default getThemeColor;
