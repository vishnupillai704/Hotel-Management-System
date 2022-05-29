import { render, screen } from '@testing-library/react';
import SignOut from './SignOut';

test('LogOut Heading',()=>{
    render(<SignOut/>);
    const LogOut=screen.getByText(/You are Logged Out!/i);
    expect(LogOut).toBeInTheDocument();
})

test('discription',()=>{
    render(<SignOut/>);
    const discription=screen.getByText(/Have a Nice day/i);
    expect(discription).toBeInTheDocument();
})