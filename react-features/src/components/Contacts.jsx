import React, { useEffect, useState } from "react";

const Contacts = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const itemsPerPage = 10;
  // const totalPages = Math.ceil(userData.length / itemsPerPage);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = `https://dummyjson.com/users?limit=99`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status : ${response.status}`);
      const result = await response.json();
      setUserData(result.users);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

   const filteredData = userData.filter((user) =>
    user.firstName.toLowerCase().includes(searchText.toLowerCase())
  );
   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const start = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(start, start + itemsPerPage);

  return (
    <>
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      {paginatedData.map((data) => (
        <div key={data.id}>{data.firstName}</div>
      ))} 

      <div className="flex gap-3">
        <button disabled={currentPage === 1} className={`cursor-pointer${currentPage === 1? ' disabled': ''}`} onClick={() => changePage(currentPage - 1)}>
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "cursor-pointer font-bold" : "cursor-pointer"}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button className={`cursor-pointer${currentPage === Math.ceil(userData.length / 10)? ' disabled': ''}`} disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default Contacts;
