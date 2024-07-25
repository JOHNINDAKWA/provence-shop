import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BreadCrumb.css';
import { TiArrowBackOutline } from "react-icons/ti";

const Breadcrumb = ({ items }) => {
  const navigate = useNavigate();

  return (
    <nav className="breadcrumb">
{/* =================Show back button only on item details page only===========*/}
      {window.location.pathname.includes('/item/') && (
        <button onClick={() => navigate(-1)} className="back-button">
          <TiArrowBackOutline />
        </button>
      )}
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {index !== 0 && ' / '}
          <Link to={item.href}>{item.label}</Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
