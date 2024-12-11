import {
  TableWapper,
  TableRow,
  TableCell,
  TableButton
} from '../style';

export const table = (list, setpage, revsiedata, deletedata) => {
  if (!list || list.length === 0) {
    return <div>Please Wait</div>;
  }
  const headers = Object.keys(list[0]);
  return (
    <TableWapper>
      <TableRow>
        {headers.map((header) => (<TableCell className='header' key={header}>{header}</TableCell>))}
        {(localStorage.getItem("pm_rank") === "pm") ?
          (revsiedata === null && deletedata === null) ?
            null
            :
            <TableCell
              className={(deletedata != null && revsiedata != null) ? 'header' : 'onebutton'} />
          :
          null}
      </TableRow>

      {list.map((data, rowIndex) => (
        <TableRow key={data.eid || rowIndex}>
          {headers.map((header) => (
            <TableCell className={(rowIndex % 2 === 0) ? 'lightcell' : 'darkcell'} key={`${data.eid}-${header}`}>{data[header]}</TableCell>
          ))}
          {
            (localStorage.getItem("pm_rank") === "pm") ?
              <>
                {revsiedata ? <TableButton onClick={() => { setpage(2); revsiedata(data); }}>修改</TableButton> : null}
                {deletedata ? <TableButton onClick={() => { revsiedata ? setpage(3) : setpage(2); deletedata(data); }} className="delete">刪除</TableButton> : null}
              </>
              :
              null
          }
        </TableRow>
      ))}
    </TableWapper>
  );
};