let paragraph = document.getElementById('mainParagraph');

paragraph.addEventListener('click', WriteParagraph);

function WriteParagraph() {
    paragraph.textContent = 'Hola Mundo';
}