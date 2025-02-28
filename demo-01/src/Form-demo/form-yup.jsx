 //*yup gives predefied validation in formik lib....
 import {useFormik} from "formik"
 import * as yup from 'yup'

  export function Formdemo1 (){

    const formik = useFormik({
        initialValues:{
            Username:'',
            email:'',
            password : '',
            mobile:'',
            age:'',
            city:'',
            Gender:'',
            

        },

        //*validationSchema is use to validate the yup 
        validationSchema: yup.object({
            Username:yup.string().required('UserName is required').min(4,'name to short').max(15,'name to large'),
            age:yup.number().required('Age is required').min(18,'under age').max(30,'maximun age is 30'),
            mobile:yup.string().required('mobile number is required').matches(/\+91\d{10}/,'invalid mobile number'),
            email:yup.string().required('email is required').email('invalid email format'),
            password:yup.string().required("password is required").min(4,'to short').max(16,'to Large'),
            city:yup.string().required('choose city please'),
            Gender:yup.string().required('Select gender please')

        }),

        
        onSubmit:(values)=>{
            console.log('form values :',values);
        }
        
    })

    return (
        <div className="container-fluid">

            <form onSubmit={formik.handleSubmit}         >
            <h3>Registration Form</h3>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" name="Username"  onChange={formik.handleChange}  onBlur={formik.handleBlur} /></dd>
                    <dd className="text-danger">{formik.touched.Username &&formik.errors.Username}</dd>
                    <dt>Email</dt>
                     <dd><input type="email" name="email"  value={formik.values.email} onChange={formik.handleChange}    /></dd>
                     <dd className="text-danger" >{formik.touched.email &&formik.errors.email}</dd> 
                    <dt>Password</dt>
                    <dd><input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.touched.password &&formik.errors.password}</dd>
                    <dt>Mobile Number</dt>
                    <dd><input type="text" name="mobile" value={formik.values.mobile} onChange={formik.handleChange}   /></dd>
                    <dd className="text-danger">{formik.touched.mobile &&formik.errors.mobile}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="age" value={formik.values.age} onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.touched.age &&formik.errors.age}</dd>
                    <dt>City</dt>

                    <dd>
                    <select name="city" value={formik.values.city} onChange={formik.handleChange} >
                            <option value='-1' >Select City</option>
                            <option value='Delhi' >Delhi</option>
                            <option value='Hyd'>Hyd</option>
                        </select>

                    </dd>
                    
                    <dd className="text-danger"> {formik.touched.Gender &&formik.errors.city}</dd>

                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" onChange={formik.handleChange} checked={formik.values.Gender === "male"} name="Gender" value='male'/>
                        <label>Male</label>
                        <input type="radio" onChange={formik.handleChange} checked={formik.values.Gender === "female"} name="Gender" value="female" />
                        <label>Female</label>
                    </dd>
                    <dd className="text-danger">{formik.touched.Gender &&formik.errors.Gender}</dd>
                    <button type="submit">Submit</button>
                </dl>
                
            </form>

        </div>
    )
}