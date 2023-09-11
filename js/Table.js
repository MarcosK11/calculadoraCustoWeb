addToggleListeners = function() {
  const toggleDetails = document.querySelectorAll('.toggle-details');

  toggleDetails.forEach(row => {
    row.addEventListener('click', () => {
      const detailsRow = row.nextElementSibling;
      detailsRow.classList.toggle('expanded');
    });
  });
}