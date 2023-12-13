const getFetchApiUrl = async (textToTranslate) => {
  const URL = "https://api.mymemory.translated.net";
  const query = `q=${encodeURIComponent(textToTranslate)}`;
  const langPair = "langpair=es-ES|en-GB";
  const API_URL = `${URL}/get?${query}&${langPair}`;
  const translatedText = await fetch(API_URL);
  return translatedText;
};

export default getFetchApiUrl;
