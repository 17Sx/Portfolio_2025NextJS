let cursor = document.querySelector('.custom-cursor');
let cursorBefore = document.querySelector('.custom-cursor-before');

if (cursor && cursorBefore) {
    document.addEventListener('mousemove', e => {
        window.requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorBefore.style.left = e.clientX + 'px';
            cursorBefore.style.top = e.clientY + 'px';
        });
    });
}

console.log('charger');
