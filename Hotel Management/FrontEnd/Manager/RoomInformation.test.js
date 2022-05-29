import { render, screen } from '@testing-library/react';
import RoomInformation from './RoomInformation';


test('Room List Heading',()=>{
    render(<RoomInformation/>)
    const RoomHeading=screen.getByText(/Guest List/i);
    expect(RoomHeading).toBeInTheDocument();
})







