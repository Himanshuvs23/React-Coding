 import {useFormik} from "formik"

  export function Formdemo (){

    function ValidateUser(user){
        var errors={Username:'', age:'',password:'',email:'', mobile:'',city:'', Gender:''}

        if(user.Username.length===0){
            errors.Username="No value inserted "
        }else if(user.Username.length===4){
            errors.Username="Name to shot"
        }else{
            errors.Username=""
        }

        

        if(isNaN(user.age)){
            errors.age='Enter a numbefr please'
        } else if(user.age<18){
            errors.age='under age'
        }else{
            errors.age=''
        }


        if(user.mobile.length===0){
            errors.mobile='Mobile is required'
        }else if(user.mobile.match(/\+91\d{10}/)){
            errors.mobile=''
        }else{
            errors.mobile='invalid mobile'
        }

        if(user.city==='-1'){
            errors.city="please select the city"
        }else{
            errors.city=''
        }

        if(user.Gender===''){
            errors.Gender = 'Please select a gender';
        } else {
            errors.Gender = '';
        }

        return errors;

    }

    const formik = useFormik({
        initialValues:{
            Username:'Himashu',
            email:'',
            password : "",
            mobile:'',
            age:12,
            city:'',
            Gender:'',
            

        },

        validate:ValidateUser,

        onSubmit:(values)=>{
            console.log(values)
        }
        
    })

    return (
        <div className="container-fluid">

            <form onSubmit={formik.handleSubmit}  >
            <h3>Registration Form</h3>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" name="Username" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Username}</dd>
                    <dt>Email</dt>
                     <dd><input type="email" name="email"  onChange={formik.handleChange}    /></dd> 
                    <dt>Password</dt>
                    <dd><input type="password" name="password" onChange={formik.handleChange}/></dd>
                    <dt>Mobile Number</dt>
                    <dd><input type="text" name="mobile" onChange={formik.handleChange}   /></dd>
                    <dd className="text-danger">{formik.errors.mobile}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="age" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.age}</dd>
                    <dt>City</dt>

                    <dd>
                    <select name="city" onChange={formik.handleChange} >
                            <option value='-1' >Select City</option>
                            <option value='Delhi' >Delhi</option>
                            <option value='Hyd'>Hyd</option>
                        </select>

                    </dd>
                    
                    <dd className="text-danger"> {formik.errors.city}</dd>

                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" onChange={formik.handleChange} name="Gender" value='male'/>
                        <label>Male</label>
                        <input type="radio" onChange={formik.handleChange} name="Gender" value="female" />
                        <label>Female</label>
                    </dd>
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                    <button type="submit">Submit</button>
                </dl>
                
            </form>

        </div>
    )
}