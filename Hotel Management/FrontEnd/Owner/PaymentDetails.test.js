import { render, screen } from '@testing-library/react';
import PaymentDetails from './PaymentDetails';

test('PaymentList',()=>{
    render(<PaymentDetails/>);
    const Heading = screen.getByText(/Payment List/i);
    expect(Heading).toBeInTheDocument();
})