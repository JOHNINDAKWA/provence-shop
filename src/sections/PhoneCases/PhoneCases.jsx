import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import phoneCasesData from "./phoneCasesData";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "./PhoneCases.css";

const PhoneCases = () => {
  const category = "phone-cases";

  const breadcrumbItems = [
    { label: "All collections", href: "/collections" },
    { label: "iPhone", href: "/phonecases" },
  ];

  return (
    <div className="PhoneCases">
      <BreadCrumb items={breadcrumbItems} />

      <div className="header">
        <h2>iPhone Cases</h2>
        <p>
          Available in a sleek and minimal snap case ($40) or a tough case for added protection ($45)
        </p>
      </div>
      
      <div className="cards">
        {phoneCasesData.map(caseItem => (
          <Link 
            key={caseItem.id} 
            to={`/item/${caseItem.id}/${category}`} 
            className="card"
          >
            <img src={caseItem.imgSrc} alt={caseItem.description} />
            <p>{caseItem.description}</p>
            <span>Kshs.{caseItem.price}</span>
          </Link>
        ))}
      </div>

      <div className="navigation">
        <div className="next">
          <GrFormPrevious />
          <p>previous</p>
        </div>
        <div className="previous">
          <p>next</p>
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default PhoneCases;
