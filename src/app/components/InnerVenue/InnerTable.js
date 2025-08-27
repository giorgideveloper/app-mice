import React from 'react'
import styles from './InnerVenues.module.css';

export default function InnerTable({data, id}) {
 

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
			Object.values(grouped).flatMap(group =>
				group.items.map(item => item.seating_name)
			)
		),
	];
    
  return (
    <>
       <table className={styles.meetingSpacesTable}>
              <thead>
                <tr>
                  {(id === 'sport' ) && (
                    <>
                      <th> Meeting Space</th>
                      <th>M²</th>
                      <th>Capacity</th>
                      <th>Sportsmen Capacity</th>

                   </>
                   )}
                   {(id === 'cultural') && (
                   <>
                     <th> Meeting Space</th>
                      <th>M²</th>
                      <th>Capacity</th>
                   </>
                   )}
                  {id === 'conference' && (
                 <>
                      <th>Room</th>
                      {uniqueSeatingNames.map((name) => (
                        <th key={name}>{name}</th>
                      ))}
                  </>
                   )}
                   
                </tr>
              </thead>
              <tbody>
                {id !== 'conference' && (
                  <>
                    {data?.meeting_space?.map((space, index) => (
                      <tr key={index}>
                        <td>{space?.meeting_space_name}</td>
                        <td>{space?.square_meters}</td>
                        <td>{space?.Attendees_capacity}</td>
                        <td>{space?.Sportsmen_capacity }</td>
                      </tr>
                    ))}
                  </>
                )}

                {id === 'conference' && (
                  <>
                    {Object.values(grouped).map((group) => (
                      <tr key={group.meeting_space_name}>
                        <td>{group.meeting_space_name}</td>
                        {uniqueSeatingNames.map((name) => {
                          const match = group.items.find((i) => i.seating_name === name);
                          return <td key={name}>{match ? match.capacity : '-'}</td>;
                        })}
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
    </>
  )
}
