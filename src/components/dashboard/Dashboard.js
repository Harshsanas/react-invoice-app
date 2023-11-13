import React, { useState } from 'react'

//importing styled components
import * as S from './dashboard.styles';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteInvoice } from '../../redux/reducer';

//react icons
import { FaPencilAlt, FaEnvelope, FaTrash } from 'react-icons/fa';

//utils
import { numberWithCommas } from '../../utils';

//import router dom
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataList = useSelector(state => state?.invoice);

    const [filterStatus, setFilterStatus] = useState('all');

    const filteredData = dataList.filter((item) => {
        if (filterStatus === 'all') {
            return true;
        } else {
            return item.status === (filterStatus === 'paid');
        }
    });
    const grandTotal = filteredData.reduce((acc, item) => {
        return acc + parseFloat(item.totalPrice.replace('Rs ', '').replace(',', ''));
    }, 0);

    const handleEdit = (id) => {
        navigate(`/edit-invoice/${id}`);
    };

    const handleMail = (item) => {
        const { titleName, totalPrice, dueDate } = item;
        const emailBody = `Invoice Details:\n\nTitle: ${titleName}\nTotal: ${totalPrice}\nDue Date: ${dueDate}`;
        const mailtoLink = `mailto:?subject=Invoice Details&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    };

    const handleDelete = (id) => {
        dispatch(deleteInvoice(id));
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
                <S.HeadingLabel>Invoices</S.HeadingLabel>
                <div className="row">
                    <Link to='/new-invoice' className="new-invoice-button">+ New Invoice</Link>
                    <div className="status-filter-container">
                        <label className="status-label">Status Filter</label><br />
                        <select
                            className="status-select"
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>
                <table className="custom-table">
                    <thead>
                        <tr>
                            <td>Due Date</td>
                            <td>Title</td>
                            <td>Total</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className={item.status ? 'paid' : 'unpaid'}>
                                <td>{item.dueDate}</td>
                                <td>{item.titleName}</td>
                                <td>{`Rs ${numberWithCommas(item.totalPrice)}`}</td>
                                <td>{item.status ? 'Paid' : 'Unpaid'}</td>
                                <td>
                                    <FaPencilAlt
                                        className="icon pencil"
                                        onClick={() => handleEdit(item.id)}
                                    />
                                    <FaEnvelope
                                        className="icon mail"
                                        onClick={() => handleMail(item)}
                                    />
                                    <FaTrash
                                        onClick={() => handleDelete(item.id)}
                                        className="icon delete"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="grand-total-container">
                    <label className="grand-total-label">Grand Total</label><br />
                    <label className="grand-total-amount">{`Rs ${numberWithCommas(grandTotal)}`}</label>
                </div>
            </S.MainContainer>
        </>
    )
}

export default Dashboard
