package com.example.application.controller;

import com.example.application.entity.Folder;
import com.example.application.entity.Item;
import com.example.application.exceptions.ItemNotFoundException;
import com.example.application.repository.FolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins ="http://localhost:3000",maxAge = 3600)
@RestController
public class FolderController {



    @Autowired
    FolderRepository folderRepository;

    // Get All Folders
    @GetMapping("/folders")
    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    // Create a new Item
    @PostMapping("/folders")
    public Folder createFolder(@Valid @RequestBody Folder folder) {
        return folderRepository.save(folder);
    }

    // Get a Single Item
    @GetMapping("/folders/{id}")
    public Folder getFolderById(@PathVariable(value = "id") Long folderId) throws ItemNotFoundException {
        return folderRepository.findById(folderId)
                .orElseThrow(() -> new ItemNotFoundException(folderId));
    }

    // Update a Item
    @PutMapping("/folders/{id}")
    public Folder updateFolder(@PathVariable(value = "id") Long folderId,
                           @Valid @RequestBody Folder folderDetails) throws ItemNotFoundException {

        Folder folder = folderRepository.findById(folderId)
                .orElseThrow(() -> new ItemNotFoundException(folderId));

        folder.setDescription(folderDetails.getDescription());
        folder.setItems(folderDetails.getItems());
        Folder updatedFolder = folderRepository.save(folder);

        return updatedFolder;
    }

    // Delete a Note
    @DeleteMapping("/folders/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable(value = "id") Long folderId) throws ItemNotFoundException {
        Folder folder = folderRepository.findById(folderId)
                .orElseThrow(() -> new ItemNotFoundException(folderId));

        folderRepository.delete(folder);

        return ResponseEntity.ok().build();
    }




}
