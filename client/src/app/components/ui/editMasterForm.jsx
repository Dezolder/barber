import React, { useState } from 'react'
import TextField from '../common/form/textField'
import { PropTypes } from 'prop-types'

const EditMasterForm = ({ data, onSubmit }) => {
  const [form, setData] = useState(data)
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label={'Имя: '}
          id={form.name}
          name={'name'}
          value={form.name || ''}
          onChange={handleChange}
        />
        <TextField
          label={'Рейтинг: '}
          id={form.rate}
          name={'rate'}
          value={form.rate || ''}
          onChange={handleChange}
        />
        <TextField
          label={'Класс: '}
          id={form.class}
          name={'class'}
          value={form.class || ''}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary w-100 mx-auto">
          Submit
        </button>
      </form>
    </>
  )
}

EditMasterForm.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func
}

export default EditMasterForm
