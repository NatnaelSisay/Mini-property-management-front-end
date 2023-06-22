import { useState, useRef, useEffect } from "react";
import PropType from "prop-types";

import Nav from "../../components/Nav";
import UserInfo from "../../components/UserInfo";
import BasicSelectComponent from "../../components/BasicSelectComponent";

import Button from "@mui/material/Button";

import "./AdminPage.css";
import { getUsers } from "../../apis/userApis";
import { useSelector } from "react-redux";
import { changeOwnerStatus } from "../../apis/adminAPis";

const AdminPage = () => {
  const user = useSelector((state) => state.auth.value);

  const [users, setUsers] = useState();

  const [state, setState] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {});
  }, []);

  function handleFilter(e) {
    e.preventDefault();
    console.log("status, role => ", state, role);
  }

  const onApprove = (id) => {
    changeOwnerStatus(id, "approve")
      .then((res) => {
        const newUsers = users.users.map((user) => {
          if (user.id === res.data.id) {
            return res.data;
          }
          return user;
        });
        setUsers({ ...users, users: newUsers });
      })
      .catch((err) => {});
  };
  const onBlock = (id) => {
    changeOwnerStatus(id, "block")
      .then((res) => {
        const newUsers = users.users.map((user) => {
          if (user.id === res.data.id) {
            return res.data;
          }
          return user;
        });
        setUsers({ ...users, users: newUsers });
      })
      .catch((err) => {});
  };

  return (
    <div>
      <Nav user={user} />
      <div className="container flex-center">
        <form className="filter-fields center-vertical" onSubmit={handleFilter}>
          <div className="margin-1rem">
            <BasicSelectComponent
              name="Status"
              options={["All", "ACTIVE", "BLOCKED"]}
              value={state}
              setValue={setState}
            />
          </div>
          <div className="margin-1rem">
            <BasicSelectComponent
              name="Role"
              options={["All", "OWNER", "USER"]}
              value={role}
              setValue={setRole}
            />
          </div>
          <Button type="submit">filter</Button>
        </form>
      </div>

      <div className="container">
        <div>
          <h2>Users</h2>
          <UserInfo
            onApprove={onApprove}
            onBlock={onBlock}
            users={users?.users ?? []}
          />
        </div>
      </div>
    </div>
  );
};

const mock_user = {
  role: "ADMIN",
};

const mockOwners = [{ name: "java", email: "test@gmail.com", role: "OWNER" }];
const mockCustomers = [
  { name: "java", email: "test@gmail.com", role: "CUSTOMER" },
];
export default AdminPage;
