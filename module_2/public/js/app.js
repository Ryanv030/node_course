window.onload = () => {
  const element = document.getElementById('test');
  setTimeout(() => {
    element.className = 'active';
  }, 1000);
};
