import React from 'react'
import Alert from 'components/Alert'
import services from 'data/services'
import module from './form.module.styl'

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      error: null,
      isLoading: false,
      wasSent: false,
      message: `Seu email foi enviado com sucesso.
        Aguarde, que em breve retornarei com uma respota para o seu pedido.`,
    }

    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  handleSubmitForm(event) {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)

    this.setState({
      isLoading: true,
    })

    console.log(form)
    console.log(data)

    fetch(`/contato`, {
      method: `POST`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data,
    })
      .then(res => {
        if (res.ok) {
          this.setState({
            wasSent: true,
          })
          return res
        }
      })
      .catch(error => {
        this.setState({
          wasSent: false,
          error,
        })
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        })
      })
  }

  render() {
    const { error, isLoading, wasSent, message } = this.state
    if (error) console.error(error)

    return (
      <form
        name="contact"
        className={module.form}
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={this.handleSubmitForm}
      >
        <input type="hidden" name="bot-field" />
        <legend>
          Ou preencha seus dados abaixo e aguarde que entro em contato.
        </legend>

        {isLoading && <Alert message="Enviando..." type="info" />}
        {wasSent && <Alert message={message} type="success" />}
        {error && <Alert message={error.message} type="danger" />}

        <div className={module.group}>
          <label htmlFor="formName" className={module.label}>
            Nome completo
          </label>
          <input
            id="formName"
            type="text"
            name="name"
            className={module.input}
            required
          />
        </div>

        <div className={module.group}>
          <label htmlFor="formEmail" className={module.label}>
            Seu melhor email
          </label>
          <input
            id="formEmail"
            type="email"
            name="email"
            className={module.input}
            required
          />
        </div>

        <div className={module.group}>
          <label htmlFor="formPhone" className={module.label}>
            Telefone (WhatsApp)
          </label>
          <input
            id="formPhone"
            type="number"
            name="phone"
            className={module.input}
            required
          />
        </div>

        <div className={module.group}>
          <label htmlFor="formService" className={module.label}>
            Serviço
          </label>
          <select
            id="formService"
            name="service[]"
            className={`${module.input} ${module.select}`}
            required
          >
            <option value="">Selecione o serviço</option>
            {services.map((service, i) => (
              <option key={i} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className={module.group}>
          <label htmlFor="formBudget" className={module.label}>
            Orçamento
          </label>
          <select
            id="formBudget"
            name="budget[]"
            className={`${module.input} ${module.select}`}
            required
          >
            <option value="">Selecione o orçamento</option>
            <option value="&lt; R$ 1.000">&lt; R$ 1.000</option>
            <option value="R$ 1.000 - R$ 3.000">R$ 1.000 - R$ 3.000</option>
            <option value="R$ 3.000 - R$ 5.000">R$ 3.000 - R$ 5.000</option>
            <option value="R$ 5.000 &gt;">R$ 5.000 &gt;</option>
          </select>
        </div>

        <div className={module.group}>
          <div data-netlify-recaptcha="true" />
        </div>

        <div className={module.group}>
          <label htmlFor="formMessage" className={module.label}>
            Sua mensagem
          </label>
          <textarea
            id="formMessage"
            className={`${module.input} ${module.textarea}`}
            name="message"
            required
          />
        </div>

        <div className={`${module.group} ${module.footer}`}>
          <small>*Todos os campos são obrigatórios</small>
          <button type="submit" className={`button ${module.button}`}>
            Ok, enviar
          </button>
        </div>
      </form>
    )
  }
}

export default Form
