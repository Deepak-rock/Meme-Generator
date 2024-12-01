import {Component} from 'react'
import {
  AppContainer,
  ResponsiveContainer,
  MemeGeneratorContainer,
  Heading,
  FormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  CustomButton,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imgUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    backgroundImgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({imgUrlInput: event.target.value})
  }

  onChangeToptext = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomtext = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontsize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imgUrlInput, topTextInput, bottomTextInput, fontSizeInput} =
      this.state

    this.setState({
      backgroundImgUrl: imgUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  renderForm = () => {
    const {imgUrlInput, topTextInput, bottomTextInput, fontSizeInput} =
      this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>
        <CustomInput
          id="imageUrl"
          type="text"
          placeholder="Enter the Image URL"
          value={imgUrlInput}
          onChange={this.onChangeImageUrl}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          type="text"
          placeholder="Enter the Top Text"
          value={topTextInput}
          onChange={this.onChangeToptext}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          id="bottomText"
          type="text"
          placeholder="Enter the Bottom Text"
          value={bottomTextInput}
          onChange={this.onChangeBottomtext}
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          onChange={this.onChangeFontsize}
          value={fontSizeInput}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomButton type="submit">Generate</CustomButton>
      </FormContainer>
    )
  }

  renderMeme = () => {
    const {backgroundImgUrl, topText, bottomText, fontSize} = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImgUrl}>
        <TextContent fontSize={fontSize}>{topText}</TextContent>
        <TextContent fontSize={fontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Meme Generator</Heading>
          <MemeGeneratorContainer>
            {this.renderMeme()}
            {this.renderForm()}
          </MemeGeneratorContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
