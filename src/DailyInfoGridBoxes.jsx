import "./DailyInfoGridBoxes.css"

function DailyInfoGridBoxes() {
  return (
    <div className="dailyInfoGridBoxes">
      <div className='belowFourBoxesText'>Daily forecast</div>
      <div className="sevenBox">
        <div className="box first"></div>
        <div className="box second"></div>
        <div className="box third"></div>
        <div className="box fourth"></div>
        <div className="box fifth"></div>
        <div className="box sixth"></div>
        <div className="box seventh"></div>
      </div>
    </div>
  )
}

export default DailyInfoGridBoxes;