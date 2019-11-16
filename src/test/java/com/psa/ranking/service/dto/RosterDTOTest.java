package com.psa.ranking.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.psa.ranking.web.rest.TestUtil;

public class RosterDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(RosterDTO.class);
        RosterDTO rosterDTO1 = new RosterDTO();
        rosterDTO1.setId(1L);
        RosterDTO rosterDTO2 = new RosterDTO();
        assertThat(rosterDTO1).isNotEqualTo(rosterDTO2);
        rosterDTO2.setId(rosterDTO1.getId());
        assertThat(rosterDTO1).isEqualTo(rosterDTO2);
        rosterDTO2.setId(2L);
        assertThat(rosterDTO1).isNotEqualTo(rosterDTO2);
        rosterDTO1.setId(null);
        assertThat(rosterDTO1).isNotEqualTo(rosterDTO2);
    }
}
