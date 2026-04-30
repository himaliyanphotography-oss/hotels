export const GA_MEASUREMENT_ID = "G-25REC6N02M";

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
