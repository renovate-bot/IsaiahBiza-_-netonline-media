import React from "react";

function SidebarSearch() {
  return (
    <>
      <div className="sidebar-search">
        <form onSubmit={(e) => e.preventDefault()} action="#" method="post">
          <input type="text" name="search" placeholder="Search Here" />
          <button type="submit">
            <i className="bi bi-search" />
          </button>
        </form>
      </div>
    </>
  );
}

export default SidebarSearch;
