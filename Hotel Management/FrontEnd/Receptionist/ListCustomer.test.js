import { render, screen } from '@testing-library/react';
import ListCustomer from './ListCustomer';

test('Chech-In guest List Heading',()=>{
    render(<ListCustomer/>);
    const CustomerDetails=screen.getByText(/Check-In Guests/i);
    expect(CustomerDetails).toBeInTheDocument();
});

test('Chech-Out guest List Heading',()=>{
    render(<ListCustomer/>);
    const CustomerCheckOutDetails=screen.getByText(/Check-Out Guests/i);
    expect(CustomerCheckOutDetails).toBeInTheDocument();
});

test('Room-Rate',()=>{
    render(<ListCustomer/>);
    const RoomRateDetail=screen.getByText(/Room-Rate/i);
    expect(RoomRateDetail).toBeInTheDocument();
});