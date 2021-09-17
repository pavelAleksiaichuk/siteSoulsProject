
// Tabs Blogs

if (document.querySelector('.blogs-nav')) {
	const blogsNavItems = document.querySelectorAll('.blogs-nav__item');
	const blogsContent = document.querySelectorAll('.blogs__content-item');

	blogsNavItems.forEach(
		(item) => item.addEventListener('click', function(e) {
			e.preventDefault();
			const id = e.target.getAttribute('href').replace('#', '');

			blogsNavItems.forEach(
				(child) => child.classList.remove('blogs-nav__item--active')
			)

			blogsContent.forEach(
				(child) => child.classList.remove('blogs__content-item--active')
			)

			item.classList.add('blogs-nav__item--active');
			document.getElementById(id).classList.add('blogs__content-item--active');
		})
	);

	document.querySelector('.blogs-nav__item').click();
}