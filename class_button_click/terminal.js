class Terminal {
    constructor(container, id) {
        console.log(`Create terminal ${id}`);

        this.id = id;

        this.createHTML(container);

        let textarea = container.querySelector(`#textarea${id}`);
        let messageInput = container.querySelector(`#messageInput${id}`);
        let buttonSend = container.querySelector(`#buttonSend${id}`);

        if (this.textarea === null) 
        {
            console.log(`Element textarea${id} not found`);
        }

        if (this.messageInput === null) 
        {
            console.log(`Element messageInput${id} not found`);
        }

        if (this.buttonSend === null) 
        {
            console.log(`Element buttonSend${id} not found`);
        }

        buttonSend.addEventListener("click", () => {
            console.log(`Press buttonSend${id} `);
            textarea.textContent += messageInput.value + '\n';
            messageInput.value = '';
        });
    }

    createHTML (containerElement) {
        let textareas = '';
        textareas += `<textarea id="textarea${this.id}" rows="10" cols="50" readonly></textarea><br>`;
        textareas += `<label for="messageInput${this.id}" >Message:</label>`
        textareas += `<input type="text" id="messageInput${this.id}" />`
        textareas += `<button id="buttonSend${this.id}">Send</button>`
        textareas += `<br>`

        containerElement.insertAdjacentHTML('beforeend', textareas);
    }
}