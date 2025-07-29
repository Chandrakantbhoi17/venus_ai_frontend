import React, { useEffect, useState } from "react";
import { Table, Pagination, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const truncateText = (text, maxLength = 50) =>
  text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

const QueryList = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const queriesPerPage = 5;

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch("http://localhost:8000/query/");
        if (!response.ok) throw new Error("Failed to fetch queries");
        const data = await response.json();
        setQueries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  const indexOfLastQuery = currentPage * queriesPerPage;
  const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
  const currentQueries = queries.slice(indexOfFirstQuery, indexOfLastQuery);
  const totalPages = Math.ceil(queries.length / queriesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="text-muted">Loading queries...</div>;
  if (error) return <div className="text-danger">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Queries</h3>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-0">
          <Table responsive bordered hover className="mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Massages</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {currentQueries.map((query) => (
                <tr key={query.id}>
                  <td>{query.id}</td>
                  <td>{query.name}</td>
                  <td>{query.email}</td>
                  <td>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>{query.user_input}</Tooltip>}
                    >
                      <span>{truncateText(query.user_input, 40)}</span>
                    </OverlayTrigger>
                  </td>
                  <td>
                        {query.file_url ? (
                            <Button
                            variant="success"
                            size="sm"
                            onClick={() => window.open(query.file_url, "_blank")}
                            >
                            Download
                            </Button>
                        ) : (
                            <span className="text-muted">No File</span>
                        )}
                        </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-3 justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </div>
  );
};

export default QueryList;
