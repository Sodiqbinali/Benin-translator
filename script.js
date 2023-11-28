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