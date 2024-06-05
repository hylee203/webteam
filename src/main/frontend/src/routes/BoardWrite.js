import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FileUpload from '../components/FileUpload';
import '../styles/BoardWrite.css';

const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        createdBy: '',
        contents: '',
        city: 'Daejeon',
        image: '',
        likes: 0
    });

    const { title, createdBy, contents, city, image } = board;

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = async () => {
        await axios.post('http://localhost:8080/board', board)
            .then((res) => {
                alert('등록되었습니다.');
                navigate('/');
            })
            .catch((error) => {
                console.error('Error while saving board:', error);
                alert('게시글 저장에 실패했습니다.');
            });
    };

    const backToList = () => {
        navigate('/');
    };

    const handleFileUpload = (filePath) => {
        setBoard({
            ...board,
            image: filePath
        });
    };

    return (
        <div className="board-write-container">
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange} />
            </div>
            <div>
                <span>작성자</span>
                <input type="text" name="createdBy" value={createdBy} onChange={onChange} />
            </div>
            <div>
                <span>내용</span>
                <textarea name="contents" cols="30" rows="10" value={contents} onChange={onChange}></textarea>
            </div>
            <div>
                <span>도시</span>
                <select name="city" value={city} onChange={onChange}>
                    <option value="Daejeon">Daejeon</option>
                    <option value="Daegu">Daegu</option>
                    <option value="Ulsan">Ulsan</option>
                    <option value="Gwangju">Gwangju</option>
                </select>
            </div>
            <div className="file-upload">
                <span>이미지 업로드</span>
                <FileUpload onFileUpload={handleFileUpload} />
            </div>
            {image && (
                <div className="image-preview">
                    <img src={image} alt="Uploaded" />
                </div>
            )}
            <div>
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </div>
    );
};

export default BoardWrite;
