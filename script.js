const langOpt1 = document.querySelector('.langOpt1').style,
langOpt2 = document.querySelector('.langOpt2').style,
biniLabel1 = document.querySelector('.biniLabel1').style,
biniLabel2 = document.querySelector('.biniLabel2').style,
icon = document.querySelector('img'),
fromText = document.querySelector('.from-text'),
toText = document.querySelector('.to-text'),
btn = document.querySelector('button'),
selectTag = document.querySelectorAll("select"),
radio1 = document.querySelector('#eng');

icon.addEventListener('click', () => {
    let tempText = fromText.value;
      fromText.value = toText.value;
      toText.value = tempText;
      selectTag[0].value = selectTag[1].value;
  
    if(langOpt1.display == 'none'){
      langOpt1.display = 'flex';
      biniLabel1.display = 'none';
      langOpt2.display = 'none';
      biniLabel2.display = 'flex';
    }
    else {
      langOpt1.display = 'none';
      biniLabel1.display = 'flex';
      langOpt2.display = 'flex';
      biniLabel2.display = 'none';
    }
  })

  const  translate = async (text, target) => {
    const API_KEY = "AIzaSyCQJl_k_9cS7F7XA09K-H5DT2pAHApdnKA";
    toText.setAttribute("placeholder", "Translating...");
      let res = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      { q: text, target }
      );
      let translation = res.data.data.translations[0].translatedText;
      return translation;
    }
    function transBini() {
      
      let word = fromText.value.toLowerCase().trim().split(" ");
        
        let trans = "";
        for (let i = 0; i < word.length; i++) {
          if (edobini.hasOwnProperty(word[i])) {
            for (const key in edobini) {
              if (key == word[i]) {
                if (trans == "") {
                  trans = edobini[key].charAt(0).toUpperCase() + edobini[key].slice(1)
                } else {
                  trans = trans + " " + edobini[key];
                }
              }
            }
          }
          else {
            if (trans == "") {
                  trans = word[i];
                } else {
                  trans = trans + " " +  word[i];
                }
          }
        }
            return trans;
      }