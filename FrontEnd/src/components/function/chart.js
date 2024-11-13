import { XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Rectangle } from 'recharts';
import { PieChart, Pie } from 'recharts';

const data = [
  { name: 'A', emmision: 400, project: 1, time: 100 },
  { name: 'B', emmision: 300, project: 2, time: 150 },
  { name: 'C', emmision: 40, project: 3, time: 200 },
  { name: 'D', emmision: 600, project: 4, time: 250 },
  { name: 'E', emmision: 200, project: 5, time: 300 },
  { name: 'F', emmision: 100, project: 6, time: 350 },
  { name: 'G', emmision: 100, project: 7, time: 400 },
  { name: 'H', emmision: 400, project: 8, time: 450 },
  { name: 'I', emmision: 50, project: 9, time: 500 },
];

const namefix = (type) => {
  switch (type) {
    case 1:
      return "time";
    case 2:
      return "emmision";
    case 3:
      return "project";
    case 4:
      return "factory";
    case 5:
      return "none";
    default:
      return null;
  }
}

export const linechart = (x, y) => {
  const xaxis = namefix(x.value);
  const yaxis = namefix(y.value);
  return (
    <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey={`${yaxis}`} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey={`${xaxis}`} />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}

export const barchart = (x, y) => {
  const xaxis = namefix(x.value);
  const yaxis = namefix(y.value);
  return (
    <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={`${xaxis}`} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={`${yaxis}`} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>
  );
}

export const piechart = (x) => {
  const xaxis = namefix(x.value);
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey={`${xaxis}`} isAnimationActive={false} data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
      <Tooltip />
    </PieChart>
  );
}