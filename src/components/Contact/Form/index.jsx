import React, { Component } from 'react'
import {
  withFormik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import { Alert } from 'components/Common'
import classes from './form.module.styl'
import './form.styl'

const isEmail = str =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str) // eslint-disable-line

const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: ''
}

class ContactForm extends Component {
  constructor () {
    super()

    this.state = {
      message: {
        success: `Seu email foi enviado com sucesso.
          Aguarde, que em breve retornarei com uma respota para o seu pedido.`,
        error: `Erro ao enviar seu email.`
      }
    }
  }

  render () {
    const {
      services,
      status,
      values,
      errors,
      touched,
      isSubmitting,
      isValid
    } = this.props

    const { message } = this.state

    return (
      <Form
        name="contact"
        method="POST"
        action="/success"
        className={`card form ${ classes.form }`}
        data-netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={this.handleChangeField} />
          </label>
        </p>

        <legend>
          Preencha seus dados abaixo e aguarde que entro em contato.
        </legend>

        {isSubmitting &&
          <Alert message="Enviando, aguarde..." type="info" />
        }
        {status &&
          <Alert message={message.success} type="success" />
        }

        {/* {(status && status.error) && <Alert message={message.error} type="danger" />} */}

        <div className={classes.group}>
          <label htmlFor="formName" className={classes.label}>
            Nome completo
          </label>
          <Field
            name="name"
            render={({ field }) => (
              <input
                {...field}
                id="formName"
                disabled={isSubmitting}
                value={values.name || ''}
                type="text"
                className={
                  `form__input ${ classes.input } ${ errors.name && touched.name ? classes.inputError : '' }`
                }
              />
            )}
          />
          <ErrorMessage name="name">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formName">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label htmlFor="formEmail" className={classes.label}>
            Seu melhor email
          </label>
          <Field
            name="email"
            render={({ field }) => (
              <input
                {...field}
                id="formEmail"
                type="email"
                value={values.email || ''}
                disabled={isSubmitting}
                className={
                  `form__input ${ classes.input } ${ errors.email && touched.email ? classes.inputError : '' }`
                }
              />
            )}
          />
          <ErrorMessage name="email">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formEmail">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label htmlFor="formPhone" className={classes.label}>
            Telefone (WhatsApp)
          </label>
          <Field
            name="phone"
            render={({ field }) => (
              <input
                {...field}
                id="formPhone"
                value={values.phone || ''}
                disabled={isSubmitting}
                className={
                  `form__input ${ classes.input } ${ errors.phone && touched.phone ? classes.inputError : '' }`
                }
              />
            )}
          />
          <ErrorMessage name="phone">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formPhone">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label htmlFor="formService" className={classes.label}>
            Serviço
          </label>
          <Field
            component="select"
            name="service"
            render={({ field }) => (
              <select
                {...field}
                id="formService"
                disabled={isSubmitting}
                value={values.service || ''}
                className={
                  `form__input ${ classes.input } ${ classes.select } ${ errors.service && touched.service ? classes.inputError : '' }`
                }
              >
                <option value="">Selecione o serviço</option>
                {services.map((service, i) => (
                  <option key={i} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            )}
          />

          <ErrorMessage name="service">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formService">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label htmlFor="formBudget" className={classes.label}>
            Orçamento
          </label>
          <Field
            component="select"
            name="budget"
            render={({ field }) => (
              <select
                {...field}
                id="formBudget"
                disabled={isSubmitting}
                value={values.budget || ''}
                className={
                  `form__input ${ classes.input } ${ classes.select } ${ errors.budget && touched.budget ? classes.inputError : '' }`
                }
              >
                <option value="">Selecione o orçamento</option>
                <option value="&lt; R$ 1.000">&lt; R$ 1.000</option>
                <option value="R$ 1.000 - R$ 3.000">R$ 1.000 - R$ 3.000</option>
                <option value="R$ 3.000 - R$ 5.000">R$ 3.000 - R$ 5.000</option>
                <option value="R$ 5.000 &gt;">R$ 5.000 &gt;</option>
              </select>
            )}
          />
          <ErrorMessage name="budget">
            {msg =>
              <label
                className={`${ classes.alertError }`}
                htmlFor="formBudget"
              >
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={classes.group}>
          <label
            htmlFor="formMessage"
            className={classes.label}
          >
            Sua mensagem
          </label>
          <Field
            component="textarea"
            name="message"
            render={({ field }) => (
              <textarea
                {...field}
                id="formMessage"
                value={values.message || ''}
                className={
                  `form__input ${ classes.input } ${ classes.textarea } ${ errors.message && touched.message ? classes.inputError : '' }`
                }
              />
            )}
          />
          <ErrorMessage name="message">
            {msg =>
              <label className={`${ classes.alertError }`} htmlFor="formMessage">
                {msg}
              </label>
            }
          </ErrorMessage>
        </div>

        <div className={`${ classes.group } ${ classes.footer }`}>
          <small>*Todos os campos são obrigatórios</small>
          <button
            type="submit"
            className={`button button--primary ${ classes.button }`}
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting && `Enviando...`}
            {!isSubmitting && `Ok, enviar`}
          </button>
        </div>
      </Form>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => defaultValues,

  validate (values) {
    const errors = {}
    const items = Object.entries(values)

    if (!isEmail(values.email)) {
      errors.email = `O email parece inválido.`
    }

    items
      .filter(field => field[1] === '')
      .map(field => {
        const _field = field[0]
        errors[_field] = `Esse campo é obrigatório.`
      })

    return errors
  },

  async handleSubmit (values, { resetForm, setStatus, setSubmitting }) {
    setStatus({ error: false, success: false })
    setSubmitting(true)

    await sleep(2000).then(() =>
      fetch(`/contato`, {
        method: `POST`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values })
      })
        .then(() => resetForm({}))
        .then(() => setSubmitting(false))
        .then(() => setStatus({ success: true }))
        .catch(() => setStatus({ error: true }))
    )
  }
})(ContactForm)
