import React from 'react'
import './css/List.css';

function List({ tasks, status, onCheckClick, onDeleteClick}) {	
	return (
		<div className="list">
			{
				tasks && tasks.map((l) => (
					<div className="list__detail" key={l.id}>
						<div className="detail__left">
							<input className="list__check" type="checkbox"
								onClick={() => { onCheckClick(l.id) }}
								defaultChecked={status === 2}
							/>
							<h1 className={`list__title ${status === 2 ? 'list__title__cross' : ''} `}>{l.taskDetail}</h1>
						</div>
						{ status === 2 && tasks.length > 0 ?
							<i className="material-icons md-18" onClick={() => { onDeleteClick(l.id) }}>
								delete_outline</i>
							: null
						}
					</div>
				))
			}
			{ status === 2 && tasks.length > 0 ?
				<button className="button__delete" onClick={() => { onDeleteClick() }}>
					<i className="material-icons md-18">delete_outline</i> delete all
		    	</button>
				: null
			}
		</div>
	)
}

export default List;
