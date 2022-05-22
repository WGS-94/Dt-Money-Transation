import React from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Content } from './style';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="detmoney" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}
