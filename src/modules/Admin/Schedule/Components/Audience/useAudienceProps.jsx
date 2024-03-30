export const useAudienceProps = () => {

       const data = [
              {
                     Id: 1,
                     Subject: "Sales Presentation",
                     StartTime: new Date(2024, 3, 25, 10, 0),
                     EndTime: new Date(2024, 3, 25, 12, 30),
                     IsAllDay: false,
              },
              {
                     Id: 2,
                     Subject: "Frontend Course",
                     StartTime: new Date(2024, 3, 24, 1, 0),
                     EndTime: new Date(2024, 3, 24, 3, 30),
                     IsAllDay: false,
              },
              {
                     Id: 3,
                     Subject: "Go Course",
                     StartTime: new Date(2024, 3, 21, 3, 0),
                     EndTime: new Date(2024, 3, 21, 4, 30),
                     IsAllDay: false,
              },
              {
                     Id: 4,
                     Subject: "New Budget Report",
                     StartTime: new Date(2024, 3, 24, 10, 0),
                     EndTime: new Date(2024, 3, 24, 12, 30),
                     IsAllDay: true,
                     Status: "Completed",
                     Priority: "High",
              },
       ]

       return {data}
}