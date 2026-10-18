async function loadIncludes() {
	try {
		const headerResponse = await fetch('../components/header.html');
		const footerResponse = await fetch('../components/footer.html');
		
		if (headerResponse.ok) {
			document.querySelector('.js-header').innerHTML = await headerResponse.text();
		}
		
		if (footerResponse.ok) {
			document.querySelector('.js-footer').innerHTML = await footerResponse.text();
		}
	} catch (error) {
		console.error('Error loading includes:', error);
	}
}

// Load includes when page is ready
document.addEventListener('DOMContentLoaded', loadIncludes);