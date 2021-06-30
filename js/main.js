const btn = document.querySelectorAll('.buttons button')
const content = document.querySelectorAll('.portfolio-details .portfolio-content')

let count = 0

btn.forEach(b => {
	b.addEventListener('click', () => {
		content.forEach(con => {
			if (con.dataset.details === b.dataset.option) {
				con.classList.add('active')
			}

			if (con.dataset.details != b.dataset.option) {
				con.classList.remove('active')
			}
		})
	})
})