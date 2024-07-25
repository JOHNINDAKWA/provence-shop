import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import PostersData from "./PostersData";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "./Posters.css";

const Posters = () => {
  const category = "posters"; 

  const breadcrumbItems = [
    { label: "All collections", href: "/collections" },
    { label: "All Posters", href: "/posters" }, 
  ];

  return (
    <div className="Posters">
      <BreadCrumb items={breadcrumbItems} />

      <div className="posters-container">

        <div className="sort-filter">
          <h2>All Posters</h2>
          <div className="controls">
            <div className="sort">
              <p>Sort By</p>
              <select name="sorting_options">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </div>

            <div className="filter">
              <h2>Filter By</h2>
              <select id="filter-dropdown">
                <option value="">All</option>
                <optgroup label="Category">
                  <option value="in-stock">In Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </optgroup>
                <optgroup label="Price Range">
                  <option value="under-100">Under Kshs.100</option>
                  <option value="100-200">Kshs.100 - Kshs.200</option>
                  <option value="above-200">Above Kshs.200</option>
                </optgroup>
              </select>
            </div>

            <select id="price-range-dropdown">
              <option value="">Price Range</option>
              <option value="under-100">Under Kshs.100</option>
              <option value="100-200">Kshs.100 - Kshs.200</option>
              <option value="above-200">Above Kshs.200</option>
            </select>
          </div>
        </div>

        <div className="poster-cards">
          {PostersData.map((posterItem) => (
            <Link 
              key={posterItem.id} 
              to={`/item/${posterItem.id}/${category}`} 
              className="poster-card"
            >
              <img src={posterItem.imgSrc} alt={posterItem.description} />
              <p>{posterItem.description}</p>
              <span>{posterItem.price}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="navigation">
        <div className="previous">
          <GrFormPrevious />
          <p>Previous</p>
        </div>
        <div className="numbering">
          <p>1</p>
          <p>2</p>
          <p>...</p>
        </div>
        <div className="next">
          <p>Next</p>
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default Posters;
