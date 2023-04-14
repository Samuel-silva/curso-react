import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {
	const [numberAdd, setNumberAdd] = useState(0)
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div className="UseReducer">
			<PageTitle
				title="Hook UseReducer"
				subtitle="Uma outra forma de ter estado em componentes funcionais!"
			/>
			<div className="center">
				{state.user ?
					<span className="text">{state.user.name}</span>
					: <span className="text">Sem usuário</span>
				}
				<span className="text">{state.number}</span>
				<div>
					<button
						className="btn"
						onClick={() => login(dispatch, 'Samuel')}
					>
						Login
					</button>
					<button
						className="btn"
						onClick={() => numberAdd2(dispatch)}
					>
						+2
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'numberMulti7' })}
					>
						x7
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'numberDiv25' })}
					>
						÷25
					</button>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'numberInt' })}
					>
						Inteiro
					</button>
				</div>
				<div>
					<input
						type="number"
						className="input"
						value={numberAdd}
						onChange={e => setNumberAdd(parseInt(e.target.value))}
					/>
					<button
						className="btn"
						onClick={() => dispatch({ type: 'numberAddN', payload: numberAdd })}
					>
						Adicionar
					</button>
				</div>
			</div>
		</div>
	)
}

export default UseReducer
