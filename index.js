const fromYt =
	'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3,Курсы по css'
console.log(fromYt)
const fromYouArr = fromYt.split(',')
let toRu = ''
fromYouArr.forEach(element => {
	const modifiedElement = element.toLowerCase().replaceAll(' ', '_')
	toRu += `#${modifiedElement} `
})
toRu = toRu.trim()
console.log(toRu)
