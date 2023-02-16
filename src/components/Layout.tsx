import Link from 'next/link';
import { Children } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  min-height: 100vh;
  position: relative;
`;
const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;

  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.tabColor};
  > h1 {
    color: ${({ theme }) => theme.mainColor};
  }
  > ul {
    display: flex;
    width: 30%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    a {
      transition: ${({ theme }) => theme.transition};
      &:hover {
        color: ${({ theme }) => theme.highlightColor};
      }
    }
  }
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <Div>
      <Nav>
        <h1>GitMovie</h1>
        <ul>
          <li>
            <Link href={'/movies'}>MOVIES</Link>
          </li>
          <li>
            <Link href={'/movies'}>TVS</Link>
          </li>
          <li>
            <Link href={'/movies'}>PEOPLE</Link>
          </li>
        </ul>
        <button>Login</button>
      </Nav>
      <div>{children}</div>
    </Div>
  );
};

export default Layout;
