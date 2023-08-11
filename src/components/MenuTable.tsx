import { Table } from "react-bootstrap";
import { Menu } from "../pages/Nutrition/Menus";

type MenuTableProps = {
  menu: Menu;
};

const MenuTable = ({ menu }: MenuTableProps): JSX.Element => {
  return (
    <>
      <h1>{menu.title}</h1>
      {menu.comment !== undefined ? <p>{menu.comment}</p> : <></>}
      {/* <div className="vh-80"> */}
      <Table
        bordered
        className="fs-4 text-center"
        style={{ border: "2px solid black" }}
      >
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast</td>
            <td colSpan={5}>{menu.breakfast}</td>
          </tr>
          <tr>
            <td>Mid Morning Snack</td>
            <td colSpan={5}>{menu.midMorningSnack} </td>
          </tr>
          <tr>
            <td>Lunch</td>
            {menu.lunch.map((lunchItem) => {
              return <td>{lunchItem.meal}</td>;
            })}
          </tr>
          {menu.lunch[0].pudding !== undefined ? (
            <tr className="no-border">
              <td>Pudding</td>
              {menu.lunch.map((lunchItem) => {
                return <td>{lunchItem.pudding}</td>;
              })}
            </tr>
          ) : (
            <></>
          )}
          <tr>
            <td>Mid Afternoon Snack</td>
            <td colSpan={5}>{menu.midAfternoonSnack} </td>
          </tr>
          <tr>
            <td>Tea/Dinner</td>
            {menu.dinner.map((dinnerItem) => {
              return <td>{dinnerItem.meal}</td>;
            })}
          </tr>
          {menu.dinner[0].pudding !== undefined ? (
            <tr className="no-border">
              <td>Pudding</td>
              {menu.dinner.map((dinnerItem) => {
                return <td>{dinnerItem.pudding}</td>;
              })}
            </tr>
          ) : (
            <></>
          )}
          {menu.drinks !== undefined ? (
            <tr>
              <td>Drinks</td>
              <td colSpan={5}>
                The children will have water with their meals. Water is
                available throughout the day for children.
              </td>
            </tr>
          ) : (
            <></>
          )}
        </tbody>
      </Table>
      {/* </div> */}
    </>
  );
};

export default MenuTable;
