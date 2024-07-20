document.querySelectorAll('.acordeon').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.contenido-acordeon').style.maxHeight = '600px';
        item.querySelector('.contenido-acordeon').style.padding = '15px 0px';
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('.contenido-acordeon').style.maxHeight = '0px';
        item.querySelector('.contenido-acordeon').style.padding = '0px';
    });
});
