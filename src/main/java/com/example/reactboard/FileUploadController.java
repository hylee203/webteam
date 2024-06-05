package com.example.reactboard;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@CrossOrigin
@RestController
public class FileUploadController {

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            // 저장할 경로 설정
            String filePath = "src/main/resources/CityImages/" + file.getOriginalFilename();
            Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
            return filePath; // 파일 경로 반환
        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }
}
