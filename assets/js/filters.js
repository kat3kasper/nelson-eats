document.addEventListener('DOMContentLoaded', function() {
  const dayFilter = document.getElementById('filter-day');
  const typeFilter = document.getElementById('filter-type');
  const neighborhoodFilter = document.getElementById('filter-neighborhood');
  const dealGrid = document.getElementById('deal-grid');

  if (!dealGrid) return;

  // Set day filter to today by default
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const today = days[new Date().getDay()];
  if (dayFilter) {
    dayFilter.value = today;
  }

  function applyFilters() {
    const selectedDay = dayFilter ? dayFilter.value : 'all';
    const selectedType = typeFilter ? typeFilter.value : 'all';
    const selectedNeighborhood = neighborhoodFilter ? neighborhoodFilter.value : 'all';

    const cards = dealGrid.querySelectorAll('.deal-card');
    cards.forEach(function(card) {
      const cardDays = card.dataset.days || '';
      const cardType = card.dataset.type || '';
      const cardNeighborhood = card.dataset.neighborhood || '';

      const matchesDay = selectedDay === 'all' || cardDays.includes(selectedDay);
      const matchesType = selectedType === 'all' || cardType === selectedType;
      const matchesNeighborhood = selectedNeighborhood === 'all' || cardNeighborhood === selectedNeighborhood;

      card.style.display = (matchesDay && matchesType && matchesNeighborhood) ? '' : 'none';
    });
  }

  if (dayFilter) dayFilter.addEventListener('change', applyFilters);
  if (typeFilter) typeFilter.addEventListener('change', applyFilters);
  if (neighborhoodFilter) neighborhoodFilter.addEventListener('change', applyFilters);

  // Apply filters on load to show today's deals
  applyFilters();
});
