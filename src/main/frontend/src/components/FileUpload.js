import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onFileUpload }) => {
    const [file, setFile] = useState(null);

    const onChange = (event) => {
        setFile(event.target.files[0]);
    };

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            onFileUpload(res.data); // 이미지 업로드 후 처리할 로직을 부모 컴포넌트에 전달
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={onChange} />
            <button onClick={uploadFile}>Upload</button>
        </div>
    );
};

export default FileUpload;
