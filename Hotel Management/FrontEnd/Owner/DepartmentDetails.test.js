import { render, screen } from '@testing-library/react';
import DepartmentDetails from './DepartmentDetails';

test('Department Heading',()=>{
   render(<DepartmentDetails/>);
   const Header=screen.getByText(/Department List/i)
   expect(Header).toBeInTheDocument();
})

