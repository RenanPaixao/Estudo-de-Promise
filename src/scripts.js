var modal = document.getElementById('modal');
var catched = document.getElementById('catch');
var notCatched = document.getElementById('notCatch');
var sub = document.querySelector('#sub');
var btn = document.getElementById('hideBtn').addEventListener('click', () => {
	document.getElementById('erro').style.display = 'none';
});
modal.style.display = 'none';
sub.style.width = '200px';
catched.style.display = 'none';
/*
 *
 * Pull data from Api of github
 *
 */
async function getData() {
	const batata = await axios.get('https://api.github.com/users/RenanPaixao/followers').then((response) => {
		return response.data;
	});
	return batata;
}
/*
 *
 * insert an image throught result of promises
 *
 */
async function getImage() {
	var batata;
	return await axios
		.get('https://avatars.githubusercontent.com/u/57810270?v=4')
		.then(() => {
			setTimeout(() => {
				batata = document.createElement('img');
				batata.src = 'https://avatars.githubusercontent.com/u/57810270?v=4';
				document.body.insertBefore(batata, catched);
			}, 3000);
		})
		.catch((e) => {
			console.log(e);
		});
}
/*
 *
 * test of .allSettled(), getting all fulfilled
 *
 */
Promise.allSettled([getData(), Promise.reject('error'), getData(), getData(), getData(), getData(), getData()]).then(
	(response) => {
		for (const batata of response) {
			if (batata.status === 'fulfilled') {
				console.log(batata);
			}
		}
	}
);
/*
 *
 * Implementation of logic and tests with three seconds to better observation.
 *
 */
sub.addEventListener('click', () => {
	modal.style.display = 'block';
	notCatch.style.display = 'block';
	catched.style.display = 'none';
	getData()
		.then((res) => {
			getImage();
			setTimeout(() => {
				console.log(res);
				modal.style.display = 'none';
				catched.style.display = 'block';
				notCatch.style.display = 'none';
			}, 3000);
		})
		.catch((err) => {
			setTimeout(() => {
				console.log(err);
				modal.style.display = 'none';
				document.getElementById('erro').style.display = 'block';
			}, 3000);
		});
});
