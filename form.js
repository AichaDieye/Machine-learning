import {useState, useEffect} from 'react';

const Formulaire = (props) => {
    const [message, setMessage] = useState(false);



    const bottonSubmit = (event) => {
        event.preventDefault();
        alert("SUCCESS")
        setMessage(true);
       
    }
    const onSubmitHandler = (event) => {

        event.preventDefault();

        setMessage(true);

    }

return(
    
    <form  onSubmit={bottonSubmit}>
     <label>Name</label><br/>

    <input type="text" name="name"  />

    <br/>

    <label>Surname</label><br/>

    <input type="text" name="surname" />

    <br/>
    <label>identifiant</label><br/>
    <input type="text" name="identifiant" />


   
    <br/>


        <button name ="envoyer" className= "btn btn-info" >Submit</button>
        
   


       

 
    </form>

);
}

export default Formulaire;

