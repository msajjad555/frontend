import React from 'react'
import './Header.css'
const TooltipForm = () => {
  return (
<>




<h2>Basic Tooltip</h2>

<p>Move the mouse over the text below:</p>

<div className="tooltip">Hover over me
  <span className="tooltiptext">Tooltip text</span>
</div>

<p>Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to position the tooltip in a desirable way.</p>




</>
  )
}

export default TooltipForm