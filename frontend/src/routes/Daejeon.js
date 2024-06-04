import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const BoardList = () => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        const resp = await axios.get('//localhost:8080/board');
        const data = resp.data.data; // 게시글 목록 데이터
        const filteredData = data.filter(board => board.city === 'Daejeon'); // Daejeon city 필터링

        setBoardList(filteredData);
    };

    const moveToWrite = () => {
        navigate('/write');
    };

    useEffect(() => {
        getBoardList();
    }, []);

    return (
        <div>
            <ul>
                {boardList.map(board => (
                    <li key={board.idx}>
                        <Link to={`/board/${board.idx}`}>{board.title}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={moveToWrite}>글쓰기</button>
            </div>
        </div>
    );
};

export default BoardList;
