package com.swiftacad.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.swiftacad.entity.Book;
import com.swiftacad.entity.BookInfo;
import com.swiftacad.repository.BookInfoRepository;
import com.swiftacad.repository.BookRepository;

@Controller
public class BookInfoController {

	@Autowired
	private BookInfoRepository bookInfoRepo;

	@Autowired
	private BookRepository bookRepo;

	@RequestMapping(value = "bookInfo/{id}", method = RequestMethod.GET)
	public ResponseEntity<BookInfo> getBookInfoById(@PathVariable("id") Long id) {
		Optional<BookInfo> optional = bookInfoRepo.findById(id);
		if (optional.isPresent()) {
			return new ResponseEntity<>(optional.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "bookInfo/genre/{genre}", method = RequestMethod.GET)
	public ResponseEntity<List<BookInfo>> getBookInfosByGenre(@PathVariable("genre") String genre) {
		List<BookInfo> bookInfos = bookInfoRepo.getBookInfosByGenre(genre);
		if (bookInfos.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<BookInfo>>(bookInfos, HttpStatus.OK);
	}

	@RequestMapping(value = "bookInfo/author/{author}", method = RequestMethod.GET)
	public ResponseEntity<List<BookInfo>> getBookInfosByAuthor(@PathVariable("author") String author) {
		List<BookInfo> bookInfos = bookInfoRepo.getBookInfosByAuthor(author);
		if (bookInfos.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<BookInfo>>(bookInfos, HttpStatus.OK);
	}

	@RequestMapping(value = "book/{id}/bookInfo", method = RequestMethod.GET)
	public ResponseEntity<BookInfo> getBookInfoByBookId(@PathVariable("id") Long id) {
		Optional<Book> optional = bookRepo.findById(id);
		if (optional.isPresent()) {
			return new ResponseEntity<>(optional.get().getBookInfo(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
