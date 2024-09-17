import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
   
      const mathMarksData =  [
        {
          "id": 1,
          "student": "Alice",
          "math": 85,
          "english": 77,
          "physics": 68

        },
        {
          "id": 2,
          "student": "Bob",
          "math": 78,
          "english": 58,
          "physics":48
        },
        {
          "id": 3,
          "student": "Charlie",
          "math": 92,
          "english": 30,
          "physics": 42
        },
        {
          "id": 4,
          "student": "David",
          "math": 82,
          "english": 42,
          "physics": 99
        },
        {
          "id": 5,
          "student": "Eve",
          "math": 91,
          "english": 81,
          "physics": 81
        },
        {
          "id": 6,
          "student": "Frank",
          "math": 74,
          "english": 81,
          "physics": 81
        },
        {
          "id": 7,
          "student": "Grace",
          "math": 88,
          "english": 55,
          "physics": 45
        },
        {
          "id": 8,
          "student": "Hannah",
          "math": 79,
          "english": 70,
          "physics": 68
        },
        {
          "id": 9,
          "student": "Ian",
          "math": 84,
          "english": 60,
          "physics": 50
        },
        {
          "id": 10,
          "student": "Judy",
          "math": 90,
          "english": 42,
          "physics": 40
        }
      ];
      
    return (
        <div>
           <LChart width={800} height={400} data={mathMarksData}>
           <XAxis dataKey="student" />
          <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey="english" stroke='green'></Line>
            <Line dataKey="physics" stroke='yellow'></Line>
           </LChart>
        </div>
    );
};

export default LineChart;


          