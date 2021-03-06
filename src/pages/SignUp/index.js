import React, { useState } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import { createCustomer } from '../../api/customers/createCustomer'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { schema } from './schema'
import * as customerActions from '../../store/customer/actions'

const initialValues = {
  firstName: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

const SignUpPage = ({ login, history }) => {
  const [globalError, setGlobalError] = useState('')

  const handleOnSubmit = async (
    { email, password, firstName },
    { setSubmitting }
  ) => {
    try {
      setSubmitting(true)
      await createCustomer({ email, password, firstName })
      await login({
        username: email,
        password,
        push: history.push,
      })
    } catch (error) {
      setGlobalError(error.message)
    }
    setSubmitting(false)
  }

  return (
    <Layout dataTestId="signup-page">
      <H1 textAlign="center">Sign Up</H1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleOnSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            {Boolean(globalError) && (
              <GlobalFormError>{globalError}</GlobalFormError>
            )}
            <Input name="firstName" label="First name" />
            <Input name="email" type="email" label="Email address" />
            <Input name="password" type="password" label="Password" />
            <Input
              name="passwordConfirm"
              type="password"
              label="Confirm password"
            />
            <Button type={'submit'} disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up' : 'Sign Up'}
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

const mapDispatchToProps = {
  login: customerActions.login,
}

export const SignUp = connect(
  null,
  mapDispatchToProps
)(SignUpPage)
