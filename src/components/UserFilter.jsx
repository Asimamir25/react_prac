import React, { useEffect, useRef, useState } from "react";

const UserFilter = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const [filtered, setFilteredSearch] = useState([]);
  const debounceRef = useRef();
  useEffect(() => {
    const FetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setFilteredSearch(result);
      setUser(result);
    };
    FetchUser();
  }, []);
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      if (search.trim() == "") {
        setFilteredSearch(user);
      } else {
        const res = user.filter((item, index) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredSearch(res);
      }
    }, 800);
  }, [search, user]);
  //  const handleSearch=()=>{
  //     console.log(search)
  //     const res=user.filter((item,index)=>item.name.toLowerCase().includes(search.toLowerCase()))
  // setFilteredSearch(res)
  //  }
  const handleClear = () => {
    setSearch("");
    setFilteredSearch(user);
  };
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {/* <button onClick={handleSearch}>Search</button> */}
      <button onClick={handleClear}>Clear</button>

      {filtered.map((item, index) => {
        return (
          <div>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default UserFilter;
