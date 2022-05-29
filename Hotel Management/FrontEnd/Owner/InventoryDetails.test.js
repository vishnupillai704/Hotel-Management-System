import { render, screen } from '@testing-library/react';
import InventoryDetails from './InventoryDetails';

test('EmployeeHeading',()=>{
    render(<InventoryDetails/>);
    const Heading=screen.getByText(/Employee List/i)
    expect(Heading).toBeInTheDocument();
})

test('InventoryHeading',()=>{
    render(<InventoryDetails/>);
    const InventoryHeading=screen.getByText(/Inventory List/i)
    expect(InventoryHeading).toBeInTheDocument();
})




