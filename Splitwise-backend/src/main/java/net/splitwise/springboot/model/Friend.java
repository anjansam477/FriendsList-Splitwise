package net.splitwise.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "friends")
public class Friend {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "phone")
	private String phone;
		
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "company")
	private String company;
	
	@Column(name = "unsettled")
	private Number unsettled;
	
	
	public Friend() {
		super();
	}

	
	public Friend(String name, String email, String phone, String gender, String company, Number unsettled) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.gender = gender;
		this.company = company;
		this.unsettled = unsettled;
	}



	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getCompany() {
		return company;
	}


	public void setCompany(String company) {
		this.company = company;
	}


	public Number getUnsettled() {
		return unsettled;
	}


	public void setUnsettled(Number unsettled) {
		this.unsettled = unsettled;
	}
	
	
}
