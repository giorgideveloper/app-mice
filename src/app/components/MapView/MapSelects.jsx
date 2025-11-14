export default function MapSelects({
  id,
  location,
  setLocationValue,
  dict,
  category,
  setCategoryValue,
}) {
  const handleLocationChange = (e) => {
    setLocationValue(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };

  return (
    <div className="d-flex gap-3">
      <select className="form-select" onChange={handleLocationChange}>
        <option value="">{dict?.venue?.map?.selectLocation}</option>
        {location?.map((loc) => (
          <option key={loc.id} value={loc.name}>
            {loc.name}
          </option>
        ))}
      </select>
      {id === "conference" ? (
        ""
      ) : (
        <select className="form-select " onChange={handleCategoryChange}>
          <option value="">{dict?.venue?.map?.selectVenue}</option>
          {category?.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
