import Button from 'components/Button'
import styled from 'styled-components'

const FormContainer = styled.form`
  width: 500px;
  margin: 0 auto;
  text-align: center;
  display: flex;
`

const FormInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 20px;
`

const Form = ({
  address,
  handleAddressChange,
  handleSubmit
}: {
  address: string
  handleAddressChange: (address: string) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}) => {
  const handleChange = (e) => {
    handleAddressChange(e.target.value)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={handleChange}
      />
      <Button type="submit">Get Weather</Button>
    </FormContainer>
  )
}

export default Form
