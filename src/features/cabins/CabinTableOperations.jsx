import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        field="discount"
        options={[
          { value: "all", label: "所有" },
          { value: "only-discount", label: "仅折扣" },
          { value: "no-discount", label: "无折扣" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "按名字排序(a-z)" },
          { value: "name-desc", label: "按名字倒序(z-a)" },
          { value: "regularPrice-asc", label: "按正常价格排序" },
          { value: "regularPrice-desc", label: "按正常价格倒序" },
          { value: "maxCapacity-asc", label: "按容量排序" },
          { value: "maxCapacity-desc", label: "按容量倒序" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
