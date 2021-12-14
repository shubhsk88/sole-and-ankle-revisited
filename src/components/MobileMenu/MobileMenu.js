/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={20} />
          <VisuallyHidden>Close Button</VisuallyHidden>
        </CloseButton>

        <Side />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: hsl(220 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  cursor: pointer;
  padding: 16px;

  right: 6px;
`;

const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  padding-left: 32px;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  text-decoration: none;
  font-size: 1.1rem;
  text-transform: uppercase;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  padding-left: 32px;
`;
const Content = styled(DialogContent)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
`;

const FooterLink = styled.a`
  font-size: 0.9rem;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
`;
export default MobileMenu;
