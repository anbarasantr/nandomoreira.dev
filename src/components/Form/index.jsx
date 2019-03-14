import React from 'react'
import Alert from 'components/Alert'
import services from 'data/services'
import module from './form.module.styl'

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      formData: {
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      },
      error: null,
      isLoading: false,
      wasSent: false,
      message: `Seu email foi enviado com sucesso.
        Aguarde, que em breve retornarei com uma respota para o seu pedido.`,
    }

    this.handleChangeField = this.handleChangeField.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  handleChangeField = event => {
    const formData = {
      ...this.state.formData,
      ...{
        [event.target.name]: event.target.value,
      },
    }

    this.setState({ formData })
  }

  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  handleSuccess = res => {
    this.setState({
      res,
      isLoading: false,
      wasSent: true,
      formData: {
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      },
    })
  }

  handleSubmitForm(event) {
    this.setState({
      isLoading: true,
    })

    fetch(`/contato`, {
      method: `POST`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contact', ...this.state.formData }),
    })
      .then(res => this.handleSuccess(res))
      .catch(error => {
        this.setState({
          wasSent: false,
          error,
        })
      })

    event.preventDefault()
  }

  render() {
    const { error, isLoading, wasSent, message } = this.state
    if (error) console.error(error)

    return (
      <form
        name="contact"
        action="/success"
        className={module.form}
        method="POST"
        onSubmit={this.handleSubmitForm}
        data-netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChangeField} />
          </label>
        </p>

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
            value={this.state.formData.name}
            className={module.input}
            onChange={this.handleChangeField}
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
            value={this.state.formData.email}
            className={module.input}
            onChange={this.handleChangeField}
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
            value={this.state.formData.phone}
            className={module.input}
            onChange={this.handleChangeField}
            required
          />
        </div>

        <div className={module.group}>
          <label htmlFor="formService" className={module.label}>
            Serviço
          </label>
          <select
            id="formService"
            name="service"
            value={this.state.formData.service}
            className={`${module.input} ${module.select}`}
            onChange={this.handleChangeField}
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
            name="budget"
            value={this.state.formData.budget}
            className={`${module.input} ${module.select}`}
            onChange={this.handleChangeField}
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
          <label htmlFor="formMessage" className={module.label}>
            Sua mensagem
          </label>
          <textarea
            id="formMessage"
            value={this.state.formData.message}
            className={`${module.input} ${module.textarea}`}
            onChange={this.handleChangeField}
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
