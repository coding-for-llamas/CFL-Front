const setTitleAndScroll = (pageTitle: string): void => {
  if (pageTitle !== '') pageTitle += ' | ';// eslint-disable-line no-param-reassign
  document.title = `${pageTitle}Coding For Llamas`;
  const top = document.getElementsByClassName('menu')[0];
  if (top !== undefined && typeof top.scrollIntoView === 'function') top.scrollIntoView();
};

export default { setTitleAndScroll };
