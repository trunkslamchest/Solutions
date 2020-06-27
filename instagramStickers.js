
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function stickers_for(phrase) {
	let obj = {}, min = 0

	for(let i = 0; i < phrase.length; i++) obj[phrase[i]] = obj[phrase[i]] ? ++obj[phrase[i]] : 1

	for(let key in obj){
		if(key === 'a') obj[key] = Math.round(obj[key] / 2)
		if(min < obj[key]) min = obj[key]
	}

	return min
}

console.log(stickers_for('artisan martians')) // 2
console.log(stickers_for('taming giant gnats')) // 3
console.log(stickers_for('tiara')) // 1
