import React from "react";

function UseCallbackButtons(props) {
	const { inc } = props

	return(
    <div>
			<button
				className="btn"
				onClick={() => inc(6)}
			>
				+6
			</button>
			<button
				className="btn"
				onClick={() => inc(12)}
			>
				+12
			</button>
			<button
				className="btn"
				onClick={() => inc(18)}
			>
				+18
			</button>
		</div>
	)
}

export default React.memo(UseCallbackButtons);
