package extension.extension.controller;

import extension.extension.entity.Lead;
import extension.extension.payload.LeadPayload;
import extension.extension.service.LeadService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/leads")

public class LeadController {

    private final LeadService service;

    public LeadController(LeadService service) {
        this.service = service;
    }

    @PostMapping("/save")
    @CrossOrigin(origins = "*")
    public Lead saveLead(@RequestBody LeadPayload payload) {

        Lead lead = new Lead();
        lead.setName(payload.getName());

        lead.setEmail(String.join(",", payload.getEmails()));
        lead.setPhone(String.join(",", payload.getPhones()));
        lead.setSocialLink(String.join(",", payload.getSocialLinks()));
        lead.setPageUrl(payload.getPageUrl());

        return service.saveLead(lead);
    }


    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public List<Lead> getAllLeads() {
        return service.getAllLeads();
    }
}
