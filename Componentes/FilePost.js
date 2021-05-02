class FilePost{

    constructor(UserContent){
        this.UserContent = UserContent;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.className = 'fileFresh';

        let postFeed = document.createElement ('div'); // publicacion de content
        postFresh.innerHTML = this.UserContent.post;

        let nameFresh = document.createElement('div'); // User name
        nameFresh.className = "nameFresh";
        nameFresh.innerHTML = this.UserContent.usuario;

        let divComent = document.createElement('div'); //comentarios
        divComent.className = "comentSection";

        let inputAnswer = document.createElement('input'); //input responde
        inputAnswer.className = "inputAnswerPost";
        inputAnswer.innerHTML = '';
        
        let ButtonAnswer = document.createElement('button'); //boton de respuesta
        ButtonAnswer.className = "ButtonAnswerPost";
        ButtonAnswer.innerHTML = 'Answer';

        let divMessage = document.createElement('div');

        let database = firebase.database();
        ButtonAnswer.addEventListener('click', ()=>{

            let Coment = {
                Coment: inputAnswer.value
            }
            
            database.ref('usuarios/blog/'+this.publicacionUsuario.id+'/comentarios').push().set(Coment);
            
            divMessage.className = "MessageAnswer";
            divMessage.innerHTML = Coment.Coment;
            divComent.appendChild(divMessage);
        });

        component.appendChild(postFeed);
        component.appendChild(nameFeed);
        component.appendChild(divComent);
        component.appendChild(inputAnswer);
        component.appendChild(ButtonAnswer);
        

        return component;


    }

}