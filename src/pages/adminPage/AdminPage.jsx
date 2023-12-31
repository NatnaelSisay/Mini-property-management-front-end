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
import { Pagination } from "@mui/material";

const AdminPage = () => {
  const user = useSelector((state) => state.auth.value);

  const [users, setUsers] = useState();
  const [filteredUsers, setFilteredUsers] = useState();

  const [status, setStatus] = useState(null);
  const [role, setRole] = useState(null);

  const fetchUsers = (filterData, page) => {
    getUsers(filterData, page)
      .then((res) => {
        if (filterData) {
          setFilteredUsers(res.data);
        } else setUsers(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function nextPage(page) {
    if (filteredUsers) {
      return fetchUsers({ status, role }, page);
    }
    fetchUsers(null, page);
  }
  function handleFilter(e) {
    e.preventDefault();
    if (!status && !role) {
      return;
    }
    const filterData = { status, role };
    getUsers(filterData)
      .then((res) => {
        setFilteredUsers(res.data);
      })
      .catch((err) => {});
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

  const clearFilter = () => {
    setStatus(null);
    setRole(null);
    setFilteredUsers(null);
  };

  return (
    <div>
      <Nav user={user} />
      <div className="container flex-center">
        <form className="filter-fields center-vertical" onSubmit={handleFilter}>
          <div className="margin-1rem">
            <BasicSelectComponent
              name="Status"
              options={[
                { name: "All", value: null },
                { name: "Active", value: "ACTIVE" },
                { name: "Blocked", value: "BLOCKED" },
                { name: "Pending", value: "PENDING" },
              ]}
              value={status}
              setValue={setStatus}
            />
          </div>
          <div className="margin-1rem">
            <BasicSelectComponent
              name="Role"
              options={[
                { name: "All", value: null },
                { name: "Owner", value: "OWNER" },
                { name: "User", value: "USER" },
              ]}
              value={role}
              setValue={setRole}
            />
          </div>
          <Button type="submit">filter</Button>
          {filteredUsers && <Button onClick={clearFilter}>clear</Button>}
        </form>
      </div>

      <div className="container">
        <div>
          <h2>Users</h2>

          <UserInfo
            onApprove={onApprove}
            onBlock={onBlock}
            users={filteredUsers?.users ?? users?.users ?? []}
          />
        </div>
      </div>

      <div className="pagination-container">
        <Pagination
          count={filteredUsers?.page.totalPages ?? users?.page.totalPages}
          page={filteredUsers?.page.number ?? users?.page.number ?? 0}
          onChange={(e, page) => {
            nextPage(page);
          }}
          color="primary"
        />
      </div>
    </div>
  );
};

export default AdminPage;
