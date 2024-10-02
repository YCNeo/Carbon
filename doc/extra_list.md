
# Project Management
#### Flow
| API purpoes | Input(type)                                                                           | Ouput(type)   | Tri | Remark |
| ----------- | ------------------------------------------------------------------------------------- | ------------- | --- | -------|
| Revise      | x                                                                                     | step(list)    | B   |get step|

# Statement
| API purpoes | Input(type)                                                                                          | Ouput(type)     | Tri | Remark |
| ----------- | ---------------------------------------------------------------------------------------------------- | --------------- | --- | ------ |
| retrieve    | `PID(multiSelect, type: number)`, `startDate(date)`, `endDate(date)`, `charType`, `x-axis`, `y-axis` | embedding table | B   | x      |

# other
| API purpoes    | Input(type) | Ouput(type)                         | Tri | Remark |
| -------------- | ----------- | ----------------------------------- | --- | -------|
| user info      |             | `EID`, `Ename`, `authority`, `PM_rank` | B   |x       |
| project list   |             | project(list)                       | B   |x       |
| material list  |             | material(list)                      | B   |x       |
| equipment list |             | equipment(list)                     | B   |x       |
| approve list   |             | approve(list)                       | B   |x       |


approve_list[
    {
      "PID": "1",
      "PMID": "project1",
      "time": "1",
      "oldContent": "1",
      "newContent": "11"
    }
  ]