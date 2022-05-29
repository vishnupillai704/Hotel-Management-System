import { render, screen } from '@testing-library/react';
import InventoryInformation from './InventoryInformation';

test('EmployeeList Heading',()=>{
    render(<InventoryInformation/>)
    const EmployeeHeading=screen.getByText(/Employee List/i);
    expect(EmployeeHeading).toBeInTheDocument();
})

test('InventoryList Heading',()=>{
    render(<InventoryInformation/>);
    const InventoryList=screen.getByText(/Inventory List/i)
    expect(InventoryList).toBeInTheDocument();
})