import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context/MyContext";
import { Layout } from "../../Components/Layout";

export const MyAccount = () => {
  const { user } = useContext(ShoppingCartContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Aquí puedes agregar la lógica para guardar los cambios
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto my-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gray-200 p-4">
            <h2 className="text-xl font-bold">Mi Cuenta</h2>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h3 className="text-lg font-bold">{user?.displayName || ""}</h3>
                <p className="text-gray-600">{user?.email || ""}</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <span className="font-bold">Número de identidad:</span>
                <span>
                  {isEditing ? (
                    <input type="text" defaultValue="123456789" />
                  ) : (
                    " 123456789"
                  )}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Edad:</span>
                <span>
                  {isEditing ? (
                    <input type="number" defaultValue="25" />
                  ) : (
                    " 25"
                  )}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-bold">Género:</span>
                <span>
                  {isEditing ? (
                    <input type="text" defaultValue="Masculino" />
                  ) : (
                    " Masculino"
                  )}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-bold">Descripción:</span>
                <p>
                  {isEditing ? (
                    <textarea defaultValue="Una breve descripción sobre mí." />
                  ) : (
                    "Una breve descripción sobre mí."
                  )}
                </p>
              </div>
              {isEditing ? (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleSaveClick}
                >
                  Guardar Cambios
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleEditClick}
                >
                  Editar Información
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
