import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";

const TopSellers = () => {
  const [data, setData] = React.useState([]);

  async function getData() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
    );
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row" data-aos="fade-right" data-aos-duration="1000">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {data.map((elem, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                    <Link to={`/author/${elem.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={elem.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${elem.authorId}`}>
                      {elem.authorName}
                    </Link>
                    <span>{elem.price} ETH</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
