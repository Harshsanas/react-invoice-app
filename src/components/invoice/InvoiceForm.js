import React, { useEffect, useState } from 'react'

//importing styled components
import * as S from './invoiceForm.styles';

//react icons
import { FaTrash } from 'react-icons/fa';

//import router dom
import { Link, useNavigate, useParams } from 'react-router-dom';

//universal id
import { v4 as uuidv4 } from 'uuid';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addInvoice, updateInvoice } from '../../redux/reducer';

const InvoiceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const dataList = useSelector((state) => state?.invoice);

  const [rows, setRows] = useState([{ id: uuidv4(), description: '', price: 0 }]);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('paid');

  const totalSum = rows.reduce((sum, row) => sum + parseFloat(row.price || 0), 0);

  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newRow = { id: uuidv4(), description: '', price: 0 };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleDeleteRow = (id) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter((row) => row.id !== id);
      setRows(updatedRows);
    }
  };


  useEffect(() => {
    if (id) {
      const existingInvoice = dataList.find((invoice) => invoice.id === id);
      if (existingInvoice) {
        setTitle(existingInvoice.titleName);
        setDueDate(existingInvoice.dueDate);
        setStatus(existingInvoice.status ? 'paid' : 'unpaid');
        setRows(
          existingInvoice.listItem.map((item) => ({
            id: item.descriptionId,
            description: item.description,
            price: item.itemPrice,
          }))
        );
      } else {
        navigate('/'); 
      }
    }
  }, [id, dataList, navigate]);

  const handleSave = (res) => {
    const title = document.querySelector('input[name="title"]').value;
    const dueDate = document.querySelector('input[name="dueDate"]').value;
    const status = document.querySelector('select').value;

    const lineItems = rows.map((row) => ({
      descriptionId: row.id,
      itemPrice: row.price,
      description: row.description, 
    }));

    const totalPrice = lineItems.reduce((total, item) => total + parseFloat(item.itemPrice), 0).toString();

    if (id) {
      const updatedInvoiceData = {
        id,
        dueDate,
        titleName: title,
        listItem: lineItems,
        totalPrice: totalPrice,
        status: status === 'paid',
      };
      dispatch(updateInvoice(updatedInvoiceData));
    } else {
      const newInvoiceData = {
        id: uuidv4(),
        dueDate,
        titleName: title,
        listItem: lineItems,
        totalPrice: totalPrice,
        status: status === 'paid',
      };

      dispatch(addInvoice(newInvoiceData));
    }
  };

  return (
    <>
      <S.Header>
        <Link to='/'>React Invoice</Link>
        <a href='https://github.com/Harshsanas/react-invoice-app' target="_blank" rel="noreferrer">
          <label>Github Source</label>
        </a>
      </S.Header>
      <S.MainContainer>
        <S.HeadingLabel>{id ? "Edit Invoice" : "New Invoice"}</S.HeadingLabel>
        <hr />
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Title</label>
              <br />
              <input
                placeholder="Enter Title"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group-label">
              <label>Due Date</label>
              <br />
              <input
                type="date"
                name="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="form-group-label">
              <label>Status</label>
              <br />
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
          </div>
          <div className='form-table'>
            <label>Invoice Line Items</label>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id}>
                      <td>
                        <input
                          type="text"
                          value={row.description}
                          onChange={(e) => handleInputChange(row.id, 'description', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          min={0}
                          type="number"
                          value={row.price}
                          onChange={(e) => handleInputChange(row.id, 'price', e.target.value)}
                        />
                      </td>
                      <td>
                        {index === rows.length - 1 ? (
                          <button onClick={handleAddRow} type="button" className="add-button">
                            + Add
                          </button>
                        ) : (
                          <button onClick={() => handleDeleteRow(row.id)} type="button" className="delete-button">
                            <FaTrash />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </form>
        <div className="grand-total-container">
          <label className="grand-total-label">Total</label><br />
          <label className="grand-total-amount">Rs {totalSum}</label>
        </div>

        <div className="button-container">
          <Link to='/' className="cancel-button">Cancel</Link>
          <Link to='/' className="save-button" onClick={handleSave}>Save</Link>
        </div>
      </S.MainContainer>
    </>
  )
}

export default InvoiceForm
