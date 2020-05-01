package com.swiftacad.rest;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.swiftacad.entity.Address;
import com.swiftacad.repository.AddressRepository;

@Controller
public class AddressController {

	@Autowired
	private AddressRepository addressrepo;

	@RequestMapping(value = "address", method = RequestMethod.PUT)
	public ResponseEntity<Void> changeAddress(@Valid @RequestBody Address address) {
		addressrepo.save(address);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "address/{id}", method = RequestMethod.GET)
	public ResponseEntity<Address> getAddressById(@PathVariable("id") Long id) {
		Optional<Address> optional = addressrepo.findById(id);
		if (optional.isPresent()) {
			return new ResponseEntity<>(optional.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(value = "addresses", method = RequestMethod.GET)
	public ResponseEntity<List<Address>> getAllAdresses() {
		List<Address> addresses = new ArrayList<>();
		addressrepo.findAll().forEach(x -> addresses.add(x));
		if (addresses.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(addresses, HttpStatus.OK);
	}

}
