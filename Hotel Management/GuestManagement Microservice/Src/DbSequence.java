package com.example.GuestManagementMicroservice;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_sequence")
public class DbSequence {
    @Id
    private String  iD;
	private int seq;
	
	
    public String getiD() {
		return iD;
	}
	public void setiD(String iD) {
		this.iD = iD;
	}

	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	
}

