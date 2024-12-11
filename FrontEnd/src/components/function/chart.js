import { XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Rectangle } from 'recharts';
import { PieChart, Pie } from 'recharts';

const namefix = (type) => {
  switch (type) {
    case 1:
      return "runtime";
    case 2:
      return "amount";
    case 3:
      return "Pname";
    case 4:
      return "PN_name";
    default:
      return null;
  }
}

export const linechart = (projectdata, x, y) => {
  const xaxis = namefix(x.value);
  const yaxis = namefix(y.value);
  return (
    <LineChart width={600} height={300} data={projectdata} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey={`${yaxis}`} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey={`${xaxis}`} />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}

export const barchart = (projectdata, x, y) => {
  const xaxis = namefix(x.value);
  const yaxis = namefix(y.value);
  return (
    <BarChart width={500} height={300} data={projectdata} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={`${xaxis}`} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={`${yaxis}`} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>
  );
}

export const piechart = (projectdata, x) => {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="amount" isAnimationActive={false} data={projectdata} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
      <Tooltip />
    </PieChart>
  );
}