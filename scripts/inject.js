async function loadIncludes() {
	try {
		const headerResponse = await fetch('my-portfolio/components/header.html');
		const footerResponse = await fetch('my-portfolio/components/footer.html');
		
		if (headerResponse.ok) {
			document.querySelector('.js-header').innerHTML = await headerResponse.text();
		} else {
			console.error('Failed to inject header:', headerResponse.status, headerResponse.url);
		}
		
		if (footerResponse.ok) {
			document.querySelector('.js-footer').innerHTML = await footerResponse.text();
		} else {
			console.error('Failed to inject footer:', footerResponse.status, footerResponse.url);
		}
	} catch (error) {
		console.error('Error loading includes:', error);
	}
}

// Load includes when page is ready
document.addEventListener('DOMContentLoaded', loadIncludes);