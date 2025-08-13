import React from 'react'

export default function InnerTable() {
    
  return (
    <>
       <table className={styles.meetingSpacesTable}>
              <thead>
                <tr>
                  <th>Room</th>
                  {uniqueSeatingNames.map((name) => (
                    <th key={name}>{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.values(grouped).map((group) => (
                  <tr key={group.meeting_space_name}>
                    <td>{group.meeting_space_name}</td>
                    {uniqueSeatingNames.map((name) => {
                      const match = group.items.find((i) => i.seating_name === name);
                      return <td key={name}>{match ? match.capacity : '-'}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
    </>
  )
}
