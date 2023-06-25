
export function list (el) {
    const input = document.createElement('input');

    const button = document.createElement('button');
    button.innerText = 'Введите текст';

    const ul = document.createElement('ul')
    ul.classList.add('history')

    el.append(input);
    el.append(button)
    el.append(ul)

    button.addEventListener('click', () => {
        let text = input.value;
        let li = document.createElement('li');
        li.append(text);
        ul.append(li);
        input.innerHTML = '';
    })
}