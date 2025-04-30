const allDishes = [
  { name: 'Egg noodles', restaurant: 'Catina de Naples', link: 'Catina de Naples.html' },
  { name: 'Egg pasta', restaurant: 'Catina de Naples', link: 'Catina de Naples.html' },
  { name: 'French Fries', restaurant: 'Catina de Naples', link: 'Catina de Naples.html' },
  { name: 'Peri Peri fries', restaurant: 'Catina de Naples', link: 'Catina de Naples.html' },
  { name: 'Veg Noodle ', restaurant: 'Catina de Naples', link: 'Catina de Naples.html' },
  { name: 'Veg pasta', restaurant: 'Catina de Naples', link: 'Catina de Naples.html' },
  { name: 'Chappati', restaurant: 'Aaharam indian deli', link: 'Aaharam indian deli.html' },
  { name: 'Idly', restaurant: 'Aaharam indian deli', link: 'Aaharam indian deli.html' },
  { name: 'Parotta', restaurant: 'Aaharam indian deli', link: 'Aaharam indian deli.html' },
  { name: 'Sambar rice', restaurant: 'Aaharam indian deli', link: 'Aaharam indian deli.html' },
  { name: 'Veg biriyani', restaurant: 'Aaharam indian deli', link: 'Aaharam indian deli.html' },
  { name: 'Badam Milk', restaurant: 'The pacific Cafe', link: 'The pacific Cafe.html' },
  { name: 'Cold Coffee', restaurant: 'The pacific Cafe', link: 'The pacific Cafe.html' },
  { name: 'Egg puff', restaurant: 'The pacific Cafe', link: 'The pacific Cafe.html' },
  { name: 'Maa', restaurant: 'The pacific Cafe', link: 'The pacific Cafe.html' },
  { name: 'Rose Milk', restaurant: 'The pacific Cafe', link: 'The pacific Cafe.html' },
  { name: 'Sip up', restaurant: 'Cozy Cafe', link: 'The pacific Cafe.html' },
];

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');

  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const resultsContainer = document.getElementById('search-results');

  if (!searchInput) {
    console.error('Search input element not found');
  } else {
    console.log('Search input element found');
  }

  if (!searchButton) {
    console.error('Search button element not found');
  } else {
    console.log('Search button element found');
  }

  if (!resultsContainer) {
    console.error('Search results container not found');
  } else {
    console.log('Search results container found');
  }
  const filterItems = () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ''; // Clear previous results

    if (query.trim() === '') {
      // If the search input is empty, do not display any dishes
      return;
    }

    const filteredDishes = allDishes.filter(dish =>
      dish.name.toLowerCase().includes(query) ||
      dish.restaurant.toLowerCase().includes(query)
    );

    if (filteredDishes.length > 0) {
      filteredDishes.forEach(dish => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
          <a href="${dish.link}?highlight=${encodeURIComponent(dish.name)}">
            <h3>${dish.name}</h3>
            <p>${dish.restaurant}</p>
          </a>
        `;
        resultsContainer.appendChild(resultItem);
      });
    } else {
      resultsContainer.innerHTML = '<p>No results found.</p>';
    }
  };

  searchInput.addEventListener('input', filterItems);
  searchButton.addEventListener('click', filterItems);

  // Add event listener to each dish card in the top-rated section
  document.querySelectorAll('.dish-card').forEach(card => {
    card.addEventListener('click', () => {
      const dishName = card.querySelector('h3').textContent;
      const storeName = card.querySelector('p').textContent;

      // Redirect to the store page
      const storePage = `${storeName}.html`;
      window.location.href = `${storePage}?highlight=${encodeURIComponent(dishName)}`;
    });
  });
});