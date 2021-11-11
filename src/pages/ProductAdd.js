
import React from 'react'
import { Formik, Field} from 'formik'
import * as Yup from 'yup'

import { Button, Form, FormField} from 'semantic-ui-react'


export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Urun adi zorunlu"),
        unitPrice: Yup.number().required("Urun fiyati zoruinlu")
    });


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}>
                <Form className="ui form"> 
                   
                    <FormField>
                        <Field name="productName" placeholder="Product Name"></Field>
                    </FormField>
                    <Form.Field>
                        <Field name="unitPrice" placeholder="Unit Price"></Field>
                    </Form.Field>
                    <Button color="green" type="submit">Add</Button>
                </Form>
            </Formik>

        </div>
    )
}
