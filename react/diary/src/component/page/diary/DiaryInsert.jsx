import { useState } from "react"

export function DiaryInsert(){

	const [date, setDate] = useState({date : '', title : '', content : '', isPublic : ''});
	const [emotions, setEmotions] = useState([
		{id : '1', name : '행복', emoji : '😊'}
	]);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");


	return(
		<div>
			<h1>일기 작성</h1>


			<div>
				<label>날짜</label>
				<input 
					type = "date"
					value = {date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</div>

			<div>
				<select name="emotions">
					{
						emotions.map((e)=> {
							return(
								<option key ={e.id} value={e.id}>
									{e.emoji} {e.name}
								</option>
						)})
					}
				</select>
			</div>

			<div>
				<label>제목</label>
				<input 
				type = "text"
				value = {title}
				onChange={(e)=>setTitle(e.target.value)}
				/>
			</div>

			<div>
				<label>내용</label>
				<textarea
					value = {content}
					onChange={(e)=> setContent(e.target.value)}
				></textarea>
			</div>

			<br />
				<button type="submit">일기 등록</button>


			

		</div>
	)
}