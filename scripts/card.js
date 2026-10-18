document.querySelectorAll('.project-card[data-href]').forEach(card => {
	card.addEventListener('click', (event) => {
    // Only navigate if the click was on the card white space
    // and not on title, text, or list
    if (event.target === event.currentTarget) {
    	window.location.href = card.dataset.href;
    }
	});
});