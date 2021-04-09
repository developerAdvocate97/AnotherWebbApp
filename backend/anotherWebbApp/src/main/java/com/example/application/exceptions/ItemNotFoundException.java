package com.example.application.exceptions;


public class ItemNotFoundException extends Exception{
    private long item_id;

    public ItemNotFoundException(long item_id) {
        super(String.format("Book is not found with id : '%s'", item_id));
    }


}
