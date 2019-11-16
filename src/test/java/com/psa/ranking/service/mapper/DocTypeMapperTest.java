package com.psa.ranking.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class DocTypeMapperTest {

    private DocTypeMapper docTypeMapper;

    @BeforeEach
    public void setUp() {
        docTypeMapper = new DocTypeMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(docTypeMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(docTypeMapper.fromId(null)).isNull();
    }
}
