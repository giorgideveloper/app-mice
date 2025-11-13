import { IoSearch } from "react-icons/io5";
export default function MapSearch({ dict, venues }) {
  return (
    <div className="search d-flex justify-content-between mb-3">
      <input
        type="text"
        className="form-control w-75"
        style={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "1px solid #ced4da",
        }}
        placeholder={dict?.venue?.map?.search}
      />
      <button
        className="btn btn-primary"
        style={{
          width: "22%",
          backgroundColor: "#062649ff",
          border: "none",
          color: "white !important",
        }}
      >
        {dict?.venue?.map?.search} <IoSearch />
      </button>
    </div>
  );
}
