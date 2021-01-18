import React from 'react';
import { render } from 'react-dom';
import MaskedInput from 'react-text-mask';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Container } from './styles';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name too short!')
    .max(50, 'Name too Long!')
    .required('Name is Required'),
  phone: Yup.string(),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Contact: React.FC = () => (
  <Container>
    <div className="container">
      <h4>Try for free NOW</h4>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // console.log(values);
          alert(
            `Thank you ${values.name} for you request, check your mailbox for more informations...`,
          );
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.name && touched.name ? (
              <div className="error-msg">{errors.name}</div>
            ) : null}
            <Field name="name" placeholder="Your Name" />

            {errors.email && touched.email ? (
              <div className="error-msg">{errors.email}</div>
            ) : null}
            <Field name="email" type="email" placeholder="Your best e-mail" />

            {errors.phone && touched.phone ? (
              <div className="error-msg">{errors.phone}</div>
            ) : null}
            <Field
              name="phone"
              render={() => (
                <MaskedInput
                  name="phone"
                  mask={[
                    '(',
                    /[1-9]/,
                    /\d/,
                    ')',
                    ' ',
                    /\d?/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="Your Phone"
                  guide={false}
                />
              )}
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  </Container>
);

export default Contact;
