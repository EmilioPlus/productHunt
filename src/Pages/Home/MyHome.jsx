import { useContext, useState } from "react";
import { Layout } from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail/MyProductDetail";
import { ShoppingCartContext } from "../../Context/MyContext";
import Card from "../../Components/Card/MyCard";

export const Home = () => {
  const context = useContext(ShoppingCartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = context.filteredItems?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderView = () => {
    if (currentItems?.length > 0) {
      return (
        <>
          {currentItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
          {/* Controles de paginación */}
          <div className="col-span-4 flex justify-center items-center mt-4 space-x-4">
            {/* Botón para ir a la página anterior */}
            <button
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className="px-2 py-1 bg-gray-200 rounded-md text-sm"
            >
              Anterior
            </button>
            <div className="flex items-center space-x-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-2 py-1 text-sm rounded-md ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            {/* Botón para ir a la página siguiente */}
            <button
              disabled={indexOfLastItem >= context.filteredItems?.length}
              onClick={() => paginate(currentPage + 1)}
              className="px-2 py-1 bg-gray-200 rounded-md text-sm"
            >
              Siguiente
            </button>
          </div>
        </>
      );
    } else {
      return <div>We don't have anything :</div>;
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(context.filteredItems?.length / itemsPerPage);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};
