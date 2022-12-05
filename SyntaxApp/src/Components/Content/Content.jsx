import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

function Content() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div>
        {admin && user ? (
          <div className="row justify-content-center">
            <h2 className="text-center my-3">Hello,This is admin content</h2>
            <img
              src="https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80"
              alt=""
              className="img-fluid w-50"
            />
          </div>
        ) : (
          <div className="row justify-content-center">
            <h2 className="text-center my-3">Hello,This is Client content</h2>
            <img
              src="https://images.unsplash.com/photo-1549849171-09f62448709e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="img-fluid w-50"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
