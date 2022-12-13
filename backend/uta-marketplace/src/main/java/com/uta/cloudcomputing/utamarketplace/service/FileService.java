package com.uta.cloudcomputing.utamarketplace.service;

import com.uta.cloudcomputing.utamarketplace.entity.InputFile;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FileService {

    List<InputFile> uploadFiles(MultipartFile[] files);
}
