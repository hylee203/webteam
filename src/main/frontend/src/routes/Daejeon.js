import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Cities.css";

const Daejeon = () => {
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        try {
            const resp = await axios.get('//localhost:8080/board');
            const filteredData = resp.data.data.filter(board => board.city.toLowerCase() === 'daejeon');
            setBoardList(filteredData);
        } catch (error) {
            console.error('Error fetching board list:', error);
        }
    };

    const handleLike = async (idx) => {
        try {
            // Optimistically update the UI
            const updatedList = boardList.map(board => {
                if (board.idx === idx) {
                    return { ...board, likes: board.likes + 1 };
                }
                return board;
            });
            setBoardList(updatedList);

            const resp = await axios.patch('//localhost:8080/board/like', { idx });
            if (resp.data.result !== 'success') {
                // Revert the optimistic update if the server request fails
                const revertedList = boardList.map(board => {
                    if (board.idx === idx) {
                        return { ...board, likes: board.likes + 1 };
                    }
                    return board;
                });
                setBoardList(revertedList);
                console.error('Failed to update likes');
            }
        } catch (error) {
            // Revert the optimistic update if an error occurs
            const revertedList = boardList.map(board => {
                if (board.idx === idx) {
                    return { ...board, likes: board.likes + 1 };
                }
                return board;
            });
            setBoardList(revertedList);
            console.error('Error updating likes:', error);
        }
    };

    const moveToWrite = () => {
        navigate('/write');
    };

    useEffect(() => {
        getBoardList();
    }, []);

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

export default Daejeon;
