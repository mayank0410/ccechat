const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault(); //form submit prevention
}

sendBtn.onclick = ()=>{
        //AJAX
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/insert-chat.php', true);
        xhr.onload = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    inputField.value = "";
                    scrollToBottom();
                }
            }
        }
        //form data via ajax to php
        let formData = new FormData(form);
        xhr.send(formData); //data to php
}

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}

chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/get-chat.php', true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){
                    scrollToBottom();
                }
            }
        }
    }
    //form data via ajax to php
    let formData = new FormData(form);
    xhr.send(formData); //data to php
}, 500); //500ms period

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}