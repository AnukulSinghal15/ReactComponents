import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import './cssFiles/MyForm.css'
import MyNavbar from './MyNavbar';

export function MyForm(props) {

    const[inputs, setInputs]= useState({username:"", age:"", checked:false, displayDetails:false});

    //No dependency provided
    //Will be triggered on every change(re-render)
    useEffect(()=>{
        console.log("Component re-rendered");
    });

    //[] empty dependency. Will work same as componentDidMount(Only once)
    useEffect(()=>{
        console.log("Component has mounted!")
    }, []);

    //will be triggered for any change in inputs.username
    //same as componentDidUpdate(inputs.username)
    useEffect(()=>{
        console.log(`The username changed : ${inputs.username}`)
        
    }, [inputs.username]);

    useEffect(()=>{
        return()=>{
            console.log("component unmounted")
        }
    },[])



    const handleChange= (event) =>{
        const{name,value}=event.target;
        setInputs(prevState=>({
            ...prevState,
            [name]: value
        }));
    }

    const handleCheckBox=(event)=>{
        if(event.target.checked){
            setInputs(prevState=>({
                ...prevState,
                checked: true
            }));
        }else{
            setInputs(prevState=>({
                ...prevState,
                checked: false
            }));
        }
    }

    const handleSubmit= (event)=>{
        event.preventDefault();
        if(!inputs.checked) alert("Please accept terms and conditions!")
        else{
            setInputs(prevState=>({
                ...prevState,
                displayDetails:true
            }))
        }
    
    }

  return (
    <div>
        <MyNavbar/>
        <div className='container'>
            <h2 className="Signup-title" tabIndex="0" aria-label="Sign Up form">{props.title}</h2>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>User Details</legend>
                    <div className="form-group">
                        <label id="username_label" htmlFor="username" className="form-group-label">Enter Name: </label>
                        <input 
                            type="text" 
                            className="form-group-input" 
                            name="username"
                            value={inputs.username}
                            onChange={handleChange}
                            placeholder="Your name here"
                            aria-labelledby="username_label"
                            required 
                            aria-required="true" />
                    </div>
                    <div className="form-group">
                        <label id="age_label" className="form-group-label">Enter Age: </label>
                        <input 
                            type="number"
                            name="age"
                            value={inputs.age}
                            onChange={handleChange}
                            placeholder="Your age here"
                            aria-labelledby="age_label"
                            required 
                            aria-required="true" />
                    </div>
                    <div className="form-group">
                        <div id="checkBox_desc" hidden>Please read our terms and conditions carefully before accepting!</div>
                        <label id="checkbox_label" className="form-group-label">Accept Terms and conditions?: </label>
                        <input 
                            type="checkbox"
                            name="terms"
                            value="false"
                            onChange={handleCheckBox}
                            aria-describedby="checkBox_desc"
                            aria-labelledby="checkbox_label" />
                    </div>
                    

                </fieldset>
                

                <input aria-label="Submit my details" className="form-submit" type="submit"></input>
                <input disabled aria-disabled="true" tabIndex="-1" className="form-submit-disabled" type="submit"></input>
            </form> 

            {inputs.displayDetails &&
                <div id="details"><span>Username: {inputs.username} age:{inputs.age}</span></div>
            } 
        </div>
    </div>
  )
}
