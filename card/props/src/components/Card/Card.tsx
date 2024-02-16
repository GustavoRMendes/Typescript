import * as Styled from './style'

type User = {
  firstName: string
  age: number
  bio: string
  LinkedInUrl: string
  imagem: string
}

export const Card = ({ firstName, age, bio, LinkedInUrl: LinkedInUrl,imagem }: User) => {
  return (
    <>
      <Styled.Container>
        <Styled.Header>
          <img style={{width:'100px', borderRadius:'50%'}} src={imagem} alt={'Perfil do ' +  {firstName}} />
          <h3>Nome: {firstName}</h3>
        </Styled.Header>
        <p>Idade: {age}</p>
        <p>Biografia: {bio}</p>
        <button style={{cursor:'pointer'}}>
         <a href={LinkedInUrl} target='_blank'> Linkedin </a> 
        </button>
      </Styled.Container>
    </>
  )
}
