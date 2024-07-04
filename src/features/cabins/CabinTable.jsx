import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import { useGetAllCabins } from "./useGetAllCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useGetAllCabins();
  const [searchParams] = useSearchParams();
  if (!cabins?.length) return <Empty resource="房间" />;
  if (isLoading) return <Spinner />;
  let filterCabins;
  const paramsDiscountHandle = searchParams.get("discount") || "all";
  if (paramsDiscountHandle === "all") filterCabins = cabins;
  if (paramsDiscountHandle === "only-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (paramsDiscountHandle === "no-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  const sortByHandle = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByHandle.split("-");
  const modifer = direction === "asc" ? 1 : -1;
  filterCabins.sort((a, b) => (a[field] - b[field]) * modifer);
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>客房</div>
          <div>容量</div>
          <div>价格</div>
          <div>折扣</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filterCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
