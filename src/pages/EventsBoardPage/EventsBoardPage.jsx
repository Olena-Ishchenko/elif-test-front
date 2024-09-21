import EventList from "../../components/EventList/EventList";
import axios from "axios";
import { useEffect, useState } from "react";
import css from "./EventsBoardPage.module.css";
import ReactPaginate from "react-paginate";

export default function EventsBoardPage() {
  axios.defaults.baseURL = "https://elif-test-back.onrender.com";
  const [events, setevents] = useState([]);
  const [pageNow, setPageNow] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get("/events?page=" + pageNow);
      setevents(data.data.data);
      setTotalPage(data.data.totalPages);
    };

    getEvents();
  }, [pageNow]);

  const handlePageClick = (event) => {
    setPageNow(event.selected + 1);
  };

  return (
    <div className={css.eventsBoard}>
      <h2 className={css.eventsTitle}>Events</h2>
      {events && <EventList data={events} />}
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPage}
        previousLabel="< "
        containerClassName={css.pagination}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
