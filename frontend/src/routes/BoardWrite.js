import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        createdBy: '',
        contents: '',
        city: 'Daejeon' // 기본 도시
    });

    const { title, createdBy, contents, city } = board; // 비구조화 할당

    const onChange = (event) => {
        const { value, name } = event.target; // event.target에서 name과 value만 가져오기
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = async () => {
        await axios.post(`http://localhost:8080/board`, board)
            .then((res) => {
                alert('등록되었습니다.');
                navigate('/board');
            })
            .catch((error) => {
                console.error('Error while saving board:', error);
                alert('게시글 저장에 실패했습니다.');
            });
    };


    const backToList = () => {
        navigate('/board');
    };

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>작성자</span>
                <input type="text" name="createdBy" value={createdBy} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>내용</span>
                <textarea name="contents" cols="30" rows="10" value={contents} onChange={onChange}></textarea>
            </div>
            <br />
            <div>
                <span>도시</span>
                <select name="city" value={city} onChange={onChange}>
                    <option value="Daejeon">Daejeon</option>
                    <option value="Daegu">Daegu</option>
                    <option value="Ulsan">Ulsan</option>
                    <option value="Gwangju">Gwangju</option>
                </select>
            </div>
            <br />
            <div>
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </div>
    );
};

export default BoardWrite;
