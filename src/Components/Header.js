import React from 'react';
import { Link } from 'react-router-dom';
import { useConnect } from '@blockstack/connect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faAddressBook} />

const Header = () => {
  
    const { doOpenAuth } = useConnect();
    const onClick = () => {
      doOpenAuth();
    };
  

  return (
    <>
      <nav className="fixed w-full z-10 top-0 flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
            {element}
              {/* <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/> */}
              </svg>
            {/* {element} */}
            <span className="font-semibold text-xl tracking-tight">
              <Link to='/'>Guest Book</Link>
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                GitHub
              </a>
            </div>
            <div>
            <a href="#responsive-header" onClick={onClick} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Sign In
              </a>
              <button onClick={onClick} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Register</button>
            </div>
          </div>
      </nav>
   </>
  );
}

export default Header;


 
//  <div style={HeaderStyle}>
//  <Navbar color="light" light expand="md">
//    <NavbarBrand>Home</NavbarBrand>
//    <NavbarToggler onClick={toggle} />
//    <Collapse isOpen={isOpen} navbar>
//      <Nav className="mr-auto" navbar>
//        <NavItem>
//          <NavLink href="/components/">Projects</NavLink>
//        </NavItem>
//        <NavItem>
//          <NavLink href="https://github.com/emmaodia/contributetoit">GitHub</NavLink>
//        </NavItem>
//      </Nav>
//      <Button color="secondary">Creat Project</Button>
//      {/* <NavbarText>Creat Project</NavbarText> */}
//    </Collapse>
//  </Navbar>
//   <Switch>
//      {routes.map(({ path, component: Component, exact}, index ) => (
//        <Route 
//          key={index}
//          path={path}
//          exact={exact}
//          render={(props) => <Component {...props} />}
//        />
//      ))}
//    </Switch>
// </div>