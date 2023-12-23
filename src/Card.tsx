import { useNavigate } from "react-router-dom";
import { IKomputer } from "./hooks/useKomputers";

type CardProps = {
  komputer: IKomputer;
};

const Card = ({ komputer }: CardProps) => {
  const navigate = useNavigate();

  return (
    <div
      key={komputer.id}
      className="bg-white shadow-md rounded-md p-4 cursor-pointer"
      onClick={() => navigate(`/detail/${komputer.id}`)}
    >
      <div className="flex gap-4">
        <img
          src={komputer.image_url}
          alt={komputer.name}
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/150x150?text=No+Image";
          }}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div>
          <h1 className="text-lg font-semibold">{komputer.name}</h1>
          <p className="text-sm text-gray-600">
            Rp {komputer.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">{komputer.stock} pcs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
