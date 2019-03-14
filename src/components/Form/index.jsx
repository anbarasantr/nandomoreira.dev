import React from 'react'
import services from 'data/services'
import module from './form.module.styl'

const Form = () => (
  <form name="contact" className={module.form} method="post" data-netlify>
    <legend>
      Ou preencha seus dados abaixo e aguarde que entro em contato.
    </legend>
    <div className={module.group}>
      <label for="formName" className={module.label}>
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
      <label for="formEmail" className={module.label}>
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
      <label for="formPhone" className={module.label}>
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
      <label for="formService" className={module.label}>
        Serviço
      </label>
      <select
        id="formService"
        name="role[]"
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
      <label for="formBudget" className={module.label}>
        Orçamento
      </label>
      <select
        id="formBudget"
        name="role[]"
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
      <label for="formMessage" className={module.label}>
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

export default Form
