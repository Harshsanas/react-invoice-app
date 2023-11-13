import styled from 'styled-components';

export const MainContainer = styled.div`
margin-left: 100px;
margin-right: 100px;  
display: flex;
flex-direction: column;

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.custom-table thead {
  border: 1px solid #dddddd;
  font-weight:600;
  padding: 6px;
  text-align: left;
}

.custom-table td {
  border: 1px solid #dddddd;
  padding: 6px;
  text-align: left;
}

.custom-table tr.unpaid {
  cursor:pointer;
  background-color: #FFD3D3; 
}

.custom-table tr.paid {
  background-color: #F5F5F5; 
  cursor:pointer
}

.icon{
  margin-left:10px;
  padding:4px;
  border-radius:4px;
  color:white;
}

.pencil{
  background:#337AB7;
  border:1px solid #337AB7;
}

.mail{
  background:#5BC0DE;
  border:1px solid #5BC0DE;
}

.delete{
  background:#D9534F;
  border:1px solid #D9534F;
}

.new-invoice-button {
  background-color: #5CB85C;
  color: white; 
  padding: 10px 20px;
  text-decoration:none;
  font-size:16px;
  font-weight:500;
  border: none; 
  border-radius: 4px;
  cursor: pointer; 
}

.new-invoice-button:hover {
  background-color: #45a049;
}

.status-filter-container {
  margin-right: 20px; 
}

.status-label {
  font-size: 16px;
  font-weight:500;
}

.status-select {
  padding: 8px;
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

.status-select:hover {
  border-color: #666; 
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