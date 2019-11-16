package com.psa.ranking.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class RosterMapperTest {

    private RosterMapper rosterMapper;

    @BeforeEach
    public void setUp() {
        rosterMapper = new RosterMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(rosterMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(rosterMapper.fromId(null)).isNull();
    }
}
