import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useSelector, useDispatch } from "react-redux";
import { setSearchBarValue, setLoadingTrue, setLoadingFalse } from "../../actions";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const Sidebar = ({ searchFn }) => {
  const dispatch = useDispatch();
  const queryArr = useSelector((state) => state.searchQuery);

  const search = async (value) => {
    dispatch(setLoadingTrue());
    dispatch(setSearchBarValue(value));
    await searchFn(value, false, false);
    dispatch(setLoadingFalse());
  };

  return (
    <ProSidebar className="sidebar">
      <Menu>
        {queryArr.length
          ? queryArr.map((result, index) => {
              return (
                <MenuItem
                  key={index}
                onClick={() =>
                  search(result)
          }>
                  {result}
                </MenuItem>
              );
            })
          : null}
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
