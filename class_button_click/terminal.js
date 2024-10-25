class Terminal {
    constructor(container, id) {
        console.log(`Create terminal ${id}`);

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
}