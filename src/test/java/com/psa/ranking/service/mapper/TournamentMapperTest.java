package com.psa.ranking.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;


public class TournamentMapperTest {

    private TournamentMapper tournamentMapper;

    @BeforeEach
    public void setUp() {
        tournamentMapper = new TournamentMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 2L;
        assertThat(tournamentMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(tournamentMapper.fromId(null)).isNull();
    }
}
