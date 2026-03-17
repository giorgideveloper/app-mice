import React from "react";
import styles from "./InnerVenues.module.css";

export default function InnerTable({ data, id, dict }) {
  const groupByMeetingSpace = (data = []) => {
    return data.reduce((acc, item) => {
      const id = item.meeting_space?.id;
      if (!acc[id]) {
        acc[id] = {
          meeting_space_name: item?.meeting_space?.meeting_space_name,
          items: [],
        };
      }
      acc[id].items.push(item);
      return acc;
    }, {});
  };

  const grouped = groupByMeetingSpace(data?.seating_types || []);

  const uniqueSeatingNames = [
    ...new Set(
      Object.values(grouped).flatMap((group) =>
        group.items.map((item) => item.seating_name),
      ),
    ),
  ].sort((a, b) => {
    if (a === "School") return -1;
    if (b === "School") return 1;
    if (a === "Square") return -2;
    if (b === "Square") return 2;
    if (a === "U-Shape") return -3;
    if (b === "U-Shape") return 3;
    if (a === "Theatre") return -4;
    if (b === "Theatre") return 4;
    if (a === "Banquet") return -5;
    if (b === "Banquet") return 5;

    return a.localeCompare(b);
  });

  const tableHeader = (name) => {
    if (name === "School") return dict.venue.tableVenue.school;
    if (name === "Square") return dict.venue.tableVenue.square;
    if (name === "U-Shape") return dict.venue.tableVenue.uShape;
    if (name === "Theatre") return dict.venue.tableVenue.theatre;
    if (name === "Banquet") return dict.venue.tableVenue.banquet;
    if (name === "Cocktail") return dict.venue.tableVenue.cocktail;

    return name;
  };

  return (
    <>
      <table className={styles.meetingSpacesTable}>
        <thead>
          <tr>
            {id === "sport" && (
              <>
                <th>{dict.venue.innerVenue.meetingSpace}</th>
                <th>{dict.venue.tableVenue.m2}</th>
                <th>{dict.venue.tableVenue.sportsmensCapacity}</th>
                <th>{dict.venue.tableVenue.attendeesCapacity}</th>
              </>
            )}
            {id === "cultural" && (
              <>
                <th> {dict.venue.innerVenue.meetingSpace}</th>
                <th>{dict.venue.tableVenue.m2}</th>
                <th>{dict.venue.tableVenue.capacity}</th>
              </>
            )}
            {id === "conference" && (
              <>
                <th>{dict.venue.tableVenue.rooms}</th>
                {uniqueSeatingNames.map((name) => (
                  <th key={name}>{tableHeader(name)}</th>
                ))}
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {id === "sport" && (
            <>
              {data?.meeting_space?.map((space, index) => (
                <tr key={index}>
                  <td>{space?.meeting_space_name || "-"}</td>
                  <td>{space?.square_meters || "-"}</td>
                  <td>{space?.sportsmen_capacity || "-"}</td>
                  <td>{space?.Attendees_capacity || "-"}</td>
                </tr>
              ))}
            </>
          )}
          {id === "cultural" && (
            <>
              {data?.meeting_space?.map((space, index) => (
                <tr key={index}>
                  <td>{space?.meeting_space_name || "-"}</td>
                  <td>{space?.square_meters || "-"}</td>
                  <td>{space?.Attendees_capacity || "-"}</td>
                </tr>
              ))}
            </>
          )}

          {id === "conference" && (
            <>
              {Object.values(grouped).map((group, index) => (
                <tr key={index}>
                  <td>{group.meeting_space_name}</td>
                  {uniqueSeatingNames.map((name) => {
                    const match = group.items.find(
                      (i) => i.seating_name === name,
                    );

                    return (
                      <td key={name}>{match ? match.capacity || "-" : "-"}</td>
                    );
                  })}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}
