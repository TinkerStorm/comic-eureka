onReady(() => {
  const table = document.querySelector('table:not(.table)');
  if (table) {
    table.classList.add('table');
  }
})