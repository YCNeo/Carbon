# FUNCTION LIST

<!-- discussion between frontend and backend -->
 | Function name      | Description                                      | Remark |
 | ------------------ | ------------------------------------------------ | ------ |
 | Login              | Unit login                                       | x      |
 | Admin              | highest access manage                            | x      |
 | Project Management | -----------                                      | x      |
 | PPE                | Detail of Equipment and Material                 | x      |
 | Statement          | global scope information of enterprise           | x      |
 | ESG                | (admin access)Boundary, source, stats, statement | ------ |


 # SubFunction
 ## Admin
 | Function name     | Description                     | Remark |
 | ----------------- | ------------------------------- | ------ |
 | Create User       | page for differnt user(not now) | x      |
 | Access Assignment | ---------------------           | x      |
 | Create Project    | ---------------------           | x      |
 | Approve           | ---------------------           | x      |
 | Employee          | ---------------------           | x      |
 | history log       | ------------------------------- | ------ |


 ## Project Management

 | Function name | Description                                | Remark |
 | ------------- | ------------------------------------------ | ------ |
 | Member        | ---------------------                      | x      |
 | Flow          | `SF-Revise`, `SF-Design`                   | x      |
 | Material      | ---------------------                      | x      |
 | Equipment     | --------------------------------------     | x      |
 | Daily Record  | page: `SF-Revise record`, `SF-Post record` | x      |
 | Statement     | local scope information of project         | x      |


 ## PPE
 <!-- Equipment -->

 | Function name | Description                                     | Remark |
 | ------------- | ----------------------------------------------- | ------ |
 | Equipment     | `SF-New equipment`, `SF-Disposal`, `SF-Retrive` | x      |
 | Material      | `SF-New Material`, `SF-Disposal`, `SF-Retrive`  | x      |


 ## Statement

 | Function name | Description           | Remark |
 | ------------- | --------------------- | ------ |
 | Retrive       | --------------------- | x      |
 | Export        | --------------------- | x      |


 ## ESG
 > 層層遞進的側邊攔

 | Function name    | Description                                        | Remark |
 | ---------------- | -------------------------------------------------- | ------ |
 | Boundary Edition | factory address                                    | ------ |
 | Source           | Unit: boundary, edition of equipments or materials | ------ |
 | Statement        | calculation and generation of statement            | ------ |
 | audit            | internal & outside(generate doc)                   | ------ |
