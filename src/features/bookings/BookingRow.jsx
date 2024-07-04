import styled from "styled-components";
import { isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const statusInChinese =
    status === "checked-in"
      ? "已入住"
      : status === "checked-out"
      ? "已退房"
      : "已取订";
  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "今天"
            : formatDistanceFromNow(startDate)}
          &rarr; 住{numNights}个夜晚
        </span>
        <span>
          {new Date(startDate).toLocaleString()} &mdash;
          {new Date(endDate).toLocaleString()}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{statusInChinese}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
    </Table.Row>
  );
}

export default BookingRow;
