package net.splitwise.springboot.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.splitwise.springboot.exception.ResoruceNotFoundException;
import net.splitwise.springboot.model.Friend;
import net.splitwise.springboot.repository.FriendRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class FriendController {
	
	@Autowired
	private FriendRepository friendRepository;

	//get all friends
	@GetMapping("/friends")
	public List<Friend> getAllFriends(){
		return this.friendRepository.findAll();
	}
	
		
	//get friend by id
	@GetMapping("/friends/{id}")
	public ResponseEntity<Friend> getAllFriendsById(@PathVariable Long id) throws ResoruceNotFoundException{
		Friend friend = friendRepository.findById(id).orElseThrow(() -> new ResoruceNotFoundException("Friend not found for this id ::" + id));
		return ResponseEntity.ok(friend);
	}
	
	//save friend
	@PostMapping("/friends")
	public Friend createFriend(@RequestBody Friend friend) {
		return friendRepository.save(friend);
	}
	
	//update friend
	@PutMapping("/friends/{id}")
	public ResponseEntity<Friend> updateFriend(@PathVariable Long id, @Validated @RequestBody Friend friendDetails) throws ResoruceNotFoundException{
		Friend friend = friendRepository.findById(id).orElseThrow(() -> new ResoruceNotFoundException("Friend not found for this id ::" + id));
		
		friend.setEmail(friendDetails.getEmail());
		friend.setName(friendDetails.getName());
		friend.setPhone(friendDetails.getPhone());
		friend.setGender(friendDetails.getGender());
		friend.setCompany(friendDetails.getCompany());
		friend.setUnsettled(friendDetails.getUnsettled());
		
		Friend updatedFriend = friendRepository.save(friend);
		return ResponseEntity.ok(updatedFriend);
	}
	
	//delete friend
	@RequestMapping(value = "/friends/{id}", method = {RequestMethod.DELETE})
	@ResponseBody
	public ResponseEntity<Map<String, Boolean>> deleteFriend(@PathVariable("id") Long id) throws ResoruceNotFoundException{
		Friend friend = friendRepository.findById(id).orElseThrow(() -> new ResoruceNotFoundException("Friend not found for this id ::" + id));
		friendRepository.delete(friend);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
}