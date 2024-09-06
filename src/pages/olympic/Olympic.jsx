import olympic from "../../assets/olympic.png";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import PageA from "../../components/Pagination";
import Menu from "../../components/Menu";

const Olympic = () => {
  const [olympicData, setOlympicData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(200);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:3000/api/v1/olympic" + "?page=" + currentPage);
      setOlympicData(response.data);
    }
    getData();
  }, [currentPage]);

  return (
    <>
      <style type="text/css">{`
      body {
        // background: rgb(14,14,14);
        // background: linear-gradient(180deg, rgba(14,14,14,0) 0%, rgba(255,255,255,0.21040134803921573) 100%);
        background-image: url("olympicbg.png");
        background-size: cover;
      }
      .table {
        & th {
          padding: 20px 0;
          background-color: #212529e1
        }
        & th:first-child {
          border-top-left-radius: 15px;
          padding-left: 20px
        }
        & td:first-child {
          padding-left: 20px
        }
        & th:last-child {
          border-top-right-radius: 15px;
        }
        & td {
          background-color: #212529e1
        }
    }
    `}</style>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-3">
            <Menu />
          </div>
          <div className="col-3 pt-3 text-center">
            <h1 style={{ fontWeight: "800", fontSize: "3rem", textShadow: "10px 5px 10px gray", paddingTop: "17px" }}>
              Olympic
            </h1>
          </div>
          <div className="col-3 pt-3 text-center">
            <img src={olympic} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <Table hover variant="dark">
              <thead>
                <tr>
                  <th>Discipline</th>
                  <th>Slug Game</th>
                  <th>Event</th>
                  <th>Gender</th>
                  <th>Medal</th>
                  <th>Athlete</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody style={{ borderRadios: "20px" }}>
                {olympicData.length > 0 ? (
                  olympicData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.discipline_title}</td>
                      <td>{item.slug_game}</td>
                      <td>{item.event_title}</td>
                      <td>{item.event_gender}</td>
                      <td>{item.medal_type}</td>
                      <td>{item.athlete_full_name}</td>
                      <td>{item.country_3_letter_code}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className="container text-center w-50 m-auto pt-3">
        <PageA className="w-50" currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default Olympic;
