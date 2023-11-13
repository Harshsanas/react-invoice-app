import styled from 'styled-components';

export const MainContainer = styled.div`
margin-left: 100px;
margin-right: 100px;    

hr{
  border:1px solid lightgrey
}
.form-row {
  display: flex;
  margin-top:20px;
  // justify-content: space-between;
}

.form-group {
  width: 55%;
  margin-right:15px;
}

.form-group-label{
  width: 20%;
  margin-right:15px;
}

label {
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}

.grand-total-container {
  margin-top: 20px;
}

.grand-total-label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.grand-total-amount {
  font-size: 18px;
}

.form-table {
  margin-top: 20px;

  div {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden; 
  background-color: #f5f5f5; 
}
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

thead {
  background-color: #f2f2f2;
  
}

th, td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

th:first-child, td:first-child {
  width: 60%;
}

th:nth-child(2), td:nth-child(2),
th:nth-child(3), td:nth-child(3) {
  width: 20%;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-container {
  margin-top: 10px;
}

.add-button {
  background-color: #4caf50;
  color: white;
  width:99%;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #45a049;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.cancel-button,
.save-button {
  padding: 10px;
  font-size: 16px;
  text-decoration:none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button {
  color: #ff6961; 
  background-color: #fff;
  border: 1px solid #ff6961;
}

.save-button {
  background-color: #45a049;
  color: #fff;
  border: none;
}

.cancel-button:hover {
  background-color: #ff6961; 
  color: #fff;
}

.delete-button{ 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0 auto; 
  border: none;
  background: #D9534F;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

.delete-button:hover {
  background: #c9302c;
}

`

export const Header = styled.div`
height:50px;
font-weight:600;
color:#9D9D7D;
background:#222222;
display: flex;
justify-content: space-around;
align-items: center; 

label{
  cursor:pointer
}

label:hover{
  color:white
}

a{
  color:#9D9D7D;
  text-decoration:none
}
`

export const HeadingLabel = styled.div`
font-size:36px;
margin-top:10px;
color:#333333
`