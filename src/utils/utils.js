export const checkNavigator = () => {
  if (
    process.browser &&
    navigator.userAgent &&
    (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i))
  ) {
    return 'mobile'; // mobile
  } else {
    return 'desktop'; // desktop
  }
};
