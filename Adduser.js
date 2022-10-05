import React,{ useState} from "react";
import Card from "./Card";
import classes from "./Adduser.module.css"


const Userform=(props)=> {
    const[UserNameInp,setUserNameInp] = useState("");
    const[UserAgeInp,setUserAgeInp] = useState("");
    const UserSubmitHandler = (event)=>{
        event.preventDefault();
        console.log(UserNameInp+"  "+ UserAgeInp)
        setUserAgeInp("");
        setUserNameInp("");
    };
    const UsernameHandler=(event)=>{
        setUserNameInp(event.target.value);
    };
    const AgeHandler=(event)=>{
        setUserAgeInp(event.target.value);
    };


    return (
        <Card className={classes.input}>
            <form onSubmit={UserSubmitHandler}>
      Username
      <input type="text" name="username" value={UserNameInp} onChange={UsernameHandler}/>
      <br/>
      Age(Years)
      <input type="number" name="age" value={UserAgeInp} onChange={AgeHandler}/>
      <br/>
      <button type="submit" onClick={UserSubmitHandler}>Add user</button>
    </form>
    </Card>
    )
};


export default Userform;
