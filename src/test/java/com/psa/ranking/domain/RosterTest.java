package com.psa.ranking.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.psa.ranking.web.rest.TestUtil;

public class RosterTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Roster.class);
        Roster roster1 = new Roster();
        roster1.setId(1L);
        Roster roster2 = new Roster();
        roster2.setId(roster1.getId());
        assertThat(roster1).isEqualTo(roster2);
        roster2.setId(2L);
        assertThat(roster1).isNotEqualTo(roster2);
        roster1.setId(null);
        assertThat(roster1).isNotEqualTo(roster2);
    }
}
