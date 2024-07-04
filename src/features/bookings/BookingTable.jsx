import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import { useGetAllBooing } from "./useGetAllBooking";

function BookingTable() {
  const { bookings, isLoading, error } = useGetAllBooing();
  if (isLoading) return <Spinner />;
  if (!bookings?.length) return <Empty resource={"订阅"} />;
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>房间</div>
          <div>顾客</div>
          <div>日期</div>
          <div>状态</div>
          <div>账户</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
