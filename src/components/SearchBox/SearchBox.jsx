import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const handleFilter = (e) => dispatch(changeFilter(e.target.value));
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilter} />
    </div>
  );
}
