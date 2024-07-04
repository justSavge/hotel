import Row from "../ui/Row";
import Ps from "../ui/Ps";
import Heading from "../ui/Heading";
import BookingTable from "../features/bookings/BookingTable";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">所有订阅</Heading>
        <p>test</p>
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
