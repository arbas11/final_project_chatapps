import { useEffect, useState } from "react";
import axios from "axios";

const SHOWHISTORYURL = "http://localhost:3001/api/history/showuserhistory";

export default function useHistoryQuery(
  userNumber,
  contactNumber,
  query,
  skip,
  sendMsg
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [history, setHistory] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const reqHistory = async (userNumber, contactNumber, query, skip) => {
    // const controller = new AbortController();
    // const CancelToken = axios.CancelToken;
    // const source = CancelToken.source();
    await axios
      .post(SHOWHISTORYURL, {
        userNumber: userNumber,
        contactNumber: contactNumber,
        q: query,
        page: skip,
      })
      .then((res) => {
        console.log("res dalam use history", res.data);
        setHistory((prevHistory) => {
          return [...new Set([...prevHistory, ...res.data.map((h) => h)])];
        });
        console.log("history dalam use history", history);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          console.log("error dari axios", e);
          return e;
        }
        setError(true);
      });
    return;
  };

  useEffect(() => {
    setHistory([]);
  }, [contactNumber]);

  useEffect(() => {
    if (contactNumber) {
      setLoading(true);
      setError(false);
      reqHistory(userNumber, contactNumber, query, skip, sendMsg);
    }
  }, [skip, query, contactNumber, sendMsg, userNumber]);

  return { loading, error, history, hasMore };
}
