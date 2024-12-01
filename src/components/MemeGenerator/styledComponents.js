// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 50px 30px;
`
export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1100px;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`
export const Heading = styled.h1`
  color: #35469c;
  font-family: 'roboto';
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 48px;
  }
`
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const CustomLabel = styled.label`
  color: #7e858e;
  font-size: 16px;
  font-family: 'roboto';
  line-height: 1.5;
`
export const CustomInput = styled.input`
  margin: 0 0 15px 0;
  font-size: 16px;
  font-family: 'roboto';
  color: #5a7184;
  padding: 8px 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #7e858e;
  cursor: pointer;
`
export const CustomSelect = styled.select`
  margin: 0 0 15px 0;
  padding: 8px 10px;
  font-size: 16px;
  font-family: 'roboto';
  color: #5a7184;
  border-radius: 5px;
  outline: none;
  border: 1px solid #7e858e;
  cursor: pointer;
`
export const CustomOption = styled.option`
  font-size: 16px;
  font-family: 'roboto';
  color: #5a7184;
  cursor: pointer;
`
export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-size: 16px;
  font-family: 'roboto';
  padding: 8px 35px;
  border: none;
  outline: none;
  align-self: flex-start;
  border-radius: 5px;
  cursor: pointer;
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 20px;
  margin: 20px 0;
  @media screen and (min-width: 768px) {
    order: 2;
    width: 50%;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-family: 'roboto';
  text-align: center;
`
