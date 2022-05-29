import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Footer Heading',()=>{
    render(<Footer/>);
    const Heading=screen.getByText(/Hotel Management System/i);
    expect(Heading).toBeInTheDocument();
})

test('Copyright',()=>{
    render(<Footer/>);
    const Copyright=screen.getByText(/Copyright @2022 HotelManagement,Inc./i);
    expect(Copyright).toBeInTheDocument();
})

test('CustomerCareEmail',()=>{
    render(<Footer/>);
    const CustomerCareEmail=screen.getByText(/Customer Care Email/i);
    expect(CustomerCareEmail).toBeInTheDocument();
})