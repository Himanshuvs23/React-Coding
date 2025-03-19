import {Formik,Form,Field,ErrorMessage } from "formik"
import * as yup from "yup"

export function Formikbuildin(){

     return(
        <div>
            <Formik initialValues={{ Username:''}} validationSchema={yup.object({Username:yup.string().required('Required name')})} onSubmit={(values)=>{console.log('form values ',values)}} >
             
             <Form>
                <dl>
                    <dt>User Name</dt>
                    <dd> <Field type='text' name='Username' /></dd>
                    <dd className="text-danger" ><ErrorMessage name="Username" ></ErrorMessage></dd>
                </dl>
                <button type="submit" >Submit</button>
             </Form>

            </Formik>
        </div>
     )
}