import { render, screen } from "@testing-library/react"
import Roomdetails from './Roomdetails'
test('RoomListHeading',()=>{
    render(<Roomdetails/>);
    const RoomHeading=screen.getByText(/Room List/i);
    expect(RoomHeading).toBeInTheDocument();
})