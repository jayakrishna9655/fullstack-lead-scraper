package extension.extension.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import extension.extension.entity.Lead;

public interface LeadRepository extends JpaRepository<Lead, Long> {

}
