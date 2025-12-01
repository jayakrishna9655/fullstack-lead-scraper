package extension.extension.service;

import java.util.List;
import org.springframework.stereotype.Service;
import extension.extension.entity.Lead;
import extension.extension.repository.LeadRepository;

@Service
public class LeadService {

    private final LeadRepository repo;

    public LeadService(LeadRepository repo) {
        this.repo = repo;
    }

    public Lead saveLead(Lead lead) {
        return repo.save(lead);
    }

    public List<Lead> getAllLeads() {
        return repo.findAll();
    }
}
