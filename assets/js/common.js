const handleMainMenu = () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('display');
};

const deleteSearchKeyword = () => {
  const input = document.querySelector('.search-container .input');
  input.value = '';
  input.focus();
};

const setEventListener = () => {
  const menuBtn = document.querySelectorAll('.btn.menu');
  const delBtn = document.querySelector('.btn.delete');

  // 메뉴 보이기
  menuBtn.forEach((item) => item.addEventListener('click', handleMainMenu));

  delBtn.addEventListener('click', deleteSearchKeyword);
};

setEventListener();
