import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Cities.css";

const Daegu = () => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        try {
            const resp = await axios.get('//localhost:8080/board');
            const filteredData = resp.data.data.filter(board => board.city.toLowerCase() === 'daegu'); // city가 'daegu'인 게시글 필터링
            setBoardList(filteredData); // 필터링된 데이터를 boardList 변수에 할당
        } catch (error) {
            console.error('Error fetching board list:', error);
        }
    };

    const moveToWrite = () => {
        navigate('/write');
    };

    useEffect(() => {
        getBoardList(); // 게시글 목록 조회 함수 호출
    }, []);

    return (
        <div>
            <ul id="places">
                {boardList.map((board) => (
                    <li className="hot-place place" key={board.idx}>

                        <div>
                            <img src={`/CityImages/${board.image}`} alt="게시글 이미지" />
                        </div>
                        <div className="place-content">
                            <h2><Link to={`/board/${board.idx}`}>{board.title}</Link></h2>
                            <p>{board.contents}</p>
                            <p>❤️ : {board.likes}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <button><Link to="/">홈</Link></button>
                <button onClick={moveToWrite}>글쓰기</button>
            </div>
        </div>
    );
};

export default Daegu;
