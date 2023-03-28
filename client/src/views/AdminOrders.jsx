import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavBar from "../components/AdminComponents/AdminNavBar";
import OrdersTable from "../components/AdminComponents/OrdersTable";

const AdminOrders = ({ setCart }) => {
  const [allOrders, setAllOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [getAllTrigger, setGetAllTrigger] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [searched, setSearched] = useState(false)

  const pageLinks = () => {
    const links = []
    let i = 1
    while (i <= totalPages) {
      const pageNumber = i;
      links.push(
        pageNumber === page ?
          <div className="border-2 bg-slate-300 border-slate-400 shadow-xl w-7 h-7 flex justify-center items-center">
            <p className="text-xl underline text-slate-500 cursor-pointer" key={i} onClick={() => setPage(pageNumber)}>{i}</p>
          </div>
          :
          <div className="border-2 bg-slate-100 border-slate-400 shadow-xl w-7 h-7 flex justify-center items-center">
            <p className="text-xl text-blue-700 cursor-pointer" key={i} onClick={() => setPage(pageNumber)}>{i}</p>
          </div>
      )
      i++
    }
    return links
  }

  useEffect(() => {
    const fetchData = async () => {
      let response
      try {
        if (searched) {
          response = await axios.get(`http://localhost:8000/api/order/search/${searchTerm}/${page}`)
        }
        else {
          response = await axios.get(`http://localhost:8000/api/order/view/${page}`)
        }
        console.log(response.data);
        setAllOrders(response.data.orders);
        setPage(response.data.page);
        setTotalPages(response.data.totalPages)
        setLoaded(true);

      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [getAllTrigger, page, searched]);

  const clearCart = (e) => {
    e.preventDefault();
    setCart([]);
  };

  const onStatusUpdate = (e) => {
    const updatedOrderStatus = { status: e.target.value };
    const id = e.target.id;
    console.log(id);
    axios
      .put(`http://localhost:8000/api/order/${id}`, updatedOrderStatus)
      .then((res) => {
        console.log(res.data);
        getAllTrigger ? setGetAllTrigger(false) : setGetAllTrigger(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteOrder = (id) => {
    console.log("delete order ran");
    axios
      .delete(`http://localhost:8000/api/order/${id}`)
      .then((res) => {
        getAllTrigger ? setGetAllTrigger(false) : setGetAllTrigger(true);
      })
      .catch((err) => console.log(err));
  };

  const search = (e) => {
    e.preventDefault()
    setPage(1)
    setSearched(true);
  }

  return (
    <div>
      <AdminNavBar />
      <div className="bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen p-4">
        <OrdersTable
          search={search}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          clearCart={clearCart}
          loaded={loaded}
          allOrders={allOrders}
          onStatusUpdate={onStatusUpdate}
          deleteOrder={deleteOrder}
        />
        <div className="max-w-screen-xl mx-auto flex justify-end gap-1 w-full">
          {loaded ? pageLinks() : null}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
