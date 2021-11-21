const form = document.querySelector('form');
const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#link-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('#message-form').classList.add('hide');

    const h1Element = document.querySelector('h1');
    h1Element.innerHTML = message;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const inputMessage = document.querySelector('#input-message');
    const encrypted = btoa(inputMessage.value);
    const linkInput = document.querySelector('#link-input');

    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});