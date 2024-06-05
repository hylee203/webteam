import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Cities.css";

const Ulsan = () => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        try {
            const resp = await axios.get('//localhost:8080/board');
            const filteredData = resp.data.data.filter(board => board.city.toLowerCase() === 'ulsan'); // city가 'daegu'인 게시글 필터링
            setBoardList(filteredData); // 필터링된 데이터를 boardList 변수에 할당
        } catch (error) {
            console.error('Error fetching board list:', error);
        }
    };

    const handleLike = async (idx) => {
        try {
            const resp = await axios.patch('//localhost:8080/board/like', { idx });
            if (resp.data.result === 'success') {
                // Update the local boardList to reflect the new likes count
                const updatedList = boardList.map(board => {
                    if (board.idx === idx) {
                        board.likes++;
                    }
                    return board;
                });
                setBoardList(updatedList);
            } else {
                console.error('Failed to update likes');
            }
        } catch (error) {
            console.error('Error updating likes:', error);
        }
    };

    const moveToWrite = () => {
        navigate('/write');
    };

    useEffect(() => {
        getBoardList(); // 게시글 목록 조회 함수 호출
    }, []);

    // Sort boardList by likes in descending order and slice to get top 3
    const sortedBoardList = [...boardList].sort((a, b) => b.likes - a.likes).slice(0, 3);

    return (
        <>
        <div>
            <ul id="places">
                {sortedBoardList.map((board) => (
                    <li className="hot-place place" key={board.idx}>
                        <div>
                            <img src={`/CityImages/${board.image}`} alt="게시글 이미지" />
                        </div>
                        <div className="place-content">
                            <h2><Link to={`/board/${board.idx}`}>{board.title}</Link></h2>
                            <p>{board.contents}</p>
                            <div className="like-container">
                                <button onClick={() => handleLike(board.idx)}>❤️</button>
                                <p>{board.likes}</p>
                            </div>
                        </div>
                    </li>
                ))}
                {/* Render the rest of the boardList after the top 3 */}
                {boardList.map((board) => (
                    !sortedBoardList.includes(board) && (
                        <li className="hot-place place" key={board.idx}>
                            <div>
                                <img src={`/CityImages/${board.image}`} alt="게시글 이미지" />
                            </div>
                            <div className="place-content">
                                <h2><Link to={`/board/${board.idx}`}>{board.title}</Link></h2>
                                <p>{board.contents}</p>
                                <div className="like-container">
                                    <button onClick={() => handleLike(board.idx)}>❤️</button>
                                    <p>{board.likes}</p>
                                </div>
                            </div>
                        </li>
                    )
                ))}
            </ul>
            <div id="buttons">
                <button><Link to="/">홈</Link></button>
                <button onClick={moveToWrite}>글쓰기</button>
            </div>
        </div>
        </>
    );
};

export default Ulsan;
