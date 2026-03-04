import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home'
import { setDocument } from '@/backend/Database'


const Navbar = () => {
  const { setUser } = useStateContext()

  async function document_test() { //This was for testing purposes for the Database portion of Firebase
    await setDocument("users", "user123", { name: "Bob" });
  }


  return (
    <Nav>
      <LeftSide>
        <Home></Home>
        <Logo onClick={() => logOut(setUser)} href="/">MoreFlicks</Logo>
      </LeftSide>

      <NavLinks>
        <ButtonLink href="/auth/signup">Sign Up</ButtonLink>
        <ButtonLink href="/auth/login">Login</ButtonLink>
        {/*<ButtonLink href="/auth/login">Watchlist</ButtonLink> --> Need to add this link for later, but need user to be signed in beforehand */}
        <ButtonLink href="/about">About Us</ButtonLink>
        <ButtonLink href="/contact">Contact Us</ButtonLink>
        {/*<Button onClick={document_test}>Click Me</Button>*/} 
      </NavLinks>
    </Nav>
  );
};

const Button = styled.button`

`;


const Nav = styled.nav`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: #c99a6bff;
  position: sticky; /* I believe this allows for the navigation bar to stay while you scroll the web page */
  top: 0;
  z-index: 1000; /*The z-index makes it so that this element will appear on top of other elements, like layering */
`;


const Logo = styled(Link)`
  color: #2F1F0E;
  text-decoration: none; /* removes the underlines for links */
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 1;

  &:hover {
    color: #ffffff;
  }
`;

const NavLinks = styled.div` /* This is for the separate links on the top right, particularly about spacing */
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const ButtonLink = styled(Link)`
  color: #2F1F0E;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  padding: 8px 10px;
  border-radius: 10px;

  &:hover {
    color: #ffffff;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`;

const SearchBar = styled.form`
//Add a search bar somewhere

`;


export default Navbar;
