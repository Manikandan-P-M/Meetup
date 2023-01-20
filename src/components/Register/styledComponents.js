import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const Nav = styled.nav`
  padding: 20px;
`
export const RegisterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 750px;
  margin: auto;
`
export const RegImg = styled.img`
  height: 100%;
  width: 50%;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 50px;
`
export const FormHeading = styled.h1`
  color: #334155;
  font-size: 40px;
  margin-bottom: 15px;
`
export const Label = styled.label`
  color: #475569;
  font-weight: 500;
  margin-bottom: 10px;
`
export const Input = styled.input`
  border: 1px solid #cbd5e1;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
`
export const Select = styled.select`
  border: 1px solid #cbd5e1;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
`
export const RegBtn = styled.button`
  color: #fff;
  align-self: flex-start;
  background-color: #3b82f6;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  outline: none;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin-top: 5px;
`
