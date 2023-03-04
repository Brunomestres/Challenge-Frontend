import {Container, Image, Menu, Link , Banner } from './style'
import Logo from '../../assets/Logo.png'
import BannerImage from '../../assets/Banner.png'
export const Header = () => {
  return (
    <>
    <Container>
      <Image src={Logo}/>
      <Menu>
        <Link href='*'>A experiência</Link>
        <Link href='*'>Mapa de Setores</Link>
        <Link href='*'>Informações</Link>
        <Link href='*'>Ingresso</Link>
      </Menu>
    </Container>
      <Banner src={BannerImage} />
    </>
  )
}
