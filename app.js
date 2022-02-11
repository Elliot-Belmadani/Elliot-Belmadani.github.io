const types = ['Frontend Developer.', "UI/UX Designer.", 'Musician.', 'App Developer.']
        let count = 0;
        let index = 0;
        let currentText = ''
        let letter = ''

        const typewriter = document.getElementById('Typewriter')
        
        function typewriteAnimation() {
            if (count === types.length) {
                count = 0;
            }
            currentText = types[count];
            letter = currentText.slice(0, ++index);
            typewriter.textContent = letter;

            if (letter.length === currentText.length) {
                count++;
                index = 0;
            }
            setTimeout(typewriteAnimation, 200)
        }
        typewriteAnimation()
        

        const toggleTheme = () => {
            let body = document.getElementById('body')
            body.classList.toggle('darkmode')
        }
const  toggleNavbar = () => {
    let navbar = document.getElementById('nav')
    navbar.classList.toggle('navbar-toggled')
}