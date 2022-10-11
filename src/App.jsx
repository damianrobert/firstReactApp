import './App.css'


export default function App(){
  return(
    <div className="appContainer">
      <section className="headSection">
        <span>Spending - Last 7 days</span>
      </section>
      <div className="chart">
        <section className="mainSection">
          <div className="chartBody" id="mon"></div>
          <div className="chartBody" id="tue"></div>
          <div className="chartBody" id="wed"></div>
          <div className="chartBody" id="thu"></div>
          <div className="chartBody" id="fri"></div>
          <div className="chartBody" id="sat"></div>
          <div className="chartBody" id="sun"></div>
        </section>
        <section className="days">
          <span id="mon">mon</span>
          <span>tue</span>
          <span>wed</span>
          <span>thu</span>
          <span>fri</span>
          <span>sat</span>
          <span>sun</span>
        </section>
      </div>
      <section className="footSection">
        <div className="total">
          <p>Total this month:</p>
          <span>$478.33</span>
        </div>

        <div className="lastMonth">
          <span>+2.4%</span>
          <p>from last month</p>
        </div>
      </section>
    </div>
  )
}