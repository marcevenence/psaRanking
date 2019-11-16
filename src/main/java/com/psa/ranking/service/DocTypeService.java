package com.psa.ranking.service;

import com.psa.ranking.domain.DocType;
import com.psa.ranking.repository.DocTypeRepository;
import com.psa.ranking.service.dto.DocTypeDTO;
import com.psa.ranking.service.mapper.DocTypeMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link DocType}.
 */
@Service
@Transactional
public class DocTypeService {

    private final Logger log = LoggerFactory.getLogger(DocTypeService.class);

    private final DocTypeRepository docTypeRepository;

    private final DocTypeMapper docTypeMapper;

    public DocTypeService(DocTypeRepository docTypeRepository, DocTypeMapper docTypeMapper) {
        this.docTypeRepository = docTypeRepository;
        this.docTypeMapper = docTypeMapper;
    }

    /**
     * Save a docType.
     *
     * @param docTypeDTO the entity to save.
     * @return the persisted entity.
     */
    public DocTypeDTO save(DocTypeDTO docTypeDTO) {
        log.debug("Request to save DocType : {}", docTypeDTO);
        DocType docType = docTypeMapper.toEntity(docTypeDTO);
        docType = docTypeRepository.save(docType);
        return docTypeMapper.toDto(docType);
    }

    /**
     * Get all the docTypes.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<DocTypeDTO> findAll(Pageable pageable) {
        log.debug("Request to get all DocTypes");
        return docTypeRepository.findAll(pageable)
            .map(docTypeMapper::toDto);
    }


    /**
     * Get one docType by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<DocTypeDTO> findOne(Long id) {
        log.debug("Request to get DocType : {}", id);
        return docTypeRepository.findById(id)
            .map(docTypeMapper::toDto);
    }

    /**
     * Delete the docType by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete DocType : {}", id);
        docTypeRepository.deleteById(id);
    }
}
