import { render, screen } from '@testing-library/react';
import Home from './Home';


test('renders home component',()=>{
    render(<Home/>);
    const HomeComponent=screen.getByText(/Welcome to Online Hotel Management System/i);
    expect(HomeComponent).toBeInTheDocument();
});
test('Quote of home Page',()=>{
    render(<Home/>);
    const HomeTitle=screen.getByText(/Luxury must be comfortable otherwise it is not luxury/i);
    expect(HomeTitle).toBeInTheDocument();
})
test('Login Page',()=>{
    render(<Home/>);
    const HomeLogintext=screen.getByText(/Login to Continue/i);
    expect(HomeLogintext).toBeInTheDocument();
});

