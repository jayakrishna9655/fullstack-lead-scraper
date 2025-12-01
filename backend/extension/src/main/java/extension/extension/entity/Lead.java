package extension.extension.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "leads")
public class Lead {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String name;
	    private String email;
	    private String phone;
	    private String socialLink;
	    private String pageUrl;

	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
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

	    public String getSocialLink() {
	        return socialLink;
	    }

	    public void setSocialLink(String socialLink) {
	        this.socialLink = socialLink;
	    }

	    public String getPageUrl() {
	        return pageUrl;
	    }

	    public void setPageUrl(String pageUrl) {
	        this.pageUrl = pageUrl;
	    }
    // Getters + Setters
}
