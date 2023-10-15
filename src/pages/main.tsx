import styled from 'styled-components'

export const Div = styled.div`
  text-align: center;
  margin-top: 2rem;
`


export default function Main() {
  return (
    <Div>
      <img
        src='https://devsamurai-materials.s3.amazonaws.com/templates/avatar-gradient-dark.svg'
        height='256'
        alt='Dev Samurai'
      />
      <h1>Fala Samurai!</h1>
      <p>Esse é o template typescript básico da Dev Samurai para React.</p>
    </Div>
  )
}
