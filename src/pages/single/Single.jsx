import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src=""
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Audi Q3</h1>
                <div className="detailItem">
                  <span className="itemKey">Year:</span>
                  <span className="itemValue">2017</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">price:</span>
                  <span className="itemValue">1200000</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Engine:</span>
                  <span className="itemValue">
                  turbocharged 2.0-liter four-cylinder
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stock number:</span>
                  <span className="itemValue">12v123</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">model:</span>
                  <span className="itemValue">A3</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Mileage:</span>
                  <span className="itemValue">13</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Fuel Type:</span>
                  <span className="itemValue">Petrol</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Fuel economy:</span>
                  <span className="itemValue">13</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">color:</span>
                  <span className="itemValue">red</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stock number:</span>
                  <span className="itemValue">13V120</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
