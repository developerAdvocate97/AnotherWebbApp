package com.example.application.controller;


import com.example.application.entity.Item;
import com.example.application.exceptions.ItemNotFoundException;
import com.example.application.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins ="http://localhost:3000",maxAge = 3600)
@RestController
public class ItemController {


    @Autowired
    ItemRepository itemRepository;

    // Get All Items
    @GetMapping("/items")
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    // Create a new Item
    @PostMapping("/items")
    public Item createItem(@Valid @RequestBody Item item) {
        return itemRepository.save(item);
    }

    // Get a Single Item
    @GetMapping("/items/{id}")
    public Item getItemById(@PathVariable(value = "id") Long itemId) throws ItemNotFoundException {
        return itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException(itemId));
    }

    // Update a Item
    @PutMapping("/items/{id}")
    public Item updateItem(@PathVariable(value = "id") Long itemId,
                           @Valid @RequestBody Item itemDetails) throws ItemNotFoundException {

        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException(itemId));

        item.setCompleted(itemDetails.getCompleted());
        item.setDescription(itemDetails.getDescription());
        Item updatedItem = itemRepository.save(item);

        return updatedItem;
    }

    // Delete a Note
    @DeleteMapping("/items/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable(value = "id") Long itemId) throws ItemNotFoundException {
        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException(itemId));

        itemRepository.delete(item);

        return ResponseEntity.ok().build();
    }







}
